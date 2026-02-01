import { useTranslation } from 'react-i18next';
import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/SEO';
import { Section, SectionTitle } from '@/components/Section';
import { IndustryCard } from '@/components/ServiceCard';

const Industries = () => {
  const { t } = useTranslation();

  const industries = [
    {
      key: 'automotive',
      title: t('industries.items.automotive.title'),
      description: t('industries.items.automotive.description'),
    },
    {
      key: 'automation',
      title: t('industries.items.automation.title'),
      description: t('industries.items.automation.description'),
    },
    {
      key: 'electronics',
      title: t('industries.items.electronics.title'),
      description: t('industries.items.electronics.description'),
    },
    {
      key: 'medical',
      title: t('industries.items.medical.title'),
      description: t('industries.items.medical.description'),
    },
    {
      key: 'construction',
      title: t('industries.items.construction.title'),
      description: t('industries.items.construction.description'),
    },
  ];

  return (
    <Layout>
      <SEO 
        title={t('seo.industries.title')} 
        description={t('seo.industries.description')} 
        path="/industries" 
      />

      <Section>
        <SectionTitle>{t('industries.title')}</SectionTitle>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <IndustryCard
              key={industry.key}
              title={industry.title}
              description={industry.description}
            />
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Industries;
