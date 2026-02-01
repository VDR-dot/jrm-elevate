import { useTranslation } from 'react-i18next';
import { Mail, Phone } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/SEO';
import { Section, SectionTitle } from '@/components/Section';
import { ContactForm } from '@/components/ContactForm';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <SEO 
        title={t('seo.contact.title')} 
        description={t('seo.contact.description')} 
        path="/contact" 
      />

      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <SectionTitle subtitle={t('contact.subtitle')}>
              {t('contact.title')}
            </SectionTitle>
            <ContactForm />
          </div>

          {/* Direct Contact */}
          <div className="lg:pt-16">
            <div className="card-jrm p-8">
              <h3 className="text-lg font-semibold text-primary uppercase tracking-wider mb-6">
                {t('contact.direct.title')}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-foreground/90">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>{t('contact.direct.email')}</span>
                </div>
                <div className="flex items-center gap-4 text-foreground/90">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>{t('contact.direct.phone')}</span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-lg font-semibold text-foreground">
                  {t('footer.company')}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {t('footer.tagline')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Contact;
