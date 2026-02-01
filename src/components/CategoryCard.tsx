import { cn } from '@/lib/utils';

interface CategoryCardProps {
  label: string;
  imageSrc?: string;
  className?: string;
}

export const CategoryCard = ({ label, imageSrc, className }: CategoryCardProps) => {
  return (
    <div 
      className={cn(
        'card-jrm group relative overflow-hidden aspect-[4/3]',
        className
      )}
    >
      {/* Placeholder image with dark overlay */}
      <div className="absolute inset-0 bg-secondary">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={label}
            loading="lazy"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-secondary to-background" />
        )}
        <div className="absolute inset-0 bg-background/40" />
      </div>
      
      {/* Label */}
      <div className="absolute inset-0 flex items-end p-4">
        <span className="text-sm md:text-base font-semibold uppercase tracking-wider text-foreground">
          {label}
        </span>
      </div>
    </div>
  );
};
