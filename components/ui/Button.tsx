import { TouchableOpacity, Text, ActivityIndicator, type TouchableOpacityProps } from 'react-native';
import { cn } from '@lib/utils/cn';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends TouchableOpacityProps {
  variant?: Variant;
  size?: Size;
  full?: boolean;
  loading?: boolean;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  children: React.ReactNode;
}

const containerVariant: Record<Variant, string> = {
  primary: 'bg-primary dark:bg-primary-dark',
  secondary: 'bg-surface-muted dark:bg-surface-muted-dark border border-border-base dark:border-border-base-dark',
  ghost: 'bg-transparent',
  outline: 'bg-transparent border border-border-strong dark:border-border-strong-dark',
  danger: 'bg-danger dark:bg-danger-dark',
};

const containerSize: Record<Size, string> = {
  sm: 'px-3.5 py-2',
  md: 'px-[18px] py-[11px]',
  lg: 'px-5 py-3.5',
};

const textSize: Record<Size, string> = {
  sm: 'text-[13px]',
  md: 'text-[14.5px]',
  lg: 'text-base',
};

const textVariant: Record<Variant, string> = {
  primary: 'text-white',
  secondary: 'text-content dark:text-content-dark',
  ghost: 'text-content dark:text-content-dark',
  outline: 'text-content dark:text-content-dark',
  danger: 'text-white',
};

export function Button({
  variant = 'primary', size = 'md', full, loading, leading, trailing,
  children, className, disabled, ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      disabled={isDisabled}
      className={cn(
        'flex-row items-center justify-center gap-2 rounded-md',
        containerVariant[variant],
        containerSize[size],
        full && 'w-full',
        isDisabled && 'opacity-50',
        className,
      )}
      {...props}
    >
      {loading ? (
        <ActivityIndicator size="small" color={variant === 'primary' || variant === 'danger' ? '#fff' : undefined} />
      ) : (
        <>
          {leading}
          <Text className={cn('font-semibold', textSize[size], textVariant[variant])}>
            {children}
          </Text>
          {trailing}
        </>
      )}
    </TouchableOpacity>
  );
}
