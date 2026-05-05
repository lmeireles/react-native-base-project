import { View, type ViewProps } from 'react-native';

interface FormProps extends ViewProps {
  children: React.ReactNode;
}

export function Form({ children, className, ...props }: FormProps) {
  return (
    <View className={`gap-4 ${className ?? ''}`} {...props}>
      {children}
    </View>
  );
}
