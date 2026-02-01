import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  bullets?: string[];
  children?: ReactNode;
  className?: string;
}

export const ServiceCard = ({ title, bullets, children, className }: ServiceCardProps) => {
  return (
    <div className={cn('card-jrm p-6 md:p-8', className)}>
      <h3 className="text-lg md:text-xl font-semibold text-primary uppercase tracking-wide mb-4">
        {title}
      </h3>
      {bullets && bullets.length > 0 && (
        <ul className="space-y-3">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start gap-3 text-foreground/90">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
      {children}
    </div>
  );
};

interface IndustryCardProps {
  title: string;
  description: string;
  className?: string;
}

export const IndustryCard = ({ title, description, className }: IndustryCardProps) => {
  return (
    <div className={cn('card-jrm p-6 md:p-8', className)}>
      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
        {title}
      </h3>
      <p className="text-muted-foreground">
        {description}
      </p>
    </div>
  );
};
