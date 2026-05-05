import { TouchableOpacity, View, type ViewProps } from 'react-native';
import { cn } from '@lib/utils/cn';

interface CardProps extends ViewProps {
  children: React.ReactNode;
  onPress?: () => void;
  padding?: number;
}

export function Card({ children, onPress, padding = 16, className, style, ...props }: CardProps) {
  const inner = (
    <View className={cn('bg-surface dark:bg-surface-dark border border-border-base dark:border-border-base-dark rounded-lg', className)} style={[{ padding }, style]} {...props}>
      {children}
    </View>
  );
  if (onPress) {
    return <TouchableOpacity activeOpacity={0.7} onPress={onPress}>{inner}</TouchableOpacity>;
  }
  return inner;
}
