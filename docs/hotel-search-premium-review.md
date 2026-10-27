# Hotel search — premium design review

Scope: only the private FR/EN hotel search preparation pages. Reuse the existing destination catalogue and photography. Preserve all guides, SEO, Wink secrets and partner activation gates.

## Interface

- Dedicated minimal masthead, serif headline and cinematic destination photography with manual scene selection and reduced-motion support.
- Floating search bar with destination input, native arrival/departure selectors, guest/room counters, quick destinations and an active Explore action.
- Explore filters editorial destination guides only. Dates and traveler choices remain in local component state and are shown as preferences, without claiming available inventory. The interface explicitly says rates and booking are not yet available.
- Three travel mood filters, session-only saved places, photographed destination cards, a no-results recovery action and progressive display of additional destinations.
- Scoped CSS module; no global CSS change, new dependency, provider request, checkout or guest personal-data collection.
- FR/EN copy and responsive layouts; retain noindex and production 404 restrictions.

## Verification

Browser review: desktop composition; 390 px layout without horizontal overflow; FR dates update and persist after closing the panel; adult and room counters; saved-place filtering; mountain filter; Paris search with preference summary; English no-results state; manual destination scene switch. Typecheck, lint, all nine supplier gates and SEO checks pass before release. Complete a full build and check the deployed Preview before sharing its result.

Partner configuration and booking links remain pending. Commercial activation still requires contractual qualification and owner approval.
