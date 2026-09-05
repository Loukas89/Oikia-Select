import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PropertyCard } from "@/components/property-card";
import { properties } from "@/lib/properties";

export default function Home() {
  const featured = properties.filter((property) => property.featured);
  return (
    <main>
      <section className="relative isolate min-h-760px overflow-hidden bg-[#102f35] text-white lg:min-h-820px">
        <Image
          src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=2200&q=90"
          alt="Σύγχρονη κατοικία με κήπο"
          fill
          preload
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,35,40,.93)_0%,rgba(8,35,40,.78)_45%,rgba(8,35,40,.18)_100%)]" />
        <div className="mx-auto flex min-h-760px max-w-7xl items-center px-5 py-24 lg:min-h-820px lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#e3c298]">
              <Sparkles className="size-4" /> Selected properties. Exceptional
              living.
            </p>
            <h1 className="font-serif text-5xl leading-[0.98] tracking-tight sm:text-6xl lg:text-[5.5rem]">
              Το σωστό σπίτι δεν είναι απλώς μια διεύθυνση.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#dce5e3] sm:text-xl">
              Ανακάλυψε προσεκτικά επιλεγμένα ακίνητα που ταιριάζουν στον τρόπο
              ζωής, τις ανάγκες και το επόμενο κεφάλαιό σου.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-13 rounded-full bg-[#d1aa7a] px-7 text-[#102f35] hover:bg-[#e3c298]"
              >
                <Link href="/properties">
                  Εξερεύνησε ακίνητα <ArrowRight />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-13 rounded-full border-white/30 bg-white/8 px-7 text-white backdrop-blur hover:bg-white hover:text-[#102f35]"
              >
                <Link href="/contact">Ανάθεση ακινήτου</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 border-t border-white/15 bg-[#102f35]/72 backdrop-blur-md">
          <div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-white/15 px-5 py-5 text-center lg:px-8">
            <div>
              <strong className="block font-serif text-2xl sm:text-3xl">
                8
              </strong>
              <span className="text-[10px] uppercase tracking-[0.14em] text-[#b8c8c5] sm:text-xs">
                Selected homes
              </span>
            </div>
            <div>
              <strong className="block font-serif text-2xl sm:text-3xl">
                6
              </strong>
              <span className="text-[10px] uppercase tracking-[0.14em] text-[#b8c8c5] sm:text-xs">
                Prime areas
              </span>
            </div>
            <div>
              <strong className="block font-serif text-2xl sm:text-3xl">
                100%
              </strong>
              <span className="text-[10px] uppercase tracking-[0.14em] text-[#b8c8c5] sm:text-xs">
                Clear details
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5ef] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-kicker">Featured collection</p>
              <h2 className="mt-3 max-w-2xl font-serif text-4xl tracking-tight text-[#102f35] sm:text-5xl">
                Κατοικίες που αξίζει να ανακαλύψεις.
              </h2>
            </div>
            <Button
              asChild
              variant="link"
              className="h-auto justify-start px-0 text-[#9a7247]"
            >
              <Link href="/properties">
                Δες όλα τα ακίνητα <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {featured.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      <section id="areas" className="bg-[#efe8dc] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
            <div>
              <p className="section-kicker">Location stories</p>
              <h2 className="mt-3 font-serif text-4xl text-[#102f35] sm:text-5xl">
                Βρες τον τόπο που σου ταιριάζει.
              </h2>
              <p className="mt-5 max-w-lg leading-7 text-[#607277]">
                Από τον αστικό παλμό της Αθήνας μέχρι την ηρεμία των Κυκλάδων,
                κάθε περιοχή έχει τον δικό της ρυθμό.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Νότια Προάστια", "Θάλασσα, σύγχρονη ζωή, άμεση πρόσβαση"],
                [
                  "Βόρεια Προάστια",
                  "Πράσινο, ιδιωτικότητα, οικογενειακή άνεση",
                ],
                ["Κέντρο Αθήνας", "Πολιτισμός, γαστρονομία, αστική ενέργεια"],
                ["Κυκλάδες", "Φως, αρχιτεκτονική, αυθεντική απόδραση"],
              ].map(([name, copy], index) => (
                <Link
                  key={name}
                  href="/properties"
                  className="group rounded-3xl border border-[#173b3f]/10 bg-[#f8f5ef] p-6 transition-colors hover:bg-[#173b3f] hover:text-white"
                >
                  <span className="text-xs text-[#9a7247]">0{index + 1}</span>
                  <h3 className="mt-8 font-serif text-2xl">{name}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#607277] transition-colors group-hover:text-[#dce5e3]">
                    {copy}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5ef] px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-540px overflow-hidden rounded-[2.5rem]">
            <Image
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85"
              alt="Εσωτερικό επιλεγμένης κατοικίας"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-[#f8f5ef]/94 p-5 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.16em] text-[#9a7247]">
                The Oikia standard
              </p>
              <p className="mt-1 font-serif text-xl text-[#173b3f]">
                Λιγότερος θόρυβος. Καλύτερες επιλογές.
              </p>
            </div>
          </div>
          <div>
            <p className="section-kicker">Why Oikia Select</p>
            <h2 className="mt-3 font-serif text-4xl text-[#102f35] sm:text-5xl">
              Αναζήτηση με ποιότητα και καθαρή πληροφόρηση.
            </h2>
            <div className="mt-9 grid gap-7">
              {[
                [
                  CheckCircle2,
                  "Επιλεγμένες καταχωρίσεις",
                  "Κάθε ακίνητο παρουσιάζεται με ουσιαστικές πληροφορίες και ξεκάθαρα χαρακτηριστικά.",
                ],
                [
                  MapPin,
                  "Περιοχή που ταιριάζει στη ζωή σου",
                  "Δεν βλέπεις μόνο τετραγωνικά· καταλαβαίνεις πώς είναι να ζεις εκεί.",
                ],
                [
                  ShieldCheck,
                  "Εμπιστοσύνη σε κάθε βήμα",
                  "Σαφής κατάσταση διαθεσιμότητας και άμεση επικοινωνία χωρίς περιττά εμπόδια.",
                ],
              ].map(([Icon, title, copy]) => {
                const FeatureIcon = Icon as typeof Building2;
                return (
                  <div key={title as string} className="flex gap-4">
                    <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#efe8dc] text-[#9a7247]">
                      <FeatureIcon className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-[#173b3f]">
                        {title as string}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-[#607277]">
                        {copy as string}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#cba474] px-5 py-20 text-[#102f35] lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em]">
              Have a property?
            </p>
            <h2 className="mt-3 max-w-3xl font-serif text-4xl sm:text-5xl">
              Ας του δώσουμε την παρουσίαση που αξίζει.
            </h2>
          </div>
          <Button
            asChild
            size="lg"
            className="h-13 rounded-full bg-[#102f35] px-7 text-white hover:bg-[#244e52]"
          >
            <Link href="/contact">
              Μίλησε μαζί μας <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
