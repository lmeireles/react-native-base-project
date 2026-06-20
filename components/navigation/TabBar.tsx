import { View, Text, TouchableOpacity } from 'react-native';
import type { BottomTabBarProps } from 'expo-router/js-tabs';
import { Feather } from '@expo/vector-icons';
import { useTheme } from '@context/ThemeContext';
import { tokens } from '@lib/utils/theme';

const TAB_ICONS: Record<string, keyof typeof Feather.glyphMap> = {
  index: 'home',
  search: 'search',
  activity: 'activity',
  profile: 'user',
};

const TAB_LABELS: Record<string, string> = {
  index: 'Home',
  search: 'Search',
  activity: 'Activity',
  profile: 'Profile',
};

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { colorScheme } = useTheme();
  const t = tokens[colorScheme];

  return (
    <View
      style={{ backgroundColor: t.bg, borderTopColor: t.divider, borderTopWidth: 1 }}
      className="flex-row px-2 pt-1.5 pb-1"
    >
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const iconName = TAB_ICONS[route.name] ?? 'circle';
        const label = TAB_LABELS[route.name] ?? route.name;
        const color = isFocused ? t.primary : t.textMuted;

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            onPress={() => {
              const event = navigation.emit({ type: 'tabPress', target: route.key, canPreventDefault: true });
              if (!isFocused && !event.defaultPrevented) navigation.navigate(route.name);
            }}
            className="flex-1 items-center gap-0.5 py-1.5"
            activeOpacity={0.7}
          >
            <Feather name={iconName} size={22} color={color} strokeWidth={isFocused ? 2 : 1.6} />
            <Text style={{ fontSize: 10.5, fontWeight: '500', color }}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
