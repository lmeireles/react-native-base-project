import { Controller, type Control, type FieldValues, type Path } from 'react-hook-form';
import { Text, TextInput, type TextInputProps, View } from 'react-native';

import { cn } from '@lib/utils/cn';

interface FormInputProps<T extends FieldValues> extends TextInputProps {
  control: Control<T>;
  name: Path<T>;
  label?: string;
}

export function FormInput<T extends FieldValues>({
  control,
  name,
  label,
  className,
  ...props
}: FormInputProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <View className="gap-1">
          {label && (
            <Text className="text-sm font-medium text-gray-700">{label}</Text>
          )}
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            className={cn(
              'rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-900',
              error && 'border-red-500',
              className,
            )}
            {...props}
          />
          {error?.message && (
            <Text className="text-sm text-red-500">{error.message}</Text>
          )}
        </View>
      )}
    />
  );
}
