import { View, ScrollView, type ViewProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { cn } from '@lib/utils/cn';

interface PageProps extends ViewProps {
  children: React.ReactNode;
  scroll?: boolean;
  safe?: boolean;
  contentClassName?: string;
}

export function Page({ children, scroll, safe = true, className, contentClassName, ...props }: PageProps) {
  const Wrapper = safe ? SafeAreaView : View;
  const content = scroll ? (
    <ScrollView
      className={cn('flex-1', contentClassName)}
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  ) : (
    <View className={cn('flex-1', contentClassName)} {...props}>
      {children}
    </View>
  );

  return (
    <Wrapper className={cn('flex-1 bg-bg-subtle dark:bg-bg-subtle-dark', className)}>
      {content}
    </Wrapper>
  );
}
