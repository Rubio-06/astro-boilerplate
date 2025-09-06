import en from '@locales/en.json';
import fr from '@locales/fr.json';

const locales: Record<string, any> = { en, fr };

export function t(lang: string, key: string): string {
  const keys = key.split('.');
  let result: any = locales[lang] || locales['en'];

  for (const k of keys) {
    result = result?.[k];
    if (!result) break;
  }

  return result || key;
}
