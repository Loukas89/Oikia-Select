import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Επικοινωνία",
  description:
    "Επικοινώνησε με την Oikia Select για αναζήτηση ή ανάθεση ακινήτου.",
};

const contactDetails = [
  {
    icon: Phone,
    text: "+30 210 000 0000",
    href: "tel:+302100000000",
  },
  {
    icon: Mail,
    text: "hello@oikiaselect.gr",
    href: "mailto:hello@oikiaselect.gr",
  },
  {
    icon: MapPin,
    text: "Αθήνα, Ελλάδα",
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <section>
          <p className="section-kicker">Let&apos;s talk</p>

          <h1 className="mt-4 font-serif text-5xl text-[#102f35] sm:text-6xl">
            Η επόμενη επιλογή σου ξεκινά με μια συζήτηση.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#607277]">
            Αναζητάς ακίνητο ή θέλεις να αναθέσεις το δικό σου; Πες μας τι
            χρειάζεσαι.
          </p>

          <address className="mt-10 grid gap-5 not-italic">
            {contactDetails.map(({ icon: ContactIcon, text, href }) => (
              <div key={text} className="flex items-center gap-4">
                <span className="grid size-11 place-items-center rounded-full bg-[#efe8dc] text-[#9a7247]">
                  <ContactIcon aria-hidden="true" className="size-5" />
                </span>

                {href ? (
                  <a
                    href={href}
                    className="text-[#173b3f] transition-colors hover:text-[#9a7247]"
                  >
                    {text}
                  </a>
                ) : (
                  <span className="text-[#173b3f]">{text}</span>
                )}
              </div>
            ))}
          </address>
        </section>

        <section
          aria-labelledby="contact-form-title"
          className="rounded-[2.5rem] border border-[#173b3f]/10 bg-[#efe8dc] p-6 sm:p-10"
        >
          <h2
            id="contact-form-title"
            className="font-serif text-3xl text-[#173b3f]"
          >
            Στείλε μας μήνυμα
          </h2>

          <p className="mt-2 text-sm text-[#607277]">
            Συνήθως απαντάμε μέσα σε μία εργάσιμη ημέρα.
          </p>

          <div className="mt-8">
            <ContactForm />
          </div>
        </section>
      </div>
    </main>
  );
}