import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Page } from '@components/layout/Page';
import { Button } from '@components/ui/Button';
import { Divider } from '@components/ui/Divider';
import { InputPhone } from '@components/ui/form/InputPhone';
import { useThemeTokens } from '@lib/utils/theme';

const schema = z.object({ phone: z.string().min(7, 'Enter a valid phone number') });
type FormData = z.infer<typeof schema>;

export default function LoginScreen() {
  const t = useThemeTokens();
  const { control, handleSubmit } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    router.push({ pathname: '/(auth)/otp', params: { phone: data.phone } });
  };

  return (
    <Page safe>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} className="flex-1 bg-bg-base dark:bg-bg-base-dark px-6">
        <View className="flex-row justify-end pt-2 h-9">
          <TouchableOpacity activeOpacity={0.7}>
            <Text className="text-sm text-content-muted dark:text-content-muted-dark">Skip</Text>
          </TouchableOpacity>
        </View>

        <View className="mt-8 mb-7">
          <Text className="text-[26px] font-bold tracking-tight text-content dark:text-content-dark">Welcome back</Text>
          <Text className="text-[15px] text-content-muted dark:text-content-muted-dark mt-1.5 leading-relaxed">
            Enter your phone number to sign in or create an account.
          </Text>
        </View>

        <View className="gap-3.5">
          <InputPhone control={control} name="phone" />
          <Button onPress={handleSubmit(onSubmit)} full>Continue</Button>
        </View>

        <View className="flex-row items-center gap-3 my-7">
          <Divider className="flex-1" />
          <Text className="text-[12px] text-content-subtle dark:text-content-subtle-dark uppercase tracking-wider">or continue with</Text>
          <Divider className="flex-1" />
        </View>

        <View className="gap-2.5">
          <Button variant="outline" full leading={<Feather name="smartphone" size={18} color={t.text} />}>
            Continue with Apple
          </Button>
          <Button variant="outline" full leading={<Feather name="mail" size={18} color={t.text} />}>
            Continue with Google
          </Button>
        </View>

        <View className="mt-auto pb-3 pt-5">
          <Text className="text-[12px] text-content-subtle dark:text-content-subtle-dark text-center leading-5">
            By continuing you agree to our{'\n'}
            <Text className="text-primary dark:text-primary-dark">Terms</Text>
            {' and '}
            <Text className="text-primary dark:text-primary-dark">Privacy Policy</Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </Page>
  );
}
