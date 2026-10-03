import Link from 'next/link';
import Image from 'next/image';
import { products, categories } from '@/lib/data';

export function HomePage() {
  return (
    <div className="space-y-10">
      <section className="overflow-hidden rounded-[32px] bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500 p-6 text-white shadow-soft md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-brand-100">Books • Stationery • Wholesale</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Everything students, schools and businesses need.</h1>
            <p className="mt-4 max-w-xl text-brand-50">Trusted books, school supplies, notebooks and office stationery for Bihar with local delivery and bulk order support.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/products" className="rounded-xl bg-white px-5 py-3 text-center font-bold text-brand-700">Shop now</Link>
              <Link href="/products?category=wholesale" className="rounded-xl border border-white/40 px-5 py-3 text-center font-bold text-white">Buy in bulk</Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-brand-50">
              <span>Fast local delivery</span>
              <span>•</span>
              <span>COD available</span>
              <span>•</span>
              <span>Wholesale pricing</span>
            </div>
          </div>

          <div className="relative rounded-[28px] border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
            <div className="relative h-[360px] overflow-hidden rounded-[24px]">
              <Image src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=80" alt="Books and stationery" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">Popular categories</h2>
          <Link href="/products" className="text-sm font-semibold text-brand-700">View all</Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {categories.slice(0, 8).map((category) => (
            <Link key={category.slug} href={`/categories/${category.slug}`} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <p className="text-xs uppercase tracking-[0.2em] text-brand-700">{category.name}</p>
              <p className="mt-3 text-sm text-slate-600">{category.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">Featured products</h2>
          <Link href="/products" className="text-sm font-semibold text-brand-700">Browse all</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.slice(0, 8).map((product) => (
            <Link key={product.id} href={`/products/${product.slug}`} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <div className="relative h-52">
                <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
              </div>
              <div className="space-y-3 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-brand-700">{product.categoryName}</p>
                <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xl font-bold text-brand-700">₹{product.price}</p>
                    <p className="text-sm text-slate-400 line-through">₹{product.mrp}</p>
                  </div>
                  <span className="rounded-full bg-brand-50 px-2 py-1 text-xs font-medium text-brand-700">{product.stock} left</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-brand-50 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Trusted</p>
            <h3 className="mt-2 text-xl font-bold text-slate-900">Verified stock</h3>
            <p className="mt-2 text-sm text-slate-600">Real inventory, checked before dispatch.</p>
          </div>
          <div className="rounded-2xl bg-emerald-50 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Local</p>
            <h3 className="mt-2 text-xl font-bold text-slate-900">Bihar delivery</h3>
            <p className="mt-2 text-sm text-slate-600">Fast delivery across Patna, Gaya, Muzaffarpur and nearby towns.</p>
          </div>
          <div className="rounded-2xl bg-amber-50 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Support</p>
            <h3 className="mt-2 text-xl font-bold text-slate-900">WhatsApp guidance</h3>
            <p className="mt-2 text-sm text-slate-600">Quick support for orders, returns and bulk enquiries.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">School essentials</h2>
          <Link href="/products?category=school-stationery" className="text-sm font-semibold text-brand-700">Explore</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.filter((product) => product.category === 'school-stationery').slice(0, 4).map((product) => (
            <Link key={product.id} href={`/products/${product.slug}`} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="relative h-44">
                <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{product.name}</h3>
              <p className="mt-2 text-brand-700 font-bold">₹{product.price}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
