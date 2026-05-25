'use client';

import { LocaleProvider } from '@/lib/locale-context';

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return <LocaleProvider>{children}</LocaleProvider>;
}
