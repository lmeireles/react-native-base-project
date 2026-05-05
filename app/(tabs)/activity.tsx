import { View, Text, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Page } from '@components/layout/Page';
import { Header } from '@components/header/Header';
import { Card } from '@components/ui/Card';
import { Badge } from '@components/ui/Badge';
import { Divider } from '@components/ui/Divider';
import { Avatar } from '@components/ui/Avatar';
import { useThemeTokens } from '@lib/utils/theme';

const ACTIVITY = [
  { user: 'Maya Patel', action: 'commented on', target: 'Sprint planning', time: '2h ago', badge: 'Comment' as const },
  { user: 'Jordan Kim', action: 'completed', target: 'API integration', time: '4h ago', badge: 'Done' as const },
  { user: 'Sam Rivera', action: 'assigned you to', target: 'Design review', time: 'Yesterday', badge: 'Assigned' as const },
  { user: 'Priya Shah', action: 'shared', target: 'Q2 roadmap', time: 'Yesterday', badge: 'Shared' as const },
];

export default function ActivityScreen() {
  const t = useThemeTokens();
  return (
    <Page safe>
      <Header large title="Activity" trailing={<View className="w-9 h-9 items-center justify-center"><Feather name="filter" size={20} color={t.text} /></View>} />
      <ScrollView className="flex-1" contentContainerStyle={{ padding: 16 }} showsVerticalScrollIndicator={false}>
        <Card padding={0}>
          {ACTIVITY.map((item, i) => (
            <View key={i}>
              <View className="flex-row items-start gap-3 px-4 py-3">
                <Avatar label={item.user} size={38} />
                <View className="flex-1 gap-0.5">
                  <Text className="text-[14px] text-content dark:text-content-dark leading-5">
                    <Text className="font-semibold">{item.user}</Text>
                    {' '}{item.action}{' '}
                    <Text className="font-medium">{item.target}</Text>
                  </Text>
                  <Text className="text-[12px] text-content-muted dark:text-content-muted-dark">{item.time}</Text>
                </View>
                <Badge tone="neutral">{item.badge}</Badge>
              </View>
              {i < ACTIVITY.length - 1 && <Divider className="ml-[62px]" />}
            </View>
          ))}
        </Card>
      </ScrollView>
    </Page>
  );
}
