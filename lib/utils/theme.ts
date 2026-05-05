import { useColorScheme } from 'nativewind';

export const tokens = {
  light: {
    primary: '#2563eb',
    primarySubtle: '#eff4ff',
    bg: '#ffffff',
    bgSubtle: '#f5f7fb',
    surface: '#ffffff',
    surfaceMuted: '#f1f4f9',
    border: '#e4e8ef',
    borderStrong: '#cdd4de',
    divider: '#eef1f5',
    text: '#0f172a',
    textMuted: '#64748b',
    textSubtle: '#94a3b8',
    success: '#059669',
    successSubtle: '#ecfdf5',
    danger: '#dc2626',
    dangerSubtle: '#fef2f2',
    warning: '#d97706',
    warningSubtle: '#fffbeb',
    skeleton: '#e8ecf2',
    overlay: 'rgba(15,23,42,0.45)',
  },
  dark: {
    primary: '#3b82f6',
    primarySubtle: '#1a2647',
    bg: '#0b1220',
    bgSubtle: '#0b1220',
    surface: '#111a2e',
    surfaceMuted: '#1a243f',
    border: '#1f2b48',
    borderStrong: '#2b3a5f',
    divider: '#1a243f',
    text: '#f8fafc',
    textMuted: '#94a3b8',
    textSubtle: '#64748b',
    success: '#10b981',
    successSubtle: '#0f2a23',
    danger: '#ef4444',
    dangerSubtle: '#2a1313',
    warning: '#f59e0b',
    warningSubtle: '#2a1f0a',
    skeleton: '#1a243f',
    overlay: 'rgba(0,0,0,0.6)',
  },
} as const;

export type ThemeTokens = typeof tokens.light;

export function useThemeTokens(): ThemeTokens {
  const { colorScheme } = useColorScheme();
  return tokens[colorScheme ?? 'light'];
}
