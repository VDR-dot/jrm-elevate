import { useTranslation } from 'react-i18next';
import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/SEO';
import { Section, SectionTitle } from '@/components/Section';
import { CheckCircle } from 'lucide-react';

const Company = () => {
  const { t } = useTranslation();

  const stats = [
    t('company.stats.partners'),
    t('company.stats.rfqs'),
    t('company.stats.volumes'),
    t('company.stats.regions'),
    t('company.stats.standards'),
  ];

  return (
    <Layout>
      <SEO 
        title={t('seo.company.title')} 
        description={t('seo.company.description')} 
        path="/company" 
      />

      {/* Hero */}
      <Section>
        <SectionTitle subtitle={t('company.subtitle')}>
          {t('company.title')}
        </SectionTitle>

        <div className="space-y-6 max-w-3xl">
          <p className="text-lg text-foreground/90 leading-relaxed">
            {t('company.paragraphs.p1')}
          </p>
          <p className="text-lg text-foreground/90 leading-relaxed">
            {t('company.paragraphs.p2')}
          </p>
          <p className="text-lg text-foreground/90 leading-relaxed">
            {t('company.paragraphs.p3')}
          </p>
        </div>
      </Section>

      {/* Stats Section */}
      <Section dark>
        <SectionTitle>{t('company.stats.title')}</SectionTitle>
        
        <div className="grid md:grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex items-start gap-4 p-4 card-jrm"
            >
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground/90">{stat}</span>
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Company;
