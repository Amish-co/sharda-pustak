export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 md:grid-cols-3 md:px-6 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <h3 className="text-xl font-black text-brand-700">BOOKS & STATIONERY</h3>
          <p className="mt-4 max-w-md text-sm text-slate-600">Your trusted source for textbooks, stationery, office essentials and wholesale supplies in Bihar.</p>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-700">Shop</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>School Books</li>
            <li>Competitive Exams</li>
            <li>Notebooks</li>
            <li>Stationery</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-700">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>About</li>
            <li>Contact</li>
            <li>Wholesale</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-700">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>+91 98765 43210</li>
            <li>hello@shardapustak.com</li>
            <li>Patna, Bihar</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
