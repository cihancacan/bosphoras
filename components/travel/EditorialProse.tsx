/**
 * Editorial body copy for travel guides.
 * Formats existing copy as readable paragraphs without rewriting the words,
 * touching SEO content, or injecting generated headings.
 */
const ABBREVIATIONS = new Set([
  'm', 'mme', 'mr', 'mrs', 'ms', 'dr', 'prof', 'st', 'ste', 'vs',
  'etc', 'no', 'n', 'e.g', 'i.e',
]);

export function splitEditorialParagraphs(text: string, maxChars = 285): string[] {
  if (!text || !text.trim()) return [];

  const paragraphs: string[] = [];
  for (const rawBlock of text.replace(/\r\n/g, '\n').trim().split(/\n\s*\n/g)) {
    const block = rawBlock.replace(/\s+/g, ' ').trim();
    if (!block) continue;

    const sentences: string[] = [];
    let start = 0;
    // Only break at sentence punctuation followed by a new sentence. Avoid
    // decimals, St. Regis / Dr. / Mme. and similar proper-name abbreviations.
    const boundaries = /([.!?…]+[»”"']?)(\s+)(?=[A-ZÀ-ÖØ-ÞĀ-ŽА-ЯЁ0-9«“"'])/g;
    for (const match of block.matchAll(boundaries)) {
      const end = (match.index ?? 0) + match[1].length;
      const lastWord = block.slice(Math.max(0, end - 20), end)
        .match(/([A-Za-zÀ-žА-Яа-яЁё]+)\.$/)?.[1]?.toLowerCase();
      if (lastWord && ABBREVIATIONS.has(lastWord)) continue;
      const sentence = block.slice(start, end).trim();
      if (sentence) sentences.push(sentence);
      start = end + match[2].length;
    }
    const rest = block.slice(start).trim();
    if (rest) sentences.push(rest);

    let paragraph = '';
    for (const sentence of sentences) {
      if (paragraph && paragraph.length >= 105 &&
          paragraph.length + sentence.length + 1 > maxChars) {
        paragraphs.push(paragraph);
        paragraph = sentence;
      } else {
        paragraph += (paragraph ? ' ' : '') + sentence;
      }
    }
    if (paragraph) paragraphs.push(paragraph);
  }
  return paragraphs;
}

type EditorialProseProps = {
  text: string;
  className?: string;
  maxChars?: number;
};

export function EditorialProse({ text, className = '', maxChars }: EditorialProseProps) {
  const paragraphs = splitEditorialParagraphs(text, maxChars);
  if (!paragraphs.length) return null;
  return (
    <div className={`space-y-4 sm:space-y-5 leading-[1.85] ${className}`}>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="max-w-[69ch]">{paragraph}</p>
      ))}
    </div>
  );
}
