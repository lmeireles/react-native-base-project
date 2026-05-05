import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Page } from '@components/layout/Page';
import { Header } from '@components/header/Header';
import { Card } from '@components/ui/Card';
import { Avatar } from '@components/ui/Avatar';
import { Badge } from '@components/ui/Badge';
import { Button } from '@components/ui/Button';
import { ListItem } from '@components/ui/ListItem';
import { Divider } from '@components/ui/Divider';
import { Toggle } from '@components/ui/Toggle';
import { useTheme } from '@context/ThemeContext';
import { useThemeTokens } from '@lib/utils/theme';

export default function ProfileScreen() {
  const { isDark, setColorScheme } = useTheme();
  const t = useThemeTokens();

  return (
    <Page safe>
      <Header large title="Profile" trailing={<View className="w-9 h-9 items-center justify-center"><Feather name="settings" size={20} color={t.text} /></View>} />
      <ScrollView className="flex-1" contentContainerStyle={{ padding: 16, gap: 16 }} showsVerticalScrollIndicator={false}>
        <Card>
          <View className="flex-row items-center gap-3.5">
            <Avatar label="Alex" size={56} />
            <View className="flex-1 min-w-0">
              <Text className="text-[17px] font-semibold text-content dark:text-content-dark">Alex Morgan</Text>
              <Text className="text-[13px] text-content-muted dark:text-content-muted-dark mt-0.5">alex@example.com</Text>
            </View>
            <Button variant="secondary" size="sm">Edit</Button>
          </View>
        </Card>

        <View className="gap-2">
          <Text className="text-[12px] font-semibold text-content-muted dark:text-content-muted-dark uppercase tracking-wide px-1">Account</Text>
          <Card padding={0}>
            <ListItem
              leading={<Feather name="bell" size={20} color={t.textMuted} />}
              title="Notifications"
              trailing={<Badge tone="primary">3</Badge>}
              dense
            />
            <Divider className="ml-[52px]" />
            <ListItem leading={<Feather name="shield" size={20} color={t.textMuted} />} title="Privacy & security" trailing={<Feather name="chevron-right" size={16} color={t.textMuted} />} dense />
            <Divider className="ml-[52px]" />
            <ListItem leading={<Feather name="globe" size={20} color={t.textMuted} />} title="Language" trailing={<Text className="text-[14px] text-content-muted dark:text-content-muted-dark">English</Text>} dense />
          </Card>
        </View>

        <View className="gap-2">
          <Text className="text-[12px] font-semibold text-content-muted dark:text-content-muted-dark uppercase tracking-wide px-1">Preferences</Text>
          <Card padding={0}>
            <ListItem
              leading={<Feather name="moon" size={20} color={t.textMuted} />}
              title="Dark mode"
              trailing={<Toggle value={isDark} onChange={(v) => setColorScheme(v ? 'dark' : 'light')} />}
              dense
            />
            <Divider className="ml-[52px]" />
            <ListItem leading={<Feather name="help-circle" size={20} color={t.textMuted} />} title="Help & feedback" trailing={<Feather name="chevron-right" size={16} color={t.textMuted} />} dense />
          </Card>
        </View>

        <TouchableOpacity
          activeOpacity={0.75}
          className="flex-row items-center justify-center gap-2 px-[18px] py-[11px] w-full bg-transparent rounded-md"
        >
          <Feather name="log-out" size={18} color={t.danger} />
          <Text style={{ color: t.danger, fontWeight: '600', fontSize: 14.5 }}>Sign out</Text>
        </TouchableOpacity>

        <Text className="text-center text-[12px] text-content-subtle dark:text-content-subtle-dark pb-2">Version 1.0.0</Text>
      </ScrollView>
    </Page>
  );
}
