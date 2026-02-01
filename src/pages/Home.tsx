import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { 
  FolderKanban, 
  Search, 
  TrendingDown, 
  Truck, 
  ShieldCheck, 
  Wrench 
} from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/SEO';
import { Section, SectionTitle } from '@/components/Section';
import { CategoryCard } from '@/components/CategoryCard';
import { IconFeature } from '@/components/IconFeature';
import { Button } from '@/components/ui/button';

const Home = () => {
  const { t } = useTranslation();

  const sourcingCategories = [
    { key: 'plastics', label: t('sourcing.categories.plastics') },
    { key: 'electronics', label: t('sourcing.categories.electronics') },
    { key: 'cncMetals', label: t('sourcing.categories.cncMetals') },
    { key: 'cableHarnesses', label: t('sourcing.categories.cableHarnesses') },
    { key: 'stampedMetals', label: t('sourcing.categories.stampedMetals') },
    { key: 'rubber', label: t('sourcing.categories.rubber') },
    { key: 'engineeredFoams', label: t('sourcing.categories.engineeredFoams') },
    { key: 'construction', label: t('sourcing.categories.construction') },
  ];

  const supportItems = [
    { 
      icon: FolderKanban, 
      title: t('support.items.projectManagement.title'), 
      description: t('support.items.projectManagement.description') 
    },
    { 
      icon: Search, 
      title: t('support.items.supplierSourcing.title'), 
      description: t('support.items.supplierSourcing.description') 
    },
    { 
      icon: TrendingDown, 
      title: t('support.items.costOptimization.title'), 
      description: t('support.items.costOptimization.description') 
    },
    { 
      icon: Truck, 
      title: t('support.items.logistics.title'), 
      description: t('support.items.logistics.description') 
    },
    { 
      icon: ShieldCheck, 
      title: t('support.items.qualityAssurance.title'), 
      description: t('support.items.qualityAssurance.description') 
    },
    { 
      icon: Wrench, 
      title: t('support.items.technicalConsulting.title'), 
      description: t('support.items.technicalConsulting.description') 
    },
  ];

  return (
    <Layout>
      <SEO 
        title={t('seo.home.title')} 
        description={t('seo.home.description')} 
        path="/" 
      />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        {/* Background placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary">
          <div className="absolute inset-0 bg-background/60" />
        </div>

        <div className="container-jrm relative z-10 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-primary">
                  {t('hero.title')}
                </h1>
                <p className="text-xl md:text-2xl text-foreground/90 font-light">
                  {t('hero.subtitle')}
                </p>
              </div>

              <p className="text-lg text-muted-foreground max-w-xl">
                {t('hero.statement')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link to="/contact">{t('hero.cta1')}</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                  <Link to="/contact">{t('hero.cta2')}</Link>
                </Button>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="hidden lg:block">
              <div className="aspect-[4/3] rounded-lg bg-secondary border border-border overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-secondary to-background flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Image Placeholder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Categories Section */}
      <Section dark>
        <SectionTitle>{t('sourcing.title')}</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {sourcingCategories.map((category) => (
            <CategoryCard key={category.key} label={category.label} />
          ))}
        </div>
      </Section>

      {/* Support Section */}
      <Section>
        <SectionTitle>{t('support.title')}</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {supportItems.map((item, index) => (
            <IconFeature
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Home;
