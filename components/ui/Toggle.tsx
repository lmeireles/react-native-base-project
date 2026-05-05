import { TouchableOpacity, View } from 'react-native';
import { cn } from '@lib/utils/cn';

interface ToggleProps {
  value: boolean;
  onChange?: (value: boolean) => void;
}

export function Toggle({ value, onChange }: ToggleProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={() => onChange?.(!value)}
      style={{ width: 42, height: 26, borderRadius: 999, backgroundColor: value ? '#2563eb' : '#cdd4de', justifyContent: 'center', paddingHorizontal: 2 }}
      className={value ? 'dark:bg-primary-dark' : 'dark:bg-border-strong-dark'}
    >
      <View
        style={{
          width: 22, height: 22, borderRadius: 11, backgroundColor: '#fff',
          shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 4, shadowOffset: { width: 0, height: 2 },
          marginLeft: value ? 16 : 0,
        }}
      />
    </TouchableOpacity>
  );
}
