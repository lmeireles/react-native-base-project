import { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { Page } from '@components/layout/Page';
import { Button } from '@components/ui/Button';
import { Header } from '@components/header/Header';
import { useThemeTokens } from '@lib/utils/theme';

const CODE_LENGTH = 6;

export default function OTPScreen() {
  const { phone } = useLocalSearchParams<{ phone: string }>();
  const [code, setCode] = useState<string[]>(Array(CODE_LENGTH).fill(''));
  const [resendSeconds, setResendSeconds] = useState(42);
  const t = useThemeTokens();
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    inputRef.current?.focus();
    const timer = setInterval(() => setResendSeconds((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (text: string) => {
    const digits = text.replace(/\D/g, '').slice(0, CODE_LENGTH).split('');
    setCode([...digits, ...Array(CODE_LENGTH - digits.length).fill('')]);
  };

  const filled = code.filter(Boolean).length;

  return (
    <Page safe>
      <Header leading={<TouchableOpacity onPress={() => router.back()}><Feather name="chevron-left" size={22} color={t.text} /></TouchableOpacity>} />
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} className="flex-1 bg-bg-base dark:bg-bg-base-dark px-6 pt-2">
        <View className="mt-3 mb-7">
          <Text className="text-[26px] font-bold tracking-tight text-content dark:text-content-dark">Enter code</Text>
          <Text className="text-[15px] text-content-muted dark:text-content-muted-dark mt-1.5 leading-relaxed">
            We sent a 6-digit code to{' '}
            <Text className="text-content dark:text-content-dark font-medium">{phone ?? '+1 (555) 123-4567'}</Text>
          </Text>
        </View>

        <TextInput
          ref={inputRef}
          value={code.join('')}
          onChangeText={handleChange}
          keyboardType="number-pad"
          maxLength={CODE_LENGTH}
          className="absolute opacity-0 w-px h-px"
          caretHidden
        />

        <TouchableOpacity activeOpacity={1} onPress={() => inputRef.current?.focus()} className="flex-row gap-2 mb-6">
          {code.map((digit, i) => (
            <View
              key={i}
              style={{
                flex: 1, aspectRatio: 1 / 1.15, maxHeight: 56,
                borderRadius: 8,
                borderWidth: i === filled ? 1.5 : 1,
                borderColor: i === filled ? t.primary : t.border,
                backgroundColor: t.surface,
              }}
              className="items-center justify-center"
            >
              <Text style={{ fontSize: 22, fontWeight: '600', color: t.text, fontVariant: ['tabular-nums'] }}>
                {digit}
              </Text>
            </View>
          ))}
        </TouchableOpacity>

        <Button onPress={() => router.replace('/(tabs)')} full disabled={filled < CODE_LENGTH}>Verify</Button>

        <View className="flex-row justify-center gap-1.5 mt-5">
          <Text className="text-[14px] text-content-muted dark:text-content-muted-dark">Didn't get a code?</Text>
          {resendSeconds > 0 ? (
            <Text className="text-[14px] text-primary dark:text-primary-dark font-medium">Resend in 0:{String(resendSeconds).padStart(2, '0')}</Text>
          ) : (
            <TouchableOpacity onPress={() => setResendSeconds(42)}>
              <Text className="text-[14px] text-primary dark:text-primary-dark font-medium">Resend</Text>
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAvoidingView>
    </Page>
  );
}
