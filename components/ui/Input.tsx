import { View, Text, TextInput, type TextInputProps } from 'react-native';
import { cn } from '@lib/utils/cn';

interface InputProps extends TextInputProps {
  label?: string;
  hint?: string;
  error?: string;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  full?: boolean;
}

export function Input({ label, hint, error, leading, trailing, full = true, className, ...props }: InputProps) {
  return (
    <View className={cn('gap-1.5', full && 'w-full')}>
      {label && (
        <Text className="text-[13px] font-medium text-content dark:text-content-dark">{label}</Text>
      )}
      <View className={cn(
        'flex-row items-center h-11 px-3 rounded-md border bg-surface dark:bg-surface-dark gap-2',
        error ? 'border-danger dark:border-danger-dark' : 'border-border-base dark:border-border-base-dark',
      )}>
        {leading && <View className="text-content-muted dark:text-content-muted-dark">{leading}</View>}
        <TextInput
          placeholderTextColor="#94a3b8"
          className={cn(
            'flex-1 text-[15px] text-content dark:text-content-dark',
            className,
          )}
          {...props}
        />
        {trailing}
      </View>
      {(error || hint) && (
        <Text className={cn('text-[12px]', error ? 'text-danger dark:text-danger-dark' : 'text-content-muted dark:text-content-muted-dark')}>
          {error ?? hint}
        </Text>
      )}
    </View>
  );
}
