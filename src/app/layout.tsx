import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { WhatsAppFloat } from '@/components/whatsapp-float';
import { CartProvider } from '@/components/cart-provider';

export const metadata: Metadata = {
  title: 'BOOKS & STATIONERY',
  description: 'Books and stationery store for Bihar, India',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000')
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">
        <CartProvider>
          <div className="min-h-screen">
            <SiteHeader />
            <main className="mx-auto max-w-7xl px-4 pb-14 pt-6 md:px-6 lg:px-8">{children}</main>
            <SiteFooter />
            <WhatsAppFloat />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
