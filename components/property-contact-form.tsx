"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function PropertyContactForm({
  propertyTitle,
}: {
  propertyTitle: string;
}) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-2xl bg-[#e7eee8] p-5 text-sm leading-6 text-[#173b3f]">
        <strong className="block">Το αίτημά σου καταχωρίστηκε.</strong>
        <span className="mt-1 block">
          Θα επικοινωνήσουμε μαζί σου για το «{propertyTitle}».
        </span>
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
      className="grid gap-3"
    >
      <Input
        required
        name="fullName"
        autoComplete="name"
        placeholder="Ονοματεπώνυμο"
        aria-label="Ονοματεπώνυμο"
        className="h-11 rounded-xl bg-white"
      />

      <Input
        required
        name="email"
        type="email"
        autoComplete="email"
        placeholder="Email"
        aria-label="Email"
        className="h-11 rounded-xl bg-white"
      />

      <Input
        name="phone"
        type="tel"
        autoComplete="tel"
        placeholder="Τηλέφωνο"
        aria-label="Τηλέφωνο"
        className="h-11 rounded-xl bg-white"
      />

      <Textarea
        required
        name="message"
        defaultValue={`Ενδιαφέρομαι για το ακίνητο: ${propertyTitle}`}
        aria-label="Μήνυμα"
        className="min-h-28 rounded-xl bg-white"
      />

      <Button
        type="submit"
        className="mt-2 h-11 rounded-full bg-[#173b3f] text-white hover:bg-[#244e52]"
      >
        Αποστολή ενδιαφέροντος
        <Send />
      </Button>

      <p className="text-[11px] leading-5 text-[#718084]">
        Υποβάλλοντας τη φόρμα συμφωνείς να χρησιμοποιήσουμε τα στοιχεία σου
        αποκλειστικά για την επικοινωνία σχετικά με το ακίνητο.
      </p>
    </form>
  );
}
