import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Page } from '@components/layout/Page';
import { Input } from '@components/ui/Input';
import { Card } from '@components/ui/Card';
import { Badge } from '@components/ui/Badge';
import { useThemeTokens } from '@lib/utils/theme';

const FILTERS = ['All', 'Articles', 'People', 'Projects', 'Tags'];
const RESULTS = [
  { title: 'Design systems for mobile', subtitle: 'Article · 8 min read', tag: 'Design' },
  { title: 'React Native + NativeWind setup', subtitle: 'Tutorial · 12 min read', tag: 'Code' },
  { title: 'OAuth in Expo apps', subtitle: 'Guide · 6 min read', tag: 'Auth' },
  { title: 'Animations with Reanimated 3', subtitle: 'Video · 24 min', tag: 'Motion' },
];

export default function SearchScreen() {
  const [active, setActive] = useState(0);
  const [query, setQuery] = useState('design');
  const t = useThemeTokens();

  return (
    <Page safe>
      <View style={{ backgroundColor: t.bg, borderBottomWidth: 1, borderBottomColor: t.divider }} className="px-4 pt-3 pb-3.5">
        <Input
          value={query}
          onChangeText={setQuery}
          placeholder="Search"
          leading={<Feather name="search" size={18} color={t.textMuted} />}
          trailing={query ? <TouchableOpacity onPress={() => setQuery('')}><Feather name="x" size={16} color={t.textMuted} /></TouchableOpacity> : undefined}
        />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8, marginTop: 12 }}>
          {FILTERS.map((f, i) => (
            <TouchableOpacity
              key={f}
              onPress={() => setActive(i)}
              style={{
                paddingHorizontal: 12, paddingVertical: 6, borderRadius: 9999,
                backgroundColor: i === active ? t.primary : t.surfaceMuted,
              }}
            >
              <Text style={{ fontSize: 13, fontWeight: '500', color: i === active ? '#fff' : t.text }}>{f}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView className="flex-1" contentContainerStyle={{ padding: 16, gap: 8 }} showsVerticalScrollIndicator={false}>
        <Text className="text-[12px] font-semibold text-content-muted dark:text-content-muted-dark uppercase tracking-wide mb-0.5">
          {RESULTS.length} results
        </Text>
        {RESULTS.map((r, i) => (
          <Card key={i} padding={14}>
            <View className="flex-row justify-between items-start gap-2">
              <View className="flex-1 min-w-0">
                <Text className="text-[15px] font-semibold text-content dark:text-content-dark mb-0.5">{r.title}</Text>
                <Text className="text-[13px] text-content-muted dark:text-content-muted-dark">{r.subtitle}</Text>
              </View>
              <Badge tone="primary">{r.tag}</Badge>
            </View>
          </Card>
        ))}
      </ScrollView>
    </Page>
  );
}
