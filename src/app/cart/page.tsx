import { products } from '@/lib/data';
import Link from 'next/link';

export default function CartPage() {
  const subtotal = products.slice(0, 2).reduce((sum, product) => sum + product.price, 0);
  const delivery = subtotal >= 699 ? 0 : 49;
  const total = subtotal + delivery;

  return (
    <div className="space-y-8">
      <div className="rounded-3xl bg-brand-700 p-8 text-white shadow-soft">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-100">Cart</p>
        <h1 className="mt-3 text-3xl font-bold">Your shopping bag</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          {products.slice(0, 2).map((product) => (
            <div key={product.id} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="relative h-24 w-24 overflow-hidden rounded-xl bg-slate-100">
                <img src={product.images[0]} alt={product.name} className="h-full w-full object-cover" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-slate-900">{product.name}</h2>
                <p className="text-sm text-slate-600">SKU: {product.sku}</p>
                <div className="mt-2 flex items-center gap-3 text-sm">
                  <span className="font-bold text-brand-700">₹{product.price}</span>
                  <span className="text-slate-400 line-through">₹{product.mrp}</span>
                </div>
              </div>
              <div className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700">Qty: 1</div>
            </div>
          ))}
        </div>

        <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-xl font-bold text-slate-900">Order summary</h2>
          <div className="mt-5 space-y-3 text-sm text-slate-700">
            <div className="flex justify-between"><span>Subtotal</span><span>₹{subtotal}</span></div>
            <div className="flex justify-between"><span>Delivery</span><span>{delivery === 0 ? 'Free' : `₹${delivery}`}</span></div>
            <div className="flex justify-between"><span>Discount</span><span>₹0</span></div>
            <div className="mt-4 border-t border-slate-200 pt-4 flex justify-between text-base font-bold text-slate-900"><span>Total</span><span>₹{total}</span></div>
          </div>
          <Link href="/checkout" className="mt-6 block rounded-xl bg-brand-600 px-5 py-3 text-center font-semibold text-white hover:bg-brand-700">Proceed to Checkout</Link>
        </aside>
      </div>
    </div>
  );
}
