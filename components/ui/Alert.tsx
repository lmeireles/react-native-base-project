import { View, Text } from 'react-native';
import { cn } from '@lib/utils/cn';

type AlertTone = 'info' | 'success' | 'danger' | 'warning';

interface AlertProps {
  title?: string;
  message: string;
  tone?: AlertTone;
  leading?: React.ReactNode;
}

const toneClasses: Record<AlertTone, { container: string; title: string; message: string }> = {
  info: {
    container: 'bg-primary-subtle dark:bg-primary-subtle-dark border-primary dark:border-primary-dark',
    title: 'text-primary dark:text-primary-dark',
    message: 'text-primary dark:text-primary-dark',
  },
  success: {
    container: 'bg-success-subtle dark:bg-success-subtle-dark border-success dark:border-success-dark',
    title: 'text-success dark:text-success-dark',
    message: 'text-success dark:text-success-dark',
  },
  danger: {
    container: 'bg-danger-subtle dark:bg-danger-subtle-dark border-danger dark:border-danger-dark',
    title: 'text-danger dark:text-danger-dark',
    message: 'text-danger dark:text-danger-dark',
  },
  warning: {
    container: 'bg-warning-subtle dark:bg-warning-subtle-dark border-warning dark:border-warning-dark',
    title: 'text-warning dark:text-warning-dark',
    message: 'text-warning dark:text-warning-dark',
  },
};

export function Alert({ title, message, tone = 'info', leading }: AlertProps) {
  const classes = toneClasses[tone];
  return (
    <View className={cn('flex-row gap-3 p-3 rounded-md border', classes.container)}>
      {leading && <View className="pt-0.5">{leading}</View>}
      <View className="flex-1 gap-0.5">
        {title && <Text className={cn('text-sm font-semibold', classes.title)}>{title}</Text>}
        <Text className={cn('text-sm leading-5', classes.message)}>{message}</Text>
      </View>
    </View>
  );
}
