import { View, Text, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Page } from '@components/layout/Page';
import { Header } from '@components/header/Header';
import { Card } from '@components/ui/Card';
import { Avatar } from '@components/ui/Avatar';
import { ListItem } from '@components/ui/ListItem';
import { Divider } from '@components/ui/Divider';
import { useThemeTokens } from '@lib/utils/theme';

const RECENT = [
  { icon: 'check-circle' as const, color: '#059669', label: 'Completed onboarding', time: '2h ago' },
  { icon: 'plus-circle' as const, color: '#2563eb', label: 'Created new project', time: 'Yesterday' },
  { icon: 'heart' as const, color: '#db2777', label: 'Saved 3 articles', time: 'Yesterday' },
];

export default function HomeScreen() {
  const t = useThemeTokens();

  return (
    <Page safe>
      <Header
        large
        title="Good morning, Alex"
        subtitle="Tuesday, May 5"
        trailing={
          <View className="flex-row gap-1">
            <View className="w-9 h-9 items-center justify-center">
              <Feather name="bell" size={20} color={t.text} />
            </View>
            <Avatar label="A" size={32} />
          </View>
        }
      />
      <ScrollView className="flex-1" contentContainerStyle={{ padding: 16, gap: 16 }} showsVerticalScrollIndicator={false}>
        <View style={{ backgroundColor: t.primary, borderRadius: 12, padding: 18, overflow: 'hidden' }}>
          <Text style={{ fontSize: 11, fontWeight: '600', letterSpacing: 0.6, textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)' }}>This week</Text>
          <Text style={{ fontSize: 22, fontWeight: '700', color: '#fff', marginTop: 6, letterSpacing: -0.3, lineHeight: 28 }}>You're on a 7-day streak</Text>
          <Text style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', marginTop: 4 }}>Keep going to unlock the next reward.</Text>
          <View className="flex-row gap-1 mt-3.5">
            {Array.from({ length: 7 }).map((_, i) => (
              <View key={i} style={{ flex: 1, height: 4, backgroundColor: 'rgba(255,255,255,0.85)', borderRadius: 2 }} />
            ))}
          </View>
        </View>

        <View className="flex-row gap-2.5">
          <Card className="flex-1">
            <Text className="text-[12px] text-content-muted dark:text-content-muted-dark font-medium">Tasks done</Text>
            <Text className="text-[24px] font-bold tracking-tight text-content dark:text-content-dark mt-1">24</Text>
            <View className="flex-row items-center gap-1 mt-0.5">
              <Feather name="trending-up" size={12} color={t.success} />
              <Text style={{ fontSize: 12, color: t.success }}>+12% vs last wk</Text>
            </View>
          </Card>
          <Card className="flex-1">
            <Text className="text-[12px] text-content-muted dark:text-content-muted-dark font-medium">Hours focused</Text>
            <Text className="text-[24px] font-bold tracking-tight text-content dark:text-content-dark mt-1">18.5</Text>
            <Text className="text-[12px] text-content-muted dark:text-content-muted-dark mt-0.5">of 25 goal</Text>
          </Card>
        </View>

        <View>
          <View className="flex-row justify-between items-baseline mb-2.5">
            <Text className="text-base font-semibold text-content dark:text-content-dark">Recent activity</Text>
            <Text className="text-[13px] text-primary dark:text-primary-dark font-medium">See all</Text>
          </View>
          <Card padding={0}>
            {RECENT.map((item, i) => (
              <View key={i}>
                <ListItem
                  leading={
                    <View style={{ width: 36, height: 36, borderRadius: 8, backgroundColor: t.surfaceMuted, alignItems: 'center', justifyContent: 'center' }}>
                      <Feather name={item.icon} size={18} color={item.color} />
                    </View>
                  }
                  title={item.label}
                  subtitle={item.time}
                  trailing={<Feather name="chevron-right" size={16} color={t.textMuted} />}
                />
                {i < RECENT.length - 1 && <Divider className="ml-16" />}
              </View>
            ))}
          </Card>
        </View>
      </ScrollView>
    </Page>
  );
}
