import { View, type ViewProps } from 'react-native';
import { cn } from '@lib/utils/cn';

interface SkeletonProps extends ViewProps {
  width?: number | string;
  height?: number;
  rounded?: boolean;
}

export function Skeleton({ width = '100%', height = 14, rounded, className, style, ...props }: SkeletonProps) {
  return (
    <View
      className={cn('bg-skeleton dark:bg-skeleton-dark', rounded ? 'rounded-full' : 'rounded', className)}
      style={[{ width: width as any, height }, style]}
      {...props}
    />
  );
}
