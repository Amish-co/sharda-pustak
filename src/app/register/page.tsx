export default function RegisterPage() {
  return (
    <div className="mx-auto max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
      <h1 className="text-3xl font-bold text-slate-900">Create account</h1>
      <div className="mt-6 space-y-4">
        <input className="w-full rounded-xl border border-slate-300 px-4 py-3" placeholder="Full name" />
        <input className="w-full rounded-xl border border-slate-300 px-4 py-3" placeholder="Mobile number" />
        <input className="w-full rounded-xl border border-slate-300 px-4 py-3" placeholder="Email" />
        <input type="password" className="w-full rounded-xl border border-slate-300 px-4 py-3" placeholder="Password" />
        <button className="w-full rounded-xl bg-brand-600 px-5 py-3 font-semibold text-white">Register</button>
      </div>
    </div>
  );
}
