import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface IconFeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export const IconFeature = ({ icon: Icon, title, description, className }: IconFeatureProps) => {
  return (
    <div className={cn('flex flex-col items-center text-center p-6', className)}>
      <div className="w-12 h-12 mb-4 flex items-center justify-center">
        <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
      </div>
      <h3 className="text-base font-semibold text-foreground mb-2">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground">
        {description}
      </p>
    </div>
  );
};
