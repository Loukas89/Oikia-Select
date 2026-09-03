import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-[#102f35] text-[#f8f5ef]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <p className="font-serif text-3xl">Oikia Select</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-[#d7d7cf]">Επιλεγμένα ακίνητα, ξεκάθαρη πληροφόρηση και μια πιο ανθρώπινη εμπειρία αναζήτησης.</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c7a276]">Explore</p>
          <div className="mt-5 grid gap-3 text-sm text-[#d7d7cf]">
            <Link href="/properties">Όλα τα ακίνητα</Link><Link href="/favorites">Αγαπημένα</Link><Link href="/about">Η φιλοσοφία μας</Link>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c7a276]">Contact</p>
          <div className="mt-5 grid gap-3 text-sm text-[#d7d7cf]"><span>+30 210 000 0000</span><span>hello@oikiaselect.gr</span><span>Αθήνα, Ελλάδα</span></div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-6 text-center text-xs text-[#aab7b6]">© 2026 Oikia Select. Demo real estate experience.</div>
    </footer>
  );
}
