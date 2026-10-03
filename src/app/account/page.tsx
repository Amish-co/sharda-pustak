import Link from 'next/link';

export default function AccountPage() {
  return (
    <div className="space-y-8">
      <div className="rounded-3xl bg-gradient-to-r from-amber-500 to-orange-500 p-8 text-white shadow-soft">
        <p className="text-sm uppercase tracking-[0.2em] text-amber-100">My Account</p>
        <h1 className="mt-3 text-3xl font-bold">Welcome, Riya</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {['Profile','Addresses','Orders','Wishlist'].map((section) => (
          <div key={section} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">{section}</h2>
            <p className="mt-3 text-sm text-slate-600">Manage your {section.toLowerCase()} and account details.</p>
            <Link href="/account" className="mt-4 inline-flex text-sm font-semibold text-brand-700">Open</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
