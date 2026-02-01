import { useTranslation } from 'react-i18next';
import { languages, type LanguageCode } from '@/i18n/config';
import { cn } from '@/lib/utils';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as LanguageCode;

  const handleLanguageChange = (langCode: LanguageCode) => {
    i18n.changeLanguage(langCode);
  };

  return (
    <div className="flex items-center gap-1" role="navigation" aria-label="Language selection">
      {languages.map((lang, index) => (
        <span key={lang.code} className="flex items-center">
          <button
            onClick={() => handleLanguageChange(lang.code)}
            className={cn(
              'px-2 py-1 text-sm font-medium transition-colors',
              currentLang === lang.code
                ? 'text-primary'
                : 'text-muted-foreground hover:text-foreground'
            )}
            aria-label={`Switch to ${lang.fullName}`}
            aria-current={currentLang === lang.code ? 'true' : undefined}
          >
            {lang.name}
          </button>
          {index < languages.length - 1 && (
            <span className="text-muted-foreground/50">|</span>
          )}
        </span>
      ))}
    </div>
  );
};
