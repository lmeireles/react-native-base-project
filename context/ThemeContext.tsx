import { createContext, useContext } from 'react';
import { useColorScheme } from 'nativewind';

type Scheme = 'light' | 'dark' | 'system';

interface ThemeContextValue {
  colorScheme: 'light' | 'dark';
  isDark: boolean;
  setColorScheme: (scheme: Scheme) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { colorScheme, setColorScheme } = useColorScheme();
  const resolved = colorScheme ?? 'light';
  return (
    <ThemeContext.Provider value={{ colorScheme: resolved, isDark: resolved === 'dark', setColorScheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
