import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export const Section = ({ children, className, id, dark = false }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24',
        dark ? 'bg-secondary' : 'bg-background',
        className
      )}
    >
      <div className="container-jrm">
        {children}
      </div>
    </section>
  );
};

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
  subtitle?: string;
}

export const SectionTitle = ({ children, className, subtitle }: SectionTitleProps) => {
  return (
    <div className={cn('mb-12', className)}>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wide text-primary mb-4">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
