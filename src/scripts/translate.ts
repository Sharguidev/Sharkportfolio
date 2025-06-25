type Translation = {
    translatedText: string;
};

export default async function translatePage(targetLang: string = 'es'): Promise<void> {
    const elements = document.querySelectorAll<HTMLElement>('[data-translate]');
    const texts : string[] = Array.from(elements).map(el => el.textContent ?? '');


    const response = await fetch('/api/translate', {
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify({ 
            q :texts,
            source: 'en',
            target: targetLang,
            format: 'text'
        })
    });


    if (!response.ok) {
        console.error('Translation failed:', response.statusText);
        
        return;
    }

    type TranslationResponse = { translatedText: string }[];
    const data = await response.json();
    const translations: TranslationResponse = data;

    translations.forEach((translation: Translation, index: number) => {
        elements[index].textContent = translation.translatedText;
    });
}