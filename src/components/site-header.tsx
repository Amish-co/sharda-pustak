use client;

import Link from 'next/link';
import { Search, ShoppingCart, Menu, UserRound } from 'lucide-react';

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur-sm sticky top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <button className="rounded-xl border border-slate-200 p-2 md:hidden" aria-label="Open menu">
            <Menu size={18} />
          </button>
          <Link href="/" className="text-xl font-black tracking-tight text-brand-700">BOOKS &amp; STATIONERY</Link>
        </div>

        <div className="hidden flex-1 items-center justify-center md:flex">
          <div className="flex w-full max-w-xl items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2">
            <Search size={18} className="text-slate-500" />
            <input placeholder="Search books, course, stationery..." className="w-full border-0 bg-transparent text-sm outline-none placeholder:text-slate-400" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/login" className="hidden rounded-full border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 md:inline-flex"><UserRound size={16} className="mr-2" /> Login</Link>
          <Link href="/cart" className="relative rounded-full bg-brand-600 p-2 text-white">
            <ShoppingCart size={18} />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-[10px] font-bold text-slate-900">2</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
