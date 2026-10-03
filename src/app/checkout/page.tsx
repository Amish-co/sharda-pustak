import Link from 'next/link';

export default function CheckoutPage() {
  const subtotal = 1289;
  const delivery = 49;
  const total = subtotal + delivery;

  return (
    <div className="space-y-8">
      <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-soft">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Checkout</p>
        <h1 className="mt-3 text-3xl font-bold">Complete your order</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <form className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Customer details</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <input className="rounded-xl border border-slate-300 px-4 py-3" placeholder="Full name" />
              <input className="rounded-xl border border-slate-300 px-4 py-3" placeholder="Mobile number" />
              <input className="md:col-span-2 rounded-xl border border-slate-300 px-4 py-3" placeholder="Email (optional)" />
              <input className="md:col-span-2 rounded-xl border border-slate-300 px-4 py-3" placeholder="Address" />
              <input className="rounded-xl border border-slate-300 px-4 py-3" placeholder="Landmark" />
              <input className="rounded-xl border border-slate-300 px-4 py-3" placeholder="City" />
              <input className="rounded-xl border border-slate-300 px-4 py-3" placeholder="District" />
              <input className="rounded-xl border border-slate-300 px-4 py-3" placeholder="State" />
              <input className="rounded-xl border border-slate-300 px-4 py-3" placeholder="Pincode" />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">Payment</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <label className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm font-medium text-slate-700">UPI</label>
              <label className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm font-medium text-slate-700">Card</label>
              <label className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm font-medium text-slate-700">Cash on Delivery</label>
            </div>
          </div>

          <button type="submit" className="w-full rounded-xl bg-brand-600 px-5 py-3 text-center font-semibold text-white hover:bg-brand-700">Place Order</button>
        </form>

        <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-xl font-bold text-slate-900">Order summary</h2>
          <div className="mt-5 space-y-4 text-sm text-slate-700">
            <div className="flex items-center justify-between"><span>Product total</span><span>₹{subtotal}</span></div>
            <div className="flex items-center justify-between"><span>Delivery</span><span>₹{delivery}</span></div>
            <div className="flex items-center justify-between"><span>Discount</span><span>₹0</span></div>
            <div className="border-t border-slate-200 pt-4 flex items-center justify-between text-base font-bold text-slate-900"><span>Total payable</span><span>₹{total}</span></div>
          </div>
        </aside>
      </div>
    </div>
  );
}
