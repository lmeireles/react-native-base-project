import { Controller, type Control, type FieldValues, type Path } from 'react-hook-form';
import { Input } from '@components/ui/Input';

interface FormInputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  hint?: string;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: any;
  autoCapitalize?: any;
}

export function FormInput<T extends FieldValues>({ control, name, label, hint, leading, trailing, ...inputProps }: FormInputProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <Input
          label={label}
          hint={hint}
          error={error?.message}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          leading={leading}
          trailing={trailing}
          {...inputProps}
        />
      )}
    />
  );
}
