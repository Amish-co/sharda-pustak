import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/lib/data';

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) return notFound();

  const related = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 4);

  return (
    <div className="space-y-10">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-soft">
            <div className="relative h-[420px] overflow-hidden rounded-2xl">
              <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {product.images.slice(0, 3).map((image, index) => (
              <div key={index} className="relative h-28 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <Image src={image} alt={`${product.name} view ${index + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-700">{product.categoryName}</p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">{product.name}</h1>

          <div className="mt-3 flex items-center gap-3 text-sm text-slate-600">
            <span>⭐ {product.rating}</span>
            <span>({product.reviewCount} reviews)</span>
            <span>•</span>
            <span>{product.brand}</span>
          </div>

          <div className="mt-6 flex items-end gap-3">
            <span className="text-4xl font-black text-brand-700">₹{product.price}</span>
            <span className="text-lg text-slate-400 line-through">₹{product.mrp}</span>
            <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">{Math.round(((product.mrp - product.price) / product.mrp) * 100)}% off</span>
          </div>

          <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
            <div className="flex items-center justify-between"><span>Availability</span><strong className="text-emerald-600">{product.stock > 0 ? 'In stock' : 'Out of stock'}</strong></div>
            <div className="mt-2 flex items-center justify-between"><span>SKU</span><strong>{product.sku}</strong></div>
            <div className="mt-2 flex items-center justify-between"><span>ISBN</span><strong>{product.isbn || 'N/A'}</strong></div>
            <div className="mt-2 flex items-center justify-between"><span>Weight</span><strong>{product.weight}</strong></div>
          </div>

          <div className="mt-6 flex gap-3">
            <Link href="/cart" className="flex-1 rounded-xl bg-brand-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-brand-700">Add to Cart</Link>
            <Link href="/checkout" className="flex-1 rounded-xl border border-brand-600 px-5 py-3 text-center font-semibold text-brand-700 transition hover:bg-brand-50">Buy Now</Link>
          </div>

          <div className="mt-6 flex gap-3">
            <a href="https://wa.me/919876543210?text=Hi%20I%20want%20to%20enquire%20about%20this%20product%3A%20%0A%0A${product.name}" className="flex-1 rounded-xl bg-emerald-500 px-5 py-3 text-center font-semibold text-white transition hover:bg-emerald-600">WhatsApp Enquiry</a>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-bold text-slate-900">Description</h2>
          <p className="mt-4 text-slate-700">{product.description}</p>
          <ul className="mt-6 space-y-2 text-slate-700">
            <li><strong>Publisher:</strong> {product.publisher}</li>
            <li><strong>Author:</strong> {product.author}</li>
            <li><strong>Brand:</strong> {product.brand}</li>
            <li><strong>Dimensions:</strong> {product.dimensions}</li>
            <li><strong>MOQ:</strong> {product.minimumOrderQty} units</li>
          </ul>
        </section>

        <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-xl font-bold text-slate-900">Delivery & payment</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            <li>• Local delivery in Bihar</li>
            <li>• COD available for eligible orders</li>
            <li>• UPI, cards and Net Banking supported</li>
            <li>• Bulk pricing for institutions and booksellers</li>
          </ul>
        </aside>
      </div>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">Related products</h2>
          <Link href="/products" className="text-sm font-semibold text-brand-700">Browse all</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {related.map((item) => (
            <Link key={item.id} href={`/products/${item.slug}`} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <div className="relative h-48">
                <Image src={item.images[0]} alt={item.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-brand-700">{item.categoryName}</p>
                <h3 className="mt-2 font-semibold text-slate-900">{item.name}</h3>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-lg font-bold text-brand-700">₹{item.price}</span>
                  <span className="text-sm text-slate-400 line-through">₹{item.mrp}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
