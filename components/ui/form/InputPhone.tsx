import { View, Text, TouchableOpacity } from 'react-native';
import { Controller, type Control, type FieldValues, type Path } from 'react-hook-form';
import { Feather } from '@expo/vector-icons';
import { Input } from '@components/ui/Input';

interface InputPhoneProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  countryCode?: string;
  flag?: string;
}

export function InputPhone<T extends FieldValues>({
  control, name, label, countryCode = '+1', flag = '🇺🇸',
}: InputPhoneProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <View className="gap-1.5">
          {label && <Text className="text-[13px] font-medium text-content dark:text-content-dark">{label}</Text>}
          <View className="flex-row gap-2">
            <TouchableOpacity
              className="flex-row items-center gap-1 h-11 px-3 rounded-md border border-border-base dark:border-border-base-dark bg-surface dark:bg-surface-dark"
              activeOpacity={0.7}
            >
              <Text className="text-[15px]">{flag}</Text>
              <Text className="text-[15px] font-medium text-content dark:text-content-dark">{countryCode}</Text>
              <Feather name="chevron-down" size={14} color="#64748b" />
            </TouchableOpacity>
            <View className="flex-1">
              <Input
                placeholder="(555) 123-4567"
                keyboardType="phone-pad"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={error?.message}
              />
            </View>
          </View>
        </View>
      )}
    />
  );
}
