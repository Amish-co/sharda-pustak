import { products } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductsPage({ searchParams }: { searchParams?: { q?: string; category?: string; max?: string } }) {
  const query = (searchParams?.q || '').toLowerCase();
  const currentCategory = searchParams?.category || 'all';
  const maxBudget = Number(searchParams?.max || 5000);

  const filtered = products.filter((product) => {
    const matchesQuery =
      !query ||
      product.name.toLowerCase().includes(query) ||
      product.isbn?.toLowerCase().includes(query) ||
      product.sku.toLowerCase().includes(query) ||
      product.author.toLowerCase().includes(query) ||
      product.publisher.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query);

    const matchesCategory = currentCategory === 'all' || product.category === currentCategory;
    const matchesBudget = product.price <= maxBudget;

    return matchesQuery && matchesCategory && matchesBudget;
  });

  return (
    <div className="space-y-8">
      <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-soft">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Search</p>
        <h1 className="mt-3 text-3xl font-bold md:text-4xl">Find the right books and stationery</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
        <aside className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Filters</h2>
          <div className="mt-5 space-y-4 text-sm text-slate-700">
            <div>
              <p className="mb-2 font-medium">Category</p>
              <div className="space-y-2">
                <Link href="/products" className="block rounded-lg bg-slate-100 px-3 py-2">All</Link>
                <Link href="/products?category=school-books" className="block rounded-lg px-3 py-2 hover:bg-slate-100">School Books</Link>
                <Link href="/products?category=competitive-exams" className="block rounded-lg px-3 py-2 hover:bg-slate-100">Competitive Exams</Link>
                <Link href="/products?category=notebooks" className="block rounded-lg px-3 py-2 hover:bg-slate-100">Notebooks</Link>
                <Link href="/products?category=school-stationery" className="block rounded-lg px-3 py-2 hover:bg-slate-100">School Stationery</Link>
              </div>
            </div>
            <div>
              <p className="mb-2 font-medium">Price</p>
              <Link href="/products?max=500" className="block rounded-lg px-3 py-2 hover:bg-slate-100">Up to ₹500</Link>
              <Link href="/products?max=1000" className="block rounded-lg px-3 py-2 hover:bg-slate-100">Up to ₹1000</Link>
              <Link href="/products?max=2000" className="block rounded-lg px-3 py-2 hover:bg-slate-100">Up to ₹2000</Link>
            </div>
          </div>
        </aside>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.length > 0 ? filtered.map((product) => (
            <Link key={product.id} href={`/products/${product.slug}`} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <div className="relative h-56">
                <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
              </div>
              <div className="space-y-3 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-brand-700">{product.categoryName}</p>
                <h2 className="text-lg font-semibold text-slate-900">{product.name}</h2>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <span>⭐ {product.rating}</span>
                  <span>({product.reviewCount})</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xl font-bold text-brand-700">₹{product.price}</p>
                    <p className="text-sm text-slate-400 line-through">₹{product.mrp}</p>
                  </div>
                  <span className="rounded-full bg-brand-50 px-2 py-1 text-xs font-medium text-brand-700">{product.stock} in stock</span>
                </div>
              </div>
            </Link>
          )) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-slate-600 md:col-span-2 xl:col-span-3">
              No products match your search. Try a broader keyword or different filters.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
