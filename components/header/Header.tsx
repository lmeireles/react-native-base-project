import { View, Text } from 'react-native';
import { cn } from '@lib/utils/cn';

interface HeaderProps {
  title?: string;
  subtitle?: string;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  large?: boolean;
}

export function Header({ title, subtitle, leading, trailing, large }: HeaderProps) {
  if (large) {
    return (
      <View className="bg-bg-base dark:bg-bg-base-dark border-b border-divider dark:border-divider-dark px-5 pt-2 pb-4">
        <View className="flex-row justify-between items-center min-h-[32px]">
          <View>{leading}</View>
          <View>{trailing}</View>
        </View>
        <Text className="text-[26px] font-bold tracking-tight text-content dark:text-content-dark mt-1">{title}</Text>
        {subtitle && <Text className="text-sm text-content-muted dark:text-content-muted-dark mt-1">{subtitle}</Text>}
      </View>
    );
  }

  return (
    <View className="bg-bg-base dark:bg-bg-base-dark border-b border-divider dark:border-divider-dark px-3 py-2 flex-row items-center gap-2">
      <View className="w-10 items-start">{leading}</View>
      <View className="flex-1 items-center">
        {title && <Text className="text-base font-semibold text-content dark:text-content-dark">{title}</Text>}
      </View>
      <View className="w-10 items-end">{trailing}</View>
    </View>
  );
}
