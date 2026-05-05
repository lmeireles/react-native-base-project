# React Native Base Project

## Overview
Expo-based React Native template with a complete design system, auth flow, and tab navigation. Blue-themed, light + dark mode.

## Tech Stack
| Package | Purpose |
|---|---|
| Expo ~52 + Expo Router ~4 | Framework + file-based routing |
| NativeWind ^4 + Tailwind ^3 | Tailwind styling (`dark:` prefix works via system color scheme) |
| React Hook Form ^7 + Zod | Form management + schema validation |
| TanStack Query ^5 | Server state / data fetching |
| Axios | HTTP client (pre-configured in `lib/api-client.ts`) |
| Expo Secure Store | Encrypted key-value storage for tokens |
| @expo/vector-icons (Feather) | Icons — use Feather everywhere |

## Project Structure
```
app/
  _layout.tsx          # Root layout — QueryClient + providers
  index.tsx            # Splash/router screen
  (auth)/              # Login + OTP screens
  (tabs)/              # Home, Search, Activity, Profile
components/
  ui/                  # Primitive components (Button, Input, Card, …)
    form/              # RHF-integrated form primitives
  header/Header.tsx    # AppBar (standard + large iOS-style)
  layout/Page.tsx      # Screen wrapper with safe area + bg
  navigation/TabBar.tsx  # Custom tab bar for Expo Router Tabs
context/
  ThemeContext.tsx     # colorScheme, isDark, setColorScheme
  AuthContext.tsx      # Auth state (wraps useAuth hook)
  AppContext.tsx       # App-wide state (toasts)
hooks/
  useAuth.ts           # TanStack Query auth hook
lib/
  api-adapters/auth/   # Auth API functions + types
  utils/
    cn.ts              # cn() class merger
    storage.ts         # SecureStore wrapper
    theme.ts           # tokens + useThemeTokens()
  api-client.ts        # Axios instance with auth interceptors
constants/app.ts       # AUTH_TOKEN_KEY, API_URL
```

## Path Aliases
Always use `@` aliases — never relative `../../` imports.

| Alias | Resolves to |
|---|---|
| `@/*` | project root |
| `@components/*` | `./components/*` |
| `@hooks/*` | `./hooks/*` |
| `@lib/*` | `./lib/*` |
| `@context/*` | `./context/*` |
| `@constants/*` | `./constants/*` |

## Commands
```bash
npm install       # Install deps
npm run ios       # iOS simulator
npm run android   # Android emulator
npm run web       # Web (Expo Go / browser)
npm start         # Expo dev server
```

## Environment Variables
Uses `EXPO_PUBLIC_` prefix for client-side vars. Copy `.env.example` to `.env.local`:
```
EXPO_PUBLIC_API_URL=http://localhost:3000
```

## Component System

### UI Primitives (`@components/ui`)
`Button`, `Input`, `Card`, `Badge`, `Avatar`, `Toggle`, `Divider`, `Skeleton`, `Alert`, `ListItem`

All exported from `@components/ui/index.ts`. Import directly:
```tsx
import { Button, Card, Badge } from '@components/ui';
```

**Button** variants: `primary | secondary | ghost | outline | danger`. Sizes: `sm | md | lg`. Use `leading`/`trailing` props for icons; `children` is always the text string.

**Badge** tones: `neutral | primary | success | danger | warning`

**Alert** tones: `info | success | danger | warning`

### Form Primitives (`@components/ui/form`)
`Form`, `FormInput`, `FormError`, `InputPhone` — all wrap RHF `Controller` internally.

```tsx
const { control, handleSubmit } = useForm<FormData>({ resolver: zodResolver(schema) });
<FormInput control={control} name="email" label="Email" />
<InputPhone control={control} name="phone" />
```

### Theme System
Two layers:

1. **NativeWind `dark:` prefix** — for static layout/color classes:
   ```tsx
   className="bg-bg-base dark:bg-bg-base-dark text-content dark:text-content-dark"
   ```
   Custom color tokens are defined in `tailwind.config.js`.

2. **`useThemeTokens()`** — for dynamic/inline styles (shadows, gradients, computed values):
   ```tsx
   import { useThemeTokens } from '@lib/utils/theme';
   const t = useThemeTokens();
   style={{ backgroundColor: t.primary, shadowColor: t.primary }}
   ```

### Context Providers
Mounted in `app/_layout.tsx` in this order: `ThemeProvider > AuthProvider > AppProvider`

- `useTheme()` from `@context/ThemeContext` → `{ colorScheme, isDark, setColorScheme }`
- `useAuth()` from `@context/AuthContext` → `{ user, isAuthenticated, isLoading, login, logout, register }`
- `useApp()` from `@context/AppContext` → `{ toasts, showToast, dismissToast }`

### Screen Anatomy
```tsx
<Page safe>                     // SafeAreaView + bg-bg-subtle
  <Header large title="..." />  // AppBar
  <ScrollView>                  // or flat View
    {/* content */}
  </ScrollView>
</Page>
```

Use `<Page safe scroll>` for scrollable screens without a separate ScrollView.

### Tab Navigation
`app/(tabs)/_layout.tsx` uses `<Tabs tabBar={(props) => <TabBar {...props} />}>`.
`TabBar` reads `useTheme()` for colorScheme and indexes into `tokens` for colors. Add tab icon/label mappings in `TAB_ICONS` / `TAB_LABELS` inside `components/navigation/TabBar.tsx`.

## Adding Screens
Create files in `app/` — Expo Router auto-generates routes. Use `_layout.tsx` to wrap route groups.

## Adding API Adapters
1. Create `lib/api-adapters/<resource>/`
2. Add `<resource>.types.ts` — request/response interfaces
3. Add `<resource>.api.ts` — functions using `apiClient`
4. Export from `lib/api-adapters/index.ts`

## Styling Rules
- Static colors/layout → NativeWind `className` with `dark:` variants
- Dynamic/computed values → `useThemeTokens()` + inline `style`
- Merge classes with `cn()` from `@lib/utils/cn`
- Use Feather icons from `@expo/vector-icons` exclusively
