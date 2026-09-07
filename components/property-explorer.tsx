"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { PropertyCard } from "@/components/property-card";
import { properties } from "@/lib/properties";

export function PropertyExplorer() {
  const [query, setQuery] = useState("");
  const [transaction, setTransaction] = useState("Όλα");
  const [type, setType] = useState("Όλα");
  const [bedrooms, setBedrooms] = useState("0");
  const [sort, setSort] = useState("featured");

  const filtered = useMemo(() => {
    const result = properties.filter((property) => {
      const matchesQuery = `${property.title} ${property.location} ${property.area}`.toLocaleLowerCase("el").includes(query.toLocaleLowerCase("el"));
      return matchesQuery && (transaction === "Όλα" || property.transaction === transaction) && (type === "Όλα" || property.type === type) && property.bedrooms >= Number(bedrooms);
    });
    return [...result].sort((a, b) => sort === "price-low" ? a.price - b.price : sort === "price-high" ? b.price - a.price : Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
  }, [query, transaction, type, bedrooms, sort]);

  return (
    <>
      <div className="rounded-1.5rem border border-[#173b3f]/10 bg-white p-4 shadow-[0_20px_70px_rgba(16,47,53,0.08)] md:p-5">
        <div className="grid gap-3 lg:grid-cols-[1.5fr_1fr_1fr_0.8fr_1fr]">
          <label className="relative block"><span className="sr-only">Αναζήτηση περιοχής</span><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#9a7247]" /><Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Περιοχή ή ακίνητο" className="h-12 rounded-xl border-[#d7cbbb] bg-[#fcfaf6] pl-10" /></label>
          <label><span className="sr-only">Συναλλαγή</span><NativeSelect value={transaction} onChange={(e) => setTransaction(e.target.value)} className="h-12 w-full rounded-xl border-[#d7cbbb] bg-[#fcfaf6]"><NativeSelectOption>Όλα</NativeSelectOption><NativeSelectOption>Πώληση</NativeSelectOption><NativeSelectOption>Ενοικίαση</NativeSelectOption></NativeSelect></label>
          <label><span className="sr-only">Τύπος</span><NativeSelect value={type} onChange={(e) => setType(e.target.value)} className="h-12 w-full rounded-xl border-[#d7cbbb] bg-[#fcfaf6]"><NativeSelectOption>Όλα</NativeSelectOption><NativeSelectOption>Διαμέρισμα</NativeSelectOption><NativeSelectOption>Μεζονέτα</NativeSelectOption><NativeSelectOption>Βίλα</NativeSelectOption><NativeSelectOption>Μονοκατοικία</NativeSelectOption></NativeSelect></label>
          <label><span className="sr-only">Ελάχιστα υπνοδωμάτια</span><NativeSelect value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} className="h-12 w-full rounded-xl border-[#d7cbbb] bg-[#fcfaf6]"><NativeSelectOption value="0">Υπνοδωμάτια</NativeSelectOption><NativeSelectOption value="1">1+</NativeSelectOption><NativeSelectOption value="2">2+</NativeSelectOption><NativeSelectOption value="3">3+</NativeSelectOption><NativeSelectOption value="4">4+</NativeSelectOption></NativeSelect></label>
          <label><span className="sr-only">Ταξινόμηση</span><NativeSelect value={sort} onChange={(e) => setSort(e.target.value)} className="h-12 w-full rounded-xl border-[#d7cbbb] bg-[#fcfaf6]"><NativeSelectOption value="featured">Προτεινόμενα</NativeSelectOption><NativeSelectOption value="price-low">Τιμή: χαμηλότερη</NativeSelectOption><NativeSelectOption value="price-high">Τιμή: υψηλότερη</NativeSelectOption></NativeSelect></label>
        </div>
      </div>
      <div className="mt-8 flex items-center justify-between"><p className="text-sm text-[#607277]"><strong className="text-[#173b3f]">{filtered.length}</strong> επιλεγμένα ακίνητα</p><span className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-[#9a7247]"><SlidersHorizontal className="size-4" /> Smart filters</span></div>
      {filtered.length ? <div className="mt-6 grid gap-7 md:grid-cols-2 xl:grid-cols-3">{filtered.map((property) => <PropertyCard key={property.id} property={property} />)}</div> : <div className="mt-10 rounded-3xl border border-dashed border-[#9a7247]/40 bg-[#f1eadf] p-12 text-center"><p className="font-serif text-2xl text-[#173b3f]">Δεν βρέθηκαν ακίνητα</p><p className="mt-2 text-sm text-[#607277]">Δοκίμασε διαφορετική περιοχή ή λιγότερα φίλτρα.</p></div>}
    </>
  );
}
