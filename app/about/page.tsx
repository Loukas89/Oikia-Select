import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Eye,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Σχετικά",
  description:
    "Γνώρισε τη φιλοσοφία της Oikia Select και τον τρόπο με τον οποίο επιλέγουμε και παρουσιάζουμε κάθε ακίνητο.",
};

const values = [
  {
    icon: Eye,
    title: "Καθαρή εικόνα",
    description:
      "Παρουσιάζουμε κάθε ακίνητο με ουσιαστικές πληροφορίες, χωρίς περιττό θόρυβο και ασαφείς υποσχέσεις.",
  },
  {
    icon: Compass,
    title: "Σωστή κατεύθυνση",
    description:
      "Δεν εξετάζουμε μόνο το ακίνητο, αλλά και το κατά πόσο η τοποθεσία και τα χαρακτηριστικά του ταιριάζουν στις ανάγκες σου.",
  },
  {
    icon: ShieldCheck,
    title: "Εμπιστοσύνη",
    description:
      "Δίνουμε έμφαση στη συνέπεια, στη διαφάνεια και στην άμεση επικοινωνία σε κάθε στάδιο της αναζήτησης.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Κατανοούμε",
    description:
      "Ξεκινάμε από τις πραγματικές ανάγκες, τις προτεραιότητες και τον τρόπο ζωής σου.",
  },
  {
    number: "02",
    title: "Επιλέγουμε",
    description:
      "Ξεχωρίζουμε ακίνητα με ουσιαστική αξία, ξεκάθαρα χαρακτηριστικά και κατάλληλη τοποθεσία.",
  },
  {
    number: "03",
    title: "Παρουσιάζουμε",
    description:
      "Οργανώνουμε την πληροφορία και την εικόνα κάθε κατοικίας ώστε να μπορείς να αξιολογήσεις σωστά την επιλογή σου.",
  },
  {
    number: "04",
    title: "Συνδεόμαστε",
    description:
      "Δημιουργούμε έναν άμεσο και απλό δρόμο επικοινωνίας για το επόμενο βήμα.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="bg-[#102f35] px-5 py-20 text-white lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="section-kicker text-[#e3c298]">About Oikia Select</p>

            <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Κάθε σωστή επιλογή ξεκινά από το τι έχει πραγματικά σημασία.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#dce5e3]">
              Η Oikia Select δημιουργήθηκε με μια απλή φιλοσοφία: λιγότερες,
              καλύτερα επιλεγμένες κατοικίες και περισσότερη ουσιαστική
              πληροφόρηση για κάθε ενδιαφερόμενο.
            </p>
          </div>

          <div className="relative min-h-[520px] overflow-hidden rounded-[2.5rem]">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=90"
              alt="Σύγχρονη κατοικία μέσα σε φυσικό τοπίο"
              fill
              preload
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#102f35]/55 via-transparent to-transparent" />

            <div className="absolute right-5 bottom-5 left-5 rounded-2xl border border-white/20 bg-[#102f35]/75 p-5 backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e3c298]">
                Our point of view
              </p>
              <p className="mt-2 font-serif text-xl text-white sm:text-2xl">
                Το ακίνητο είναι χώρος, τοποθεσία και τρόπος ζωής μαζί.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5ef] px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[560px] overflow-hidden rounded-[2.5rem]">
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85"
              alt="Φωτεινό και σύγχρονο εσωτερικό κατοικίας"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="section-kicker">Our philosophy</p>

            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#102f35] sm:text-5xl">
              Δεν παρουσιάζουμε απλώς ακίνητα. Δημιουργούμε καθαρές επιλογές.
            </h2>

            <div className="mt-7 space-y-5 text-base leading-7 text-[#607277]">
              <p>
                Η αναζήτηση κατοικίας μπορεί εύκολα να γίνει περίπλοκη. Πολλές
                καταχωρίσεις, ελλιπείς πληροφορίες και αμέτρητες επιλογές
                δυσκολεύουν μια ήδη σημαντική απόφαση.
              </p>

              <p>
                Στην Oikia Select οργανώνουμε την εμπειρία διαφορετικά. Δίνουμε
                προτεραιότητα στην ποιότητα της παρουσίασης, στη σαφήνεια των
                χαρακτηριστικών και στη σχέση του ακινήτου με την καθημερινή ζωή
                που μπορεί να προσφέρει.
              </p>

              <p>
                Στόχος μας είναι να μπορείς να καταλάβεις γρήγορα αν μια
                κατοικία αξίζει τον χρόνο και το ενδιαφέρον σου.
              </p>
            </div>

            <div className="mt-9 flex items-start gap-4 rounded-3xl bg-[#efe8dc] p-6">
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#cba474] text-[#102f35]">
                <HeartHandshake aria-hidden="true" className="size-5" />
              </span>

              <div>
                <h3 className="font-semibold text-[#173b3f]">
                  Ανθρώπινη προσέγγιση
                </h3>
                <p className="mt-1 text-sm leading-6 text-[#607277]">
                  Η τεχνολογία οργανώνει την αναζήτηση. Η επικοινωνία και η
                  κατανόηση οδηγούν στη σωστή απόφαση.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#efe8dc] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="section-kicker">What guides us</p>

            <h2 className="mt-4 font-serif text-4xl text-[#102f35] sm:text-5xl">
              Οι αρχές πίσω από κάθε παρουσίαση.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map(({ icon: ValueIcon, title, description }) => (
              <article
                key={title}
                className="rounded-[2rem] border border-[#173b3f]/10 bg-[#f8f5ef] p-7 sm:p-8"
              >
                <span className="grid size-12 place-items-center rounded-full bg-[#efe8dc] text-[#9a7247]">
                  <ValueIcon aria-hidden="true" className="size-5" />
                </span>

                <h3 className="mt-8 font-serif text-2xl text-[#173b3f]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#607277]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5ef] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="section-kicker">How we think</p>

              <h2 className="mt-4 font-serif text-4xl text-[#102f35] sm:text-5xl">
                Από την ανάγκη στη σωστή επιλογή.
              </h2>

              <p className="mt-5 max-w-lg leading-7 text-[#607277]">
                Μια απλή και οργανωμένη διαδικασία που κρατά την προσοχή σε όσα
                έχουν ουσιαστική αξία.
              </p>
            </div>

            <ol className="grid gap-4 sm:grid-cols-2">
              {processSteps.map(({ number, title, description }) => (
                <li
                  key={number}
                  className="rounded-3xl border border-[#173b3f]/10 p-6"
                >
                  <span className="text-xs font-semibold tracking-[0.16em] text-[#9a7247]">
                    {number}
                  </span>

                  <h3 className="mt-6 font-serif text-2xl text-[#173b3f]">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#607277]">
                    {description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-[#cba474] px-5 py-20 text-[#102f35] lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em]">
              Let&apos;s talk
            </p>

            <h2 className="mt-3 max-w-3xl font-serif text-4xl sm:text-5xl">
              Πες μας τι αναζητάς και ας ξεκινήσουμε από εκεί.
            </h2>
          </div>

          <Button
            asChild
            size="lg"
            className="h-13 rounded-full bg-[#102f35] px-7 text-white hover:bg-[#244e52]"
          >
            <Link href="/contact">
              Επικοινώνησε μαζί μας
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
