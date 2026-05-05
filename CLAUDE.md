# React Native Base Project

## Overview
Expo-based React Native template for building mobile apps. Start here for any new app — add screens, features, and API adapters on top of this foundation.

## Tech Stack
| Package | Purpose |
|---|---|
| Expo ~52 + Expo Router ~4 | Framework + file-based routing |
| NativeWind ^4 + Tailwind ^3 | Tailwind styling for React Native |
| React Hook Form ^7 + Zod | Form management + schema validation |
| TanStack Query ^5 | Server state / data fetching |
| Axios | HTTP client (pre-configured in `lib/api-client.ts`) |
| Expo Secure Store | Encrypted key-value storage for tokens |

## Project Structure
```
app/              # Expo Router screens and layouts (file-based routing)
components/
  ui/
    form/         # RHF-integrated primitives (FormInput, etc.)
context/          # React context providers
hooks/            # Custom hooks (useAuth, etc.)
lib/
  api-adapters/   # Per-resource API functions + types
    auth/
  utils/          # cn(), storage helpers
  api-client.ts   # Axios instance with auth interceptors
constants/        # App-wide constants (keys, URLs)
assets/           # Fonts and images
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

## Adding Screens
Create files in `app/` — Expo Router auto-generates routes. Use `_layout.tsx` to wrap route groups with shared providers or navigation.

## Adding API Adapters
1. Create `lib/api-adapters/<resource>/`
2. Add `<resource>.types.ts` — request/response interfaces
3. Add `<resource>.api.ts` — functions using `apiClient`
4. Export from `lib/api-adapters/index.ts`

## Styling
Use NativeWind `className` props. Merge classes conditionally with `cn()` from `@lib/utils/cn`:
```ts
import { cn } from '@lib/utils/cn';
className={cn('base-class', condition && 'conditional-class')}
```

## Forms
Use `FormInput` (and future form primitives) from `@components/ui/form` — they wrap RHF `Controller` internally. Pass `control` and `name` from `useForm()`.
```tsx
const { control, handleSubmit } = useForm<FormData>({ resolver: zodResolver(schema) });
<FormInput control={control} name="email" label="Email" />
```
