import { useState, useCallback } from 'react';
import { Language, getSavedLanguage, saveLanguage, t } from '@/lib/i18n';

export function useLanguage() {
  const [lang, setLang] = useState<Language>(getSavedLanguage);

  const switchLang = useCallback((newLang: Language) => {
    setLang(newLang);
    saveLanguage(newLang);
  }, []);

  const translate = useCallback((key: string) => t(key, lang), [lang]);

  return { lang, switchLang, t: translate };
}
