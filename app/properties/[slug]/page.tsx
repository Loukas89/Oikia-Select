import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Bath,
  BedDouble,
  CalendarDays,
  ChevronLeft,
  Gauge,
  MapPin,
  Maximize2,
} from "lucide-react";
import { PropertyContactForm } from "@/components/property-contact-form";
import { Badge } from "@/components/ui/badge";
import { findProperty, formatPrice, properties } from "@/lib/properties";

export function generateStaticParams() {
  return properties.map((property) => ({
    slug: property.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const property = findProperty(slug);

  if (!property) {
    return {};
  }

  return {
    title: property.title,
    description: property.description,
    openGraph: {
      title: property.title,
      description: property.description,
      images: [
        {
          url: property.image,
          alt: property.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: property.title,
      description: property.description,
      images: [property.image],
    },
  };
}

export default async function PropertyDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = findProperty(slug);

  if (!property) {
    notFound();
  }

  const propertyDetails = [
    {
      icon: BedDouble,
      label: `${property.bedrooms} υπνοδ.`,
    },
    {
      icon: Bath,
      label: `${property.bathrooms} μπάνια`,
    },
    {
      icon: Maximize2,
      label: `${property.size} m²`,
    },
    {
      icon: CalendarDays,
      label: `${property.year}`,
    },
    {
      icon: Gauge,
      label: `Κλάση ${property.energyClass}`,
    },
  ];

  return (
    <main className="bg-[#f8f5ef] pb-24">
      <div className="mx-auto max-w-7xl px-5 pt-8 lg:px-8">
        <Link
          href="/properties"
          className="inline-flex items-center gap-1 text-sm text-[#607277] hover:text-[#173b3f]"
        >
          <ChevronLeft className="size-4" />
          Πίσω στα ακίνητα
        </Link>

        <div className="mt-6 grid gap-3 lg:grid-cols-[1.65fr_1fr]">
          <div className="relative h-[430px] overflow-hidden rounded-[2rem] lg:h-[620px]">
            <Image
              src={property.image}
              alt={property.title}
              fill
              priority
              sizes="(min-width: 1024px) 62vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 lg:h-[620px] lg:grid-cols-1 lg:grid-rows-2">
            <div className="relative aspect-4/3 overflow-hidden rounded-[1.5rem] lg:aspect-auto">
              <Image
                src={property.gallery[0]}
                alt={`Εσωτερικό του ${property.title}`}
                fill
                sizes="(min-width: 1024px) 38vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="relative aspect-4/3 overflow-hidden rounded-[1.5rem] lg:aspect-auto">
              <Image
                src={property.gallery[1]}
                alt={`Χώρος του ${property.title}`}
                fill
                sizes="(min-width: 1024px) 38vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_380px]">
          <div>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-[#173b3f] text-white">
                {property.transaction}
              </Badge>

              <Badge
                variant="outline"
                className="border-[#cba474] text-[#9a7247]"
              >
                {property.type}
              </Badge>
            </div>

            <h1 className="mt-5 font-serif text-4xl text-[#102f35] sm:text-5xl">
              {property.title}
            </h1>

            <p className="mt-3 flex items-center gap-2 text-[#607277]">
              <MapPin className="size-4 text-[#9a7247]" />
              {property.location}
            </p>

            <p className="mt-6 text-3xl font-semibold text-[#173b3f]">
              {formatPrice(property)}
            </p>

            <div className="mt-9 grid grid-cols-2 gap-3 border-y border-[#173b3f]/10 py-6 sm:grid-cols-5">
              {propertyDetails.map(({ icon: InfoIcon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-sm text-[#607277]"
                >
                  <InfoIcon className="size-4 text-[#9a7247]" />
                  {label}
                </div>
              ))}
            </div>

            <section className="mt-10">
              <h2 className="font-serif text-3xl text-[#102f35]">Η κατοικία</h2>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-[#607277]">
                {property.description}
              </p>
            </section>

            <section className="mt-10">
              <h2 className="font-serif text-3xl text-[#102f35]">
                Χαρακτηριστικά
              </h2>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {property.features.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-xl bg-[#efe8dc] px-4 py-3 text-sm text-[#173b3f]"
                  >
                    ✓ {feature}
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-10 overflow-hidden rounded-[2rem] bg-[#e4ded2]">
              <div className="grid min-h-72 place-items-center p-8 text-center">
                <div>
                  <MapPin className="mx-auto size-9 text-[#9a7247]" />

                  <h2 className="mt-4 font-serif text-2xl text-[#173b3f]">
                    {property.location}
                  </h2>

                  <p className="mt-2 text-sm text-[#607277]">
                    Η ακριβής τοποθεσία κοινοποιείται μετά την επιβεβαίωση
                    ενδιαφέροντος.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <aside className="h-fit rounded-[2rem] border border-[#173b3f]/10 bg-[#efe8dc] p-6 shadow-[0_20px_70px_rgba(16,47,53,0.08)] lg:sticky lg:top-28">
            <p className="section-kicker">Request details</p>

            <h2 className="mt-2 font-serif text-2xl text-[#173b3f]">
              Ενδιαφέρεσαι για αυτό το ακίνητο;
            </h2>

            <p className="mt-2 text-sm leading-6 text-[#607277]">
              Στείλε μας τα στοιχεία σου και θα επικοινωνήσουμε μαζί σου.
            </p>

            <div className="mt-6">
              <PropertyContactForm propertyTitle={property.title} />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
