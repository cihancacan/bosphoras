'use client';

import { useEffect } from 'react';

type DeskLocale='fr'|'en'|'ru';

const rows:Array<[string,string,string]>=[
  ['Vue d’ensemble','Overview','Обзор'],
  ['Biens & projets','Properties & projects','Объекты и проекты'],
  ['Opérations','Operations','Операции'],
  ['Chat interne','Internal chat','Внутренний чат'],
  ['Calculateurs','Calculators','Калькуляторы'],
  ['Mon compte','My account','Мой аккаунт'],
  ['Importer par lien','Import by link','Импорт по ссылке'],
  ['Partenaires','Partners','Партнеры'],
  ['Validations','Approvals','Проверки'],
  ['Administration complète','Full administration','Полное администрирование'],
  ['Espace partenaire','Partner area','Кабинет партнера'],
  ['Voir Property Desk','View Property Desk','Открыть Property Desk'],
  ['Pilotage Bosphoras','Bosphoras dashboard','Панель Bosphoras'],
  ['Votre activité','Your activity','Ваша активность'],
  ['Administration','Administration','Администрирование'],
  ['Partner Desk','Partner Desk','Partner Desk'],
  ['Partenaires actifs','Active partners','Активные партнеры'],
  ['Biens attribués','Assigned properties','Назначенные объекты'],
  ['Contacts CRM','CRM contacts','CRM контакты'],
  ['Deals actifs','Active deals','Активные сделки'],
  ['Pipeline pondéré','Weighted pipeline','Взвешенный pipeline'],
  ['Notifications','Notifications','Уведомления'],
  ['Tout effacer','Clear all','Очистить все'],
  ['Actualiser','Refresh','Обновить'],
  ['Opérations immobilières','Property operations','Операции с недвижимостью'],
  ['Visites · documents · commissions','Viewings · documents · commissions','Показы · документы · комиссии'],
  ['Visites','Viewings','Показы'],
  ['Documents','Documents','Документы'],
  ['Commissions','Commissions','Комиссии'],
  ['Planifier une visite','Schedule a viewing','Запланировать показ'],
  ['Contact CRM','CRM contact','CRM контакт'],
  ['Bien / projet','Property / project','Объект / проект'],
  ['Non défini','Not set','Не задано'],
  ['Date et heure','Date and time','Дата и время'],
  ['Type','Type','Тип'],
  ['Visite physique','Physical viewing','Очный показ'],
  ['Visite vidéo','Video viewing','Видео-показ'],
  ['Rendez-vous promoteur','Developer meeting','Встреча с застройщиком'],
  ['Remise des clés','Handover','Передача ключей'],
  ['Point de rendez-vous / lien vidéo','Meeting point / video link','Место встречи / ссылка на видео'],
  ['Notes','Notes','Заметки'],
  ['Ajouter','Add','Добавить'],
  ['Créer','Create','Создать'],
  ['Enregistrer','Save','Сохранить'],
  ['Fermer','Close','Закрыть'],
  ['Annuler','Cancel','Отмена'],
  ['Supprimer','Delete','Удалить'],
  ['Modifier','Edit','Изменить'],
  ['Continuer','Continue','Продолжить'],
  ['Terminer','Complete','Завершить'],
  ['Mon compte','My account','Мой аккаунт'],
  ['Accès & sécurité','Access & security','Доступ и безопасность'],
  ['Profil','Profile','Профиль'],
  ['Sécurité','Security','Безопасность'],
  ['Notifications système','System notifications','Системные уведомления'],
  ['Nom complet','Full name','Полное имя'],
  ['Fonction','Job title','Должность'],
  ['Téléphone','Phone','Телефон'],
  ['Langue préférée','Preferred language','Предпочитаемый язык'],
  ['Fuseau horaire','Timezone','Часовой пояс'],
  ['Biographie / spécialités','Bio / specialties','Описание / специализация'],
  ['Mot de passe','Password','Пароль'],
  ['Nouveau mot de passe','New password','Новый пароль'],
  ['Confirmer le mot de passe','Confirm password','Подтвердить пароль'],
  ['Modifier le mot de passe','Change password','Изменить пароль'],
  ['Calculateurs investissement','Investment calculators','Инвестиционные калькуляторы'],
  ['Nouvelle annonce','New listing','Новый объект'],
  ['Nouvelle annonce','New listing','Новый объект'],
  ['Aperçu','Preview','Предпросмотр'],
  ['Page publique','Public page','Публичная страница'],
  ['Publié','Published','Опубликован'],
  ['Non publié','Unpublished','Не опубликован'],
  ['En ligne','Online','Онлайн'],
  ['Toutes','All','Все'],
  ['Tous','All','Все'],
  ['Rechercher','Search','Поиск'],
  ['Soumissions','Submissions','Заявки'],
  ['Validation obligatoire','Approval required','Требуется одобрение'],
  ['Contrôle administrateur','Administrator control','Контроль администратора'],
  ['Éditeur partenaire','Partner editor','Редактор партнера'],
  ['Visibilité interne','Internal visibility','Внутренняя видимость'],
  ['Partenaire propriétaire uniquement','Owner partner only','Только партнер-владелец'],
  ['Toute l’équipe interne','Entire internal team','Вся внутренняя команда'],
  ['Jamais visible publiquement.','Never public.','Никогда не публикуется.'],
  ['Informations vendeur · interne','Seller information · internal','Данные продавца · внутренние'],
  ['Vendeur','Seller','Продавец'],
  ['Contact','Contact','Контакт'],
  ['Prix vendeur','Seller asking price','Цена продавца'],
  ['Minimum','Minimum','Минимум'],
  ['Aucune information vendeur renseignée pour cette annonce.','No seller information for this listing.','Данные продавца для этого объекта не заполнены.'],
  ['CRM investissement','Investment CRM','Инвестиционный CRM'],
  ['Contacts · demandes · relances','Contacts · requests · follow-ups','Контакты · запросы · последующие действия'],
  ['Nouveau contact','New contact','Новый контакт'],
  ['Contacts','Contacts','Контакты'],
  ['Avec retard','Overdue','Просрочено'],
  ['À faire aujourd’hui','Due today','На сегодня'],
  ['Sans prochaine action','No next action','Без следующего действия'],
  ['Tous statuts','All statuses','Все статусы'],
  ['Toutes priorités','All priorities','Все приоритеты'],
  ['Tous agents','All agents','Все агенты'],
  ['Ouvrez un contact','Open a contact','Откройте контакт'],
  ['Modifier le dossier','Edit file','Изменить карточку'],
  ['Coordonnées','Contact details','Контактные данные'],
  ['Profil & contact','Profile & contact','Профиль и контакт'],
  ['Budget max','Max budget','Макс. бюджет'],
  ['Capital disponible','Available capital','Доступный капитал'],
  ['Horizon','Timeframe','Срок'],
  ['Note dossier','File note','Заметка по клиенту'],
  ['Agent responsable','Assigned agent','Ответственный агент'],
  ['Besoins immobiliers','Property needs','Запросы по недвижимости'],
  ['Demandes du contact','Contact requests','Запросы клиента'],
  ['Ajouter une demande','Add request','Добавить запрос'],
  ['Demande principale','Main request','Основной запрос'],
  ['Villes','Cities','Города'],
  ['Types','Types','Типы'],
  ['Objectif','Objective','Цель'],
  ['Active','Active','Активный'],
  ['En pause','Paused','На паузе'],
  ['Convertie','Converted','Конвертирован'],
  ['Clôturée','Closed','Закрыт'],
  ['Suivi','Follow-up','Сопровождение'],
  ['À faire & historique','Tasks & history','Задачи и история'],
  ['Action','Action','Действие'],
  ['Pipeline','Pipeline','Pipeline'],
  ['Deals du contact','Contact deals','Сделки клиента'],
  ['Deal','Deal','Сделка'],
  ['Retour au site','Back to website','Вернуться на сайт'],
  ['Se déconnecter','Sign out','Выйти'],
  ['Accès suspendu','Access suspended','Доступ приостановлен'],
];

const lookups={
  fr:new Map(rows.flatMap((r)=>[[r[0],r[0]],[r[1],r[0]],[r[2],r[0]]])),
  en:new Map(rows.map((r)=>[r[0],r[1]])),
  ru:new Map(rows.map((r)=>[r[0],r[2]])),
};

function canonical(value:string){
  const trimmed=value.trim();
  for(const row of rows)if(row.includes(trimmed))return row[0];
  return trimmed;
}

function target(value:string,locale:DeskLocale){
  const base=canonical(value);
  return lookups[locale].get(base)||value;
}

export function BackofficeLocaleBridge({locale}:{locale:DeskLocale}){
  useEffect(()=>{
    const root=document.querySelector('.bosphoras-desk');
    if(!root)return;

    const apply=()=>{
      const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
      let node:Node|null;
      while((node=walker.nextNode())){
        const el=node.parentElement;
        if(!el||['SCRIPT','STYLE'].includes(el.tagName))continue;
        const raw=node.textContent||'';
        const trimmed=raw.trim();
        if(!trimmed)continue;
        const next=target(trimmed,locale);
        if(next!==trimmed)node.textContent=raw.replace(trimmed,next);
      }
      root.querySelectorAll('input,textarea,select,button,a').forEach((el:any)=>{
        for(const attr of ['placeholder','aria-label','title']){
          const value=el.getAttribute?.(attr);
          if(value){
            const next=target(value,locale);
            if(next!==value)el.setAttribute(attr,next);
          }
        }
      });
    };

    apply();
    const observer=new MutationObserver(()=>apply());
    observer.observe(root,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['placeholder','aria-label','title']});
    return()=>observer.disconnect();
  },[locale]);
  return null;
}
