import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { categories, products } from '@/lib/data';

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const current = categories.find((category) => category.slug === params.slug);
  if (!current) return notFound();

  const categoryProducts = products.filter((product) => product.category === current.slug);

  return (
    <div className="space-y-8">
      <div className="rounded-3xl bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500 p-8 text-white shadow-soft">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-brand-100">Category</p>
        <h1 className="text-3xl font-bold md:text-4xl">{current.name}</h1>
        <p className="mt-3 max-w-2xl text-brand-50">{current.description}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {categoryProducts.map((product) => (
          <Link key={product.id} href={`/products/${product.slug}`} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
            <div className="relative h-52">
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
        ))}
      </div>
    </div>
  );
}
