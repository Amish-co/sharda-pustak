export default function AdminOrdersPage() {
  return (
    <div className="space-y-8">
      <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-soft">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Orders</p>
        <h1 className="mt-3 text-3xl font-bold">Order management</h1>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <div className="grid gap-3 md:grid-cols-3">
          {['Pending', 'Processing', 'Delivered'].map((state) => (
            <div key={state} className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm text-slate-600">{state}</p>
              <p className="mt-2 text-2xl font-black text-slate-900">{state === 'Pending' ? 12 : state === 'Processing' ? 7 : 18}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
