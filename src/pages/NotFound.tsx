import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <SEO 
        title={t('notFound.title')} 
        description={t('notFound.description')} 
        path="/404" 
      />

      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-6xl font-bold text-primary">404</h1>
          <h2 className="text-2xl font-semibold text-foreground">
            {t('notFound.title')}
          </h2>
          <p className="text-muted-foreground max-w-md">
            {t('notFound.description')}
          </p>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/">{t('notFound.backHome')}</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
