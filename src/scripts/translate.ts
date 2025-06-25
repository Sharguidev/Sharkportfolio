type Translation = {
    translatedText: string;
};

export default async function translatePage(targetLang = 'es'){
    const elements = document.querySelectorAll<HTMLElement>('[data-translate]');
    const texts : string[] = Array.from(elements).map(el => el.textContent ?? '');


    const response = await fetch('https://translate.argosopentech.com/translate', {
        method: 'POST',
        body: JSON.stringify({ 
            q :texts,
            source: 'en',
            target: targetLang,
            format: 'text'
        }),
        headers: {'Content-Type': 'application/json',}
    });


    if (!response.ok) {
        console.error('Translation failed:', response.statusText);
        alert('Translation failed. Please try again later.');
        return;
    }

    type TranslationResponse = { translatedText: string }[];
    const data = await response.json();
    const translations: TranslationResponse = data;

    translations.forEach((translation: Translation, index: number) => {
        elements[index].textContent = translation.translatedText;
    });
}