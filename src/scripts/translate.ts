export default async function translatePage(targetLang: string = 'es'): Promise<void> {
  const elements = document.querySelectorAll<HTMLElement>('[data-translate]');
  const texts: string[] = Array.from(elements).map((el) => el.textContent ?? '');

  if (!texts.length) {
    console.warn('No elements found to translate.');
    return;
  }

  try {
    const response = await fetch('/api/translate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        q: texts,
        source: 'en',
        target: targetLang,
        format: 'text',
      }),
    });

    if (!response.ok) {
      console.error('Translation failed:', await response.text());
      return;
    }

    const data = await response.json();
    console.log('Translation response:', data);

    // LibreTranslate returns a single translation if q is string, but array of results if q is an array
    const translations = Array.isArray(data) ? data : [data];

    translations.forEach((entry, i) => {
      elements[i].textContent = entry.translatedText;
    });
  } catch (error) {
    console.error('Translation error:', error);
  }
}
