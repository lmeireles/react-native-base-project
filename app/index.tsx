import { useEffect } from 'react';
import { View, Text } from 'react-native';
import { router } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { useAuth } from '@context/AuthContext';
import { useThemeTokens } from '@lib/utils/theme';

export default function SplashScreen() {
  const { isAuthenticated, isLoading } = useAuth();
  const t = useThemeTokens();

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        router.replace(isAuthenticated ? '/(tabs)' : '/(auth)/login');
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isAuthenticated, isLoading]);

  return (
    <View className="flex-1 items-center justify-center bg-bg-base dark:bg-bg-base-dark">
      <View
        style={{
          width: 88, height: 88, borderRadius: 22,
          backgroundColor: t.primary,
          shadowColor: t.primary, shadowOpacity: 0.4, shadowRadius: 24, shadowOffset: { width: 0, height: 12 },
        }}
        className="items-center justify-center mb-4"
      >
        <Feather name="zap" size={44} color="#fff" />
      </View>
      <Text className="text-[28px] font-bold tracking-tight text-content dark:text-content-dark">Basecamp</Text>
      <Text className="text-sm text-content-muted dark:text-content-muted-dark mt-1">Your starting point</Text>
    </View>
  );
}
