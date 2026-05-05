import { View, Text } from 'react-native';

const PALETTE = ['#2563eb', '#7c3aed', '#0891b2', '#059669', '#d97706', '#db2777'];

interface AvatarProps {
  label?: string;
  size?: number;
  color?: string;
}

export function Avatar({ label, size = 40, color }: AvatarProps) {
  const bg = color ?? PALETTE[(label?.charCodeAt(0) ?? 0) % PALETTE.length];
  const initial = label?.[0]?.toUpperCase() ?? '?';
  return (
    <View
      style={{ width: size, height: size, borderRadius: size / 2, backgroundColor: bg }}
      className="items-center justify-center"
    >
      <Text style={{ fontSize: size * 0.4, color: '#fff', fontWeight: '600' }}>{initial}</Text>
    </View>
  );
}
