import { View, Text } from 'react-native';
import { cn } from '@lib/utils/cn';

type Tone = 'neutral' | 'primary' | 'success' | 'danger' | 'warning';

interface BadgeProps {
  children: React.ReactNode;
  tone?: Tone;
  leading?: React.ReactNode;
}

const toneClasses: Record<Tone, { container: string; text: string }> = {
  neutral: { container: 'bg-surface-muted dark:bg-surface-muted-dark', text: 'text-content-muted dark:text-content-muted-dark' },
  primary: { container: 'bg-primary-subtle dark:bg-primary-subtle-dark', text: 'text-primary dark:text-primary-dark' },
  success: { container: 'bg-success-subtle dark:bg-success-subtle-dark', text: 'text-success dark:text-success-dark' },
  danger: { container: 'bg-danger-subtle dark:bg-danger-subtle-dark', text: 'text-danger dark:text-danger-dark' },
  warning: { container: 'bg-warning-subtle dark:bg-warning-subtle-dark', text: 'text-warning dark:text-warning-dark' },
};

export function Badge({ children, tone = 'neutral', leading }: BadgeProps) {
  const { container, text } = toneClasses[tone];
  return (
    <View className={cn('flex-row items-center gap-1 self-start px-2 py-0.5 rounded-full', container)}>
      {leading}
      <Text className={cn('text-[11px] font-semibold tracking-wide', text)}>{children}</Text>
    </View>
  );
}
