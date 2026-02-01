import { useTranslation } from 'react-i18next';
import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/SEO';
import { Section, SectionTitle } from '@/components/Section';

const Technologies = () => {
  const { t } = useTranslation();

  const technologies = t('technologies.items', { returnObjects: true }) as string[];

  return (
    <Layout>
      <SEO 
        title={t('seo.technologies.title')} 
        description={t('seo.technologies.description')} 
        path="/technologies" 
      />

      <Section>
        <SectionTitle>{t('technologies.title')}</SectionTitle>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="px-4 py-3 rounded-lg bg-secondary border border-border text-sm text-foreground/90 hover:border-primary/50 transition-colors"
            >
              {tech}
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Technologies;
