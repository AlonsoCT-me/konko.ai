import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
}

export function Logo({ className, variant = 'dark' }: LogoProps) {
  const textColor = variant === 'light' ? 'fill-white' : 'fill-neutral-950';
  const iconColor = variant === 'light' ? 'fill-white' : 'fill-neutral-950';

  return (
    <div className={cn('flex items-center gap-1.5', className)}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M4 4L12 4L4 12V4Z"
          className={iconColor}
        />
        <path
          d="M4 12L12 20L20 12L12 4L4 12Z"
          className={iconColor}
          fillOpacity="0.15"
        />
        <path
          d="M12 12L20 12L12 20V12Z"
          className={iconColor}
        />
      </svg>
      <span
        className={cn(
          'font-semibold text-lg tracking-tight',
          variant === 'light' ? 'text-white' : 'text-neutral-950'
        )}
      >
        konko<span className="text-brand-gold">.</span>ai
      </span>
    </div>
  );
}
