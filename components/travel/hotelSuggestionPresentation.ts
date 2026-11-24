import { findVerifiedHotelForPlace } from '@/lib/travel/verifiedHotelMatch';

const suggestionSelector = '.simple-typeahead-list-item-text[data-text]';
const propertyCollection = /^(?:autograph collection|the luxury collection|tribute portfolio|a (?:.+ )?(?:collection|portfolio) (?:hotel|resort))$/i;

function getSuggestionLines(description: string) {
  const parts = description.split(/,\s*/);
  const verifiedName = findVerifiedHotelForPlace(description)?.name;
  const count = verifiedName ? verifiedName.split(',').length : propertyCollection.test(parts[1] ?? '') ? 2 : 1;
  return { title: parts.slice(0, count).join(', '), address: parts.slice(count).join(', ') };
}

export function presentHotelSuggestions(container: HTMLElement, styles: { suggestion: string; suggestionTitle: string; suggestionAddress: string }) {
  function render() {
    for (const source of container.querySelectorAll<HTMLElement>(suggestionSelector)) {
      const description = source.dataset.text;
      if (!description) continue;

      const emphasis = source.querySelector('strong')?.textContent ?? '';
      const previous = source.nextElementSibling;
      const current = previous instanceof HTMLElement && previous.classList.contains(styles.suggestion) ? previous : null;
      if (current?.dataset.description === description && current.dataset.emphasis === emphasis) continue;

      const { title, address } = getSuggestionLines(description);
      const presentation = document.createElement('span');
      presentation.className = styles.suggestion;
      presentation.dataset.description = description;
      presentation.dataset.emphasis = emphasis;

      const name = document.createElement('span');
      name.className = styles.suggestionTitle;
      const match = emphasis ? title.indexOf(emphasis) : -1;
      if (match >= 0) {
        const strong = document.createElement('strong');
        strong.textContent = emphasis;
        name.append(title.slice(0, match), strong, title.slice(match + emphasis.length));
      } else {
        name.textContent = title;
      }
      presentation.append(name);

      if (address) {
        const detail = document.createElement('span');
        detail.className = styles.suggestionAddress;
        detail.textContent = address;
        presentation.append(detail);
      }

      // The SDK still owns the row, click target and selected place.
      if (current) current.replaceWith(presentation);
      else source.after(presentation);
    }
  }

  const observer = new MutationObserver(render);
  observer.observe(container, { subtree: true, childList: true, characterData: true, attributeFilter: ['data-text'] });
  render();
  return () => observer.disconnect();
}
