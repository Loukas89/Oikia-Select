"use client";

import Link from "next/link";
import Image from "next/image";
import { Bath, BedDouble, Heart, Maximize2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Property, formatPrice } from "@/lib/properties";
import { useFavorites } from "@/hooks/use-favorites";

export function PropertyCard({ property }: { property: Property }) {
  const { favorites, toggleFavorite } = useFavorites();
  const saved = favorites.includes(property.id);

  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-[#173b3f]/10 bg-white shadow-[0_18px_60px_rgba(16,47,53,0.08)] transition-transform duration-500 hover:-translate-y-1">
      <div className="relative aspect-4/3 overflow-hidden bg-[#d9d0c2]">
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
          <Badge className="rounded-full bg-[#f8f5ef]/95 px-3 py-1 text-[#173b3f] shadow-sm hover:bg-[#f8f5ef]">
            {property.transaction}
          </Badge>
          <Button
            type="button"
            size="icon"
            variant="secondary"
            onClick={() => toggleFavorite(property.id)}
            aria-pressed={saved}
            aria-label={
              saved ? "Αφαίρεση από αγαπημένα" : "Προσθήκη στα αγαπημένα"
            }
            className="rounded-full bg-[#f8f5ef]/95 text-[#173b3f] shadow-sm hover:bg-white"
          >
            <Heart className={saved ? "fill-[#a35b46] text-[#a35b46]" : ""} />
          </Button>
        </div>
      </div>
      <div className="p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9a7247]">
          {property.location}
        </p>
        <h3 className="mt-2 font-serif text-2xl leading-tight text-[#102f35]">
          {property.title}
        </h3>
        <p className="mt-4 text-xl font-semibold text-[#173b3f]">
          {formatPrice(property)}
        </p>
        <div className="mt-5 flex items-center gap-5 border-t border-[#173b3f]/10 pt-4 text-sm text-[#607277]">
          <span className="flex items-center gap-1.5">
            <BedDouble className="size-4" />
            {property.bedrooms}
          </span>
          <span className="flex items-center gap-1.5">
            <Bath className="size-4" />
            {property.bathrooms}
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize2 className="size-4" />
            {property.size} m²
          </span>
        </div>
        <Button
          asChild
          variant="link"
          className="mt-4 h-auto px-0 text-[#173b3f] underline-offset-4"
        >
          <Link href={`/properties/${property.slug}`}>Προβολή ακινήτου →</Link>
        </Button>
      </div>
    </article>
  );
}
