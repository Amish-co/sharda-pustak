export default function AdminProductsPage() {
  return (
    <div className="space-y-8">
      <div className="rounded-3xl bg-brand-700 p-8 text-white shadow-soft">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-100">Products</p>
        <h1 className="mt-3 text-3xl font-bold">Product management</h1>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h2 className="text-xl font-bold text-slate-900">Inventory overview</h2>
          <button className="rounded-xl bg-brand-600 px-4 py-3 font-semibold text-white">+ Add product</button>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full text-left text-sm text-slate-700">
            <thead className="bg-slate-100 text-slate-800">
              <tr>
                <th className="px-4 py-3">Product</th>
                <th className="px-4 py-3">SKU</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Stock</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="px-4 py-3">Class 10 Science Textbook</td>
                <td className="px-4 py-3">SCI-101</td>
                <td className="px-4 py-3">₹245</td>
                <td className="px-4 py-3">41</td>
                <td className="px-4 py-3"><span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">Published</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
