export default function NotFound() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-soft">
      <p className="text-sm uppercase tracking-[0.2em] text-brand-700">404</p>
      <h1 className="mt-3 text-3xl font-bold text-slate-900">Page not found</h1>
      <p className="mt-3 text-slate-600">The page you are looking for is not available.</p>
    </div>
  );
}
