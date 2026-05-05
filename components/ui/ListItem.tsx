import { TouchableOpacity, View, Text, type TouchableOpacityProps } from 'react-native';
import { cn } from '@lib/utils/cn';

interface ListItemProps {
  leading?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: string;
  trailing?: React.ReactNode;
  onPress?: () => void;
  dense?: boolean;
}

export function ListItem({ leading, title, subtitle, trailing, onPress, dense }: ListItemProps) {
  const Container = onPress ? TouchableOpacity : View;
  return (
    <Container
      activeOpacity={0.7}
      onPress={onPress}
      className={cn('flex-row items-center gap-3 bg-surface dark:bg-surface-dark', dense ? 'px-4 py-2.5' : 'px-4 py-3')}
    >
      {leading && <View className="shrink-0">{leading}</View>}
      <View className="flex-1 min-w-0">
        {typeof title === 'string' ? (
          <Text className="text-[15px] font-medium text-content dark:text-content-dark" numberOfLines={1}>{title}</Text>
        ) : title}
        {subtitle && (
          <Text className="text-[13px] text-content-muted dark:text-content-muted-dark mt-px" numberOfLines={1}>{subtitle}</Text>
        )}
      </View>
      {trailing && <View className="shrink-0 text-content-muted dark:text-content-muted-dark">{trailing}</View>}
    </Container>
  );
}
