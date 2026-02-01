import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container-jrm py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">
              {t('footer.company')}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Contact Placeholder */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              {t('contact.direct.title')}
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>{t('contact.direct.email')}</p>
              <p>{t('contact.direct.phone')}</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              Links
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                to="/privacy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('footer.privacy')}
              </Link>
              <Link
                to="/sitemap"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('footer.sitemap')}
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} JRM Business Development d.o.o. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
