export default function AdminSettingsPage() {
  return (
    <div className="space-y-8">
      <div className="rounded-3xl bg-amber-500 p-8 text-white shadow-soft">
        <p className="text-sm uppercase tracking-[0.2em] text-amber-100">Settings</p>
        <h1 className="mt-3 text-3xl font-bold">Business configuration</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-xl font-bold text-slate-900">Store details</h2>
          <div className="mt-4 space-y-3 text-sm text-slate-700">
            <div>Business name: BOOKS & STATIONERY</div>
            <div>Phone: +91 98765 43210</div>
            <div>WhatsApp: 919876543210</div>
            <div>Email: hello@shardapustak.com</div>
            <div>Address: Patna, Bihar</div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-xl font-bold text-slate-900">Payment and shipping</h2>
          <div className="mt-4 space-y-3 text-sm text-slate-700">
            <div>COD enabled: Yes</div>
            <div>Free delivery threshold: ₹699</div>
            <div>Delivery fee: ₹49</div>
            <div>Payment gateways: Razorpay/Cashfree placeholders</div>
          </div>
        </div>
      </div>
    </div>
  );
}
