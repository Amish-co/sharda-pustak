import Link from 'next/link';

export default function AdminPage() {
  const stats = [
    { label: 'Today Orders', value: '48', tone: 'bg-brand-50 text-brand-700' },
    { label: 'Revenue', value: '₹1.2L', tone: 'bg-emerald-50 text-emerald-700' },
    { label: 'Pending', value: '12', tone: 'bg-amber-50 text-amber-700' },
    { label: 'Low Stock', value: '9', tone: 'bg-red-50 text-red-700' }
  ];

  return (
    <div className="space-y-8">
      <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-soft">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Admin</p>
        <h1 className="mt-3 text-3xl font-bold">Business dashboard</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className={`rounded-2xl p-5 ${stat.tone}`}>
            <p className="text-sm font-medium">{stat.label}</p>
            <p className="mt-3 text-3xl font-black">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-xl font-bold text-slate-900">Recent orders</h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex justify-between rounded-xl bg-slate-50 px-3 py-2"><span>Order #1024</span><span className="font-semibold text-brand-700">Confirmed</span></li>
            <li className="flex justify-between rounded-xl bg-slate-50 px-3 py-2"><span>Order #1023</span><span className="font-semibold text-amber-600">Processing</span></li>
            <li className="flex justify-between rounded-xl bg-slate-50 px-3 py-2"><span>Order #1022</span><span className="font-semibold text-emerald-600">Delivered</span></li>
          </ul>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-xl font-bold text-slate-900">Quick actions</h2>
          <div className="mt-5 grid gap-3">
            <Link href="/admin/products" className="rounded-xl bg-brand-600 px-4 py-3 text-center font-semibold text-white hover:bg-brand-700">Manage products</Link>
            <Link href="/admin/orders" className="rounded-xl border border-brand-600 bg-brand-50 px-4 py-3 text-center font-semibold text-brand-700">View orders</Link>
            <Link href="/admin/settings" className="rounded-xl border border-slate-200 px-4 py-3 text-center font-semibold text-slate-800">Business settings</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
