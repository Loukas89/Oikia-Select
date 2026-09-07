import type { Metadata } from "next";
import { PropertyExplorer } from "@/components/property-explorer";

export const metadata: Metadata = { title: "Ακίνητα", description: "Αναζήτησε επιλεγμένα ακίνητα προς πώληση και ενοικίαση." };

export default function PropertiesPage() {
  return <main className="min-h-screen bg-[#f8f5ef] px-5 py-16 lg:px-8 lg:py-20"><div className="mx-auto max-w-7xl">
    <p className="section-kicker">Property collection</p><div className="mt-3 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div><h1 className="font-serif text-5xl tracking-tight text-[#102f35] sm:text-6xl">Ακίνητα για τη ζωή που θέλεις.</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-[#607277]">Φίλτραρε ανά περιοχή, τύπο και ανάγκες. Κάθε αποτέλεσμα έχει επιλεγεί για την ποιότητα και τη σαφήνειά του.</p></div><p className="max-w-xs border-l-2 border-[#cba474] pl-4 text-sm leading-6 text-[#607277]">Οι τιμές και τα ακίνητα είναι ενδεικτικά δεδομένα του demo.</p></div>
    <div className="mt-12"><PropertyExplorer /></div>
  </div></main>;
}
