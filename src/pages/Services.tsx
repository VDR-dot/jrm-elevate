import { useTranslation } from 'react-i18next';
import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/SEO';
import { Section, SectionTitle } from '@/components/Section';
import { ServiceCard } from '@/components/ServiceCard';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      key: 'businessDevelopment',
      title: t('services.items.businessDevelopment.title'),
      bullets: t('services.items.businessDevelopment.bullets', { returnObjects: true }) as string[],
    },
    {
      key: 'supplierSourcing',
      title: t('services.items.supplierSourcing.title'),
      bullets: t('services.items.supplierSourcing.bullets', { returnObjects: true }) as string[],
    },
    {
      key: 'rfq',
      title: t('services.items.rfq.title'),
      bullets: t('services.items.rfq.bullets', { returnObjects: true }) as string[],
    },
    {
      key: 'production',
      title: t('services.items.production.title'),
      bullets: t('services.items.production.bullets', { returnObjects: true }) as string[],
    },
  ];

  return (
    <Layout>
      <SEO 
        title={t('seo.services.title')} 
        description={t('seo.services.description')} 
        path="/services" 
      />

      <Section>
        <SectionTitle>{t('services.title')}</SectionTitle>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.key}
              title={service.title}
              bullets={service.bullets}
            />
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Services;
