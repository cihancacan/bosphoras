'use client';

import { useEffect, useState } from 'react';
import { Bell, BellRing, X } from 'lucide-react';
import { getPortalSupabase } from '@/lib/portalSupabase';

function urlBase64ToUint8Array(base64String: string) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  return Uint8Array.from([...rawData].map((char) => char.charCodeAt(0)));
}

export function PortalNotificationBridge({ userId }: { userId?: string | null }) {
  const supabase: any = getPortalSupabase();
  const [permissionPrompt, setPermissionPrompt] = useState(false);
  const [toast, setToast] = useState<any>(null);

  async function registerServiceWorker() {
    if (!('serviceWorker' in navigator)) return null;
    try {
      return await navigator.serviceWorker.register('/bosphoras-sw.js', { scope: '/' });
    } catch {
      return null;
    }
  }

  async function savePushSubscription(registration: ServiceWorkerRegistration) {
    if (!userId || !('PushManager' in window)) return;
    const vapid = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY || 'BGUu5LrZJ2ewVVVeysSe8CmIs9L83Iw-cG9DwMBNWH0WG7k6nrSENw77oVa5T1qpec2mAN2RK6mGzmUZNh8E8x8';
    if (!vapid) return;

    try {
      let subscription = await registration.pushManager.getSubscription();
      if (!subscription) {
        subscription = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(vapid),
        });
      }
      const json = subscription.toJSON();
      if (!json.endpoint || !json.keys?.p256dh || !json.keys?.auth) return;
      await supabase.from('portal_push_subscriptions').upsert(
        {
          user_id: userId,
          endpoint: json.endpoint,
          p256dh: json.keys.p256dh,
          auth_key: json.keys.auth,
          user_agent: navigator.userAgent,
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'endpoint' }
      );
    } catch {
      // Browser-level push may be unavailable even when notifications are allowed.
    }
  }

  async function enableNotifications() {
    if (!('Notification' in window)) {
      setPermissionPrompt(false);
      return;
    }
    const result = await Notification.requestPermission();
    localStorage.setItem('bosphoras-notification-choice', result);
    setPermissionPrompt(false);
    if (result === 'granted') {
      const registration = await registerServiceWorker();
      if (registration) await savePushSubscription(registration);
    }
  }

  function declineNotifications() {
    localStorage.setItem('bosphoras-notification-choice', 'declined');
    setPermissionPrompt(false);
  }

  useEffect(() => {
    if (!userId || typeof window === 'undefined') return;

    const choice = localStorage.getItem('bosphoras-notification-choice');
    if ('Notification' in window && Notification.permission === 'default' && !choice) {
      window.setTimeout(() => setPermissionPrompt(true), 900);
    }
    if ('Notification' in window && Notification.permission === 'granted') {
      registerServiceWorker().then((registration) => {
        if (registration) savePushSubscription(registration);
      });
    }

    const channel = supabase
      .channel(`portal-popup-${userId}`)
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'notifications', filter: `user_id=eq.${userId}` },
        async (payload) => {
          const item = payload.new as any;
          setToast(item);
          window.setTimeout(() => setToast((current: any) => (current?.id === item.id ? null : current)), 8000);

          if ('Notification' in window && Notification.permission === 'granted' && document.visibilityState !== 'visible') {
            const registration = await navigator.serviceWorker.ready.catch(() => null);
            if (registration) {
              registration.showNotification(item.title || 'Bosphoras', {
                body: item.body || '',
                icon: '/favicon.ico',
                badge: '/favicon.ico',
                tag: item.id || undefined,
                data: { href: item.href || '/espace' },
              });
            }
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [userId, supabase]);

  return (
    <>
      {permissionPrompt ? (
        <div className="fixed bottom-5 right-5 z-[90] w-[min(420px,calc(100vw-40px))] rounded-2xl border border-[#c9d4dc] bg-white p-5 shadow-[0_25px_80px_rgba(8,25,40,.24)]">
          <div className="flex gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#12304a] text-white"><BellRing size={19}/></div>
            <div>
              <strong className="block text-base text-[#162334]">Activer les notifications Bosphoras ?</strong>
              <p className="mt-1 text-sm leading-6 text-[#687685]">Recevez immédiatement les nouveaux messages, validations et alertes importantes. Vous gardez le contrôle et pouvez refuser.</p>
            </div>
          </div>
          <div className="mt-5 flex gap-2">
            <button onClick={enableNotifications} className="min-h-[42px] flex-1 rounded-lg bg-[#12304a] px-4 text-sm font-semibold text-white">Oui, activer</button>
            <button onClick={declineNotifications} className="min-h-[42px] rounded-lg border border-[#cfd8e3] px-4 text-sm font-semibold text-[#526272]">Non</button>
          </div>
        </div>
      ) : null}

      {toast ? (
        <button
          type="button"
          onClick={() => {
            if (toast.href) window.location.href = toast.href;
            setToast(null);
          }}
          className="fixed right-5 top-20 z-[95] w-[min(390px,calc(100vw-40px))] rounded-xl border border-[#b9cbd8] bg-[#0d1c2b] p-4 text-left text-white shadow-[0_22px_70px_rgba(7,20,33,.28)]"
        >
          <span className="flex items-start gap-3">
            <Bell size={17} className="mt-0.5 shrink-0 text-[#c9aa7a]"/>
            <span className="min-w-0 flex-1">
              <strong className="block text-sm">{toast.title || 'Bosphoras'}</strong>
              <span className="mt-1 block text-xs leading-5 text-[#b9c0ca]">{toast.body || ''}</span>
            </span>
            <X size={15} className="shrink-0 text-[#8fa1b0]"/>
          </span>
        </button>
      ) : null}
    </>
  );
}
