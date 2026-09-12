"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { PropertyCard } from "@/components/property-card";
import { Button } from "@/components/ui/button";
import { useFavorites } from "@/hooks/use-favorites";
import { properties } from "@/lib/properties";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  const savedProperties = properties.filter((property) =>
    favorites.includes(property.id),
  );

  return (
    <main className="min-h-[70vh] bg-[#f8f5ef] px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="section-kicker">Your shortlist</p>

        <h1 className="mt-3 font-serif text-5xl text-[#102f35]">
          Αγαπημένα ακίνητα
        </h1>

        <p className="mt-4 text-[#607277]">
          Η προσωπική σου συλλογή αποθηκεύεται σε αυτή τη συσκευή.
        </p>

        {savedProperties.length > 0 ? (
          <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {savedProperties.map((property, index) => (
              <PropertyCard
                key={property.id}
                property={property}
                eager={index === 0}
              />
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-[2rem] border border-dashed border-[#9a7247]/40 bg-[#efe8dc] p-12 text-center">
            <Heart className="mx-auto size-10 text-[#9a7247]" />

            <h2 className="mt-4 font-serif text-2xl text-[#173b3f]">
              Δεν έχεις αποθηκεύσει ακίνητα ακόμη.
            </h2>

            <p className="mt-2 text-sm text-[#607277]">
              Πάτησε την καρδιά σε ένα ακίνητο για να το προσθέσεις εδώ.
            </p>

            <Button asChild className="mt-6 rounded-full">
              <Link href="/properties">Ανακάλυψε ακίνητα</Link>
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}