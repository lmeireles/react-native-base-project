import { Text } from 'react-native';

interface FormErrorProps {
  message?: string;
}

export function FormError({ message }: FormErrorProps) {
  if (!message) return null;
  return (
    <Text className="text-sm text-danger dark:text-danger-dark text-center">{message}</Text>
  );
}
