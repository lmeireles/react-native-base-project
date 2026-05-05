# React Native Base Project

A production-ready Expo starter with a complete design system, auth flow, and tab navigation. Fork this to kick-start any mobile app.

---

## Stack

| Package | Version | Purpose |
|---|---|---|
| Expo | ~55 | Native app runtime |
| Expo Router | ~55 | File-based navigation |
| NativeWind | ^4 | Tailwind CSS for React Native |
| Tailwind CSS | ^3 | Utility classes + design tokens |
| React Hook Form | ^7 | Form state management |
| Zod | ^3 | Schema validation |
| TanStack Query | ^5 | Server state + caching |
| Axios | ^1 | HTTP client (with auth interceptors) |
| Expo Secure Store | ~55 | Encrypted token storage |
| @expo/vector-icons (Feather) | ^15 | Icons |

---

## Getting Started

```bash
# Install dependencies
npm install

# Copy env file and set your API URL
cp .env.example .env.local

# Run on iOS simulator
npm run ios

# Run on Android emulator
npm run android

# Run in browser (limited native APIs)
npm run web
```

**Environment variables** use the `EXPO_PUBLIC_` prefix:

```
EXPO_PUBLIC_API_URL=https://api.yourapp.com
```

---

## Project Structure

```
app/
  _layout.tsx          # Root layout — all providers mounted here
  index.tsx            # Splash screen — routes to auth or tabs
  (auth)/
    login.tsx          # Phone number + social auth
    otp.tsx            # 6-digit OTP verification
  (tabs)/
    index.tsx          # Home dashboard
    search.tsx         # Search with filters
    activity.tsx       # Activity feed
    profile.tsx        # Profile + settings + dark mode toggle

components/
  ui/                  # Primitive UI components
    form/              # RHF-wired form inputs
  header/Header.tsx    # AppBar (standard + large iOS-style)
  layout/Page.tsx      # Screen wrapper (SafeAreaView + bg)
  navigation/TabBar.tsx  # Custom bottom tab bar

context/
  ThemeContext.tsx     # colorScheme, isDark, setColorScheme
  AuthContext.tsx      # Auth state (wraps useAuth hook)
  AppContext.tsx       # App-wide toasts

hooks/
  useAuth.ts           # TanStack Query auth queries/mutations

lib/
  api-adapters/auth/   # Auth API functions + TypeScript types
  utils/
    cn.ts              # cn() — conditional Tailwind class merging
    storage.ts         # SecureStore read/write/delete
    theme.ts           # Design tokens + useThemeTokens()
  api-client.ts        # Axios instance with auth interceptors

constants/app.ts       # AUTH_TOKEN_KEY, API_URL
tailwind.config.js     # Design token colors + border radius
```

---

## UI Components

All primitives live in `components/ui/` and are barrel-exported:

```tsx
import { Button, Card, Badge, Input, Avatar, Divider, ListItem, Toggle, Skeleton, Alert } from '@components/ui';
```

### Button

```tsx
<Button>Primary</Button>
<Button variant="secondary" size="sm">Secondary</Button>
<Button variant="outline" leading={<Feather name="mail" size={18} color={t.text} />}>
  With icon
</Button>
<Button variant="danger" loading full>Destructive</Button>
```

**Variants:** `primary | secondary | ghost | outline | danger`
**Sizes:** `sm | md | lg`
**Props:** `leading`, `trailing` (React nodes), `loading` (bool), `full` (bool, 100% width)

### Input

```tsx
<Input
  label="Email"
  placeholder="you@example.com"
  leading={<Feather name="mail" size={18} color={t.textMuted} />}
  hint="We'll never share your email."
  error={errors.email?.message}
/>
```

### Card

```tsx
<Card>
  <Text>Content</Text>
</Card>

<Card padding={0} onPress={() => router.push('/detail')}>
  <ListItem title="Item" subtitle="Description" trailing={<Feather name="chevron-right" size={16} />} />
</Card>
```

### Badge

```tsx
<Badge tone="success">Active</Badge>
<Badge tone="danger">Error</Badge>
```

**Tones:** `neutral | primary | success | danger | warning`

### Alert

```tsx
<Alert tone="info" title="Heads up" message="Your session expires in 10 minutes." />
<Alert tone="danger" message={error.message} />
```

### Other primitives

```tsx
<Divider />                          // 1px horizontal rule
<Avatar label="Alex" size={40} />    // Initials avatar with deterministic color
<Toggle value={isDark} onChange={setDark} />
<Skeleton width="60%" height={14} />
<ListItem
  leading={<Avatar label="M" size={38} />}
  title="Maya Patel"
  subtitle="Product Designer"
  trailing={<Feather name="chevron-right" size={16} />}
  onPress={() => router.push('/profile/maya')}
  dense
/>
```

---

## Form Components

Form primitives wrap React Hook Form's `Controller` internally — just pass `control` and `name`.

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormInput, FormError, InputPhone } from '@components/ui/form';

const schema = z.object({
  phone: z.string().min(7),
  email: z.string().email(),
  password: z.string().min(8),
});
type FormData = z.infer<typeof schema>;

export function SignUpScreen() {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <Form>
      <InputPhone control={control} name="phone" label="Phone" />
      <FormInput control={control} name="email" label="Email" placeholder="you@example.com" />
      <FormInput control={control} name="password" label="Password" secureTextEntry />
      <FormError message={errors.root?.message} />
      <Button onPress={handleSubmit(onSubmit)} full>Continue</Button>
    </Form>
  );
}
```

---

## Screen Anatomy

Every screen follows the same structure:

```tsx
import { Page } from '@components/layout/Page';
import { Header } from '@components/header/Header';

export default function MyScreen() {
  return (
    <Page safe>
      <Header title="Title" />
      <ScrollView>{/* content */}</ScrollView>
    </Page>
  );
}
```

**Page props:** `safe` (SafeAreaView, default true), `scroll` (wraps content in ScrollView)

**Header variants:**
```tsx
// Standard centered title
<Header
  title="Settings"
  leading={<TouchableOpacity onPress={router.back}><Feather name="chevron-left" size={22} /></TouchableOpacity>}
  trailing={<Button size="sm">Save</Button>}
/>

// Large title (iOS dashboard style)
<Header large title="Good morning" subtitle="Tuesday, May 5" trailing={<Avatar label="A" size={32} />} />
```

---

## Theme System

The design system uses two layers — pick the right one per use case.

### 1. NativeWind `dark:` classes (prefer this)

Use for static layout and color. Every design token has a `-dark` counterpart:

```tsx
className="bg-surface dark:bg-surface-dark"
className="text-content dark:text-content-dark"
className="border-border-base dark:border-border-base-dark"
```

**Full token list** (defined in `tailwind.config.js`):

| Token | Light | Dark |
|---|---|---|
| `primary` / `primary-dark` | `#2563eb` | `#3b82f6` |
| `primary-subtle` / `primary-subtle-dark` | `#eff4ff` | `#1a2647` |
| `bg-base` / `bg-base-dark` | `#ffffff` | `#0b1220` |
| `bg-subtle` / `bg-subtle-dark` | `#f5f7fb` | `#0b1220` |
| `surface` / `surface-dark` | `#ffffff` | `#111a2e` |
| `surface-muted` / `surface-muted-dark` | `#f1f4f9` | `#1a243f` |
| `border-base` / `border-base-dark` | `#e4e8ef` | `#1f2b48` |
| `border-strong` / `border-strong-dark` | `#cdd4de` | `#2b3a5f` |
| `divider` / `divider-dark` | `#eef1f5` | `#1a243f` |
| `content` / `content-dark` | `#0f172a` | `#f8fafc` |
| `content-muted` / `content-muted-dark` | `#64748b` | `#94a3b8` |
| `content-subtle` / `content-subtle-dark` | `#94a3b8` | `#64748b` |
| `success` / `success-dark` | `#059669` | `#10b981` |
| `danger` / `danger-dark` | `#dc2626` | `#ef4444` |
| `warning` / `warning-dark` | `#d97706` | `#f59e0b` |

### 2. `useThemeTokens()` (for inline styles)

Use when you need runtime color values — gradients, shadows, `backgroundColor` on animated views:

```tsx
import { useThemeTokens } from '@lib/utils/theme';

export function FeaturedCard() {
  const t = useThemeTokens();
  return (
    <View style={{ backgroundColor: t.primary, shadowColor: t.primary, shadowOpacity: 0.4, borderRadius: 12 }}>
      <Text style={{ color: '#fff' }}>Content</Text>
    </View>
  );
}
```

### Controlling dark mode

The `ThemeContext` exposes manual control — used by the dark mode toggle in Profile:

```tsx
import { useTheme } from '@context/ThemeContext';

const { isDark, setColorScheme } = useTheme();
<Toggle value={isDark} onChange={(v) => setColorScheme(v ? 'dark' : 'light')} />
```

---

## Auth Flow

Authentication state lives in `AuthContext`, which wraps `hooks/useAuth.ts`.

```tsx
import { useAuth } from '@context/AuthContext';

const { user, isAuthenticated, isLoading, login, logout, register } = useAuth();
```

**How auth works:**
1. Splash (`app/index.tsx`) calls `useAuth()` and routes to `/(auth)/login` or `/(tabs)` depending on `isAuthenticated`
2. On successful login/register, the token is stored in Expo Secure Store
3. `apiClient` reads the token on every request via an Axios request interceptor
4. On a 401 response, the token is cleared automatically

---

## Adding an API Resource

1. Create the folder and files:

```
lib/api-adapters/posts/
  posts.types.ts
  posts.api.ts
```

2. Define types:

```ts
// posts.types.ts
export interface Post { id: string; title: string; body: string; createdAt: string; }
export interface CreatePostRequest { title: string; body: string; }
```

3. Define API functions:

```ts
// posts.api.ts
import { apiClient } from '@lib/api-client';
import type { Post, CreatePostRequest } from './posts.types';

export const postsApi = {
  list: () => apiClient.get<Post[]>('/posts').then((r) => r.data),
  get: (id: string) => apiClient.get<Post>(`/posts/${id}`).then((r) => r.data),
  create: (data: CreatePostRequest) => apiClient.post<Post>('/posts', data).then((r) => r.data),
  delete: (id: string) => apiClient.delete<void>(`/posts/${id}`).then((r) => r.data),
};
```

4. Use with TanStack Query:

```tsx
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { postsApi } from '@lib/api-adapters/posts/posts.api';

function usePosts() {
  return useQuery({ queryKey: ['posts'], queryFn: postsApi.list });
}

function useCreatePost() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postsApi.create,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['posts'] }),
  });
}
```

---

## Adding a Screen

Create a file in `app/` — Expo Router auto-registers it as a route:

```tsx
// app/posts/[id].tsx
import { View, Text, ScrollView } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { Page } from '@components/layout/Page';
import { Header } from '@components/header/Header';
import { Card } from '@components/ui/Card';

export default function PostDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <Page safe>
      <Header
        title="Post"
        leading={
          <TouchableOpacity onPress={() => router.back()}>
            <Feather name="chevron-left" size={22} color={t.text} />
          </TouchableOpacity>
        }
      />
      <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
        <Card>
          <Text className="text-content dark:text-content-dark">{id}</Text>
        </Card>
      </ScrollView>
    </Page>
  );
}
```

---

## Adding a Tab

1. Create the screen file: `app/(tabs)/newTab.tsx`
2. Add it to the tab layout in `app/(tabs)/_layout.tsx`:
```tsx
<Tabs.Screen name="newTab" />
```
3. Register icon and label in `components/navigation/TabBar.tsx`:
```ts
const TAB_ICONS: Record<string, keyof typeof Feather.glyphMap> = {
  // ...existing
  newTab: 'bookmark',
};
const TAB_LABELS: Record<string, string> = {
  // ...existing
  newTab: 'Saved',
};
```

---

## Path Aliases

Always use aliases — never relative `../../` imports.

| Alias | Resolves to |
|---|---|
| `@/*` | project root |
| `@components/*` | `./components/*` |
| `@hooks/*` | `./hooks/*` |
| `@lib/*` | `./lib/*` |
| `@context/*` | `./context/*` |
| `@constants/*` | `./constants/*` |

---

## For AI Agents

> This section is for AI coding assistants implementing features in this codebase.

### Ground rules

- **Never use relative imports.** Always use `@` aliases.
- **Never add comments** unless the WHY is non-obvious (a hidden constraint, workaround, or surprising invariant).
- **Icons are Feather only** — `import { Feather } from '@expo/vector-icons'`.
- **No new dependencies** without user approval.

### Adding a new feature — checklist

1. **API layer first.** `lib/api-adapters/<resource>/` with `.types.ts` and `.api.ts`. Export from barrel if one exists.
2. **Data hook.** Use TanStack Query (`useQuery` / `useMutation`) in a `hooks/use<Resource>.ts` file, or inline in the screen if it's used only once.
3. **Screen.** Place in `app/`. Use `Page` + `Header` + scroll container. Match the existing screen anatomy.
4. **Styling.** Static colors → NativeWind `className` with `dark:` variants. Dynamic values (gradients, shadows, animated) → `useThemeTokens()` + inline `style`. Use `cn()` for conditional classes.
5. **Forms.** Always use `FormInput` / `InputPhone` with `react-hook-form` + `zodResolver`. Never manage form state manually.

### Component decision tree

| Need | Use |
|---|---|
| Pressable with label | `Button` with appropriate `variant` |
| Text field (in a form) | `FormInput` |
| Text field (standalone) | `Input` |
| Container with border + bg | `Card` |
| Status label | `Badge` with appropriate `tone` |
| Row in a list | `ListItem` |
| Horizontal rule | `Divider` |
| Loading placeholder | `Skeleton` |
| Info/error/success banner | `Alert` |
| User initials | `Avatar` |
| On/off switch | `Toggle` |

### Theme usage — quick reference

```tsx
// Static class (prefer)
className="bg-surface dark:bg-surface-dark border border-border-base dark:border-border-base-dark"

// Dynamic value (inline style only)
const t = useThemeTokens();
style={{ backgroundColor: t.primary }}

// Dark mode control
const { isDark, setColorScheme } = useTheme();

// Auth state
const { user, isAuthenticated, login, logout } = useAuth();

// Toast
const { showToast } = useApp();
showToast('Saved successfully', 'success');
```

### Context providers — what they expose

```ts
// ThemeContext
useTheme() → { colorScheme: 'light'|'dark', isDark: boolean, setColorScheme(scheme) }

// AuthContext  
useAuth() → { user, isAuthenticated, isLoading, login(data), logout(), register(data) }

// AppContext
useApp() → { toasts, showToast(message, type?), dismissToast(id) }
```

### Routing

Expo Router is file-based. Key patterns:
- `router.push('/posts/123')` — navigate forward
- `router.replace('/(tabs)')` — replace (no back)
- `router.back()` — go back
- `useLocalSearchParams<{ id: string }>()` — read route params

### Do not modify

- `lib/api-client.ts` — auth interceptors are shared; changing them affects every request
- `app/_layout.tsx` — provider order matters; `ThemeProvider` must wrap `AuthProvider`
- `tailwind.config.js` color names — components reference these by name; renaming breaks everything
