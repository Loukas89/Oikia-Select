"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-[2rem] bg-[#e6eee9] p-10 text-center"
      >
        <p className="font-serif text-3xl text-[#173b3f]">
          Ευχαριστούμε.
        </p>

        <p className="mt-3 text-[#607277]">
          Λάβαμε το μήνυμά σου και θα επικοινωνήσουμε σύντομα.
        </p>

        <Button
          type="button"
          variant="outline"
          className="mt-6 rounded-full"
          onClick={() => setSent(false)}
        >
          Νέο μήνυμα
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          required
          name="firstName"
          autoComplete="given-name"
          placeholder="Όνομα"
          aria-label="Όνομα"
          className="h-12 rounded-xl bg-white"
        />

        <Input
          required
          name="lastName"
          autoComplete="family-name"
          placeholder="Επώνυμο"
          aria-label="Επώνυμο"
          className="h-12 rounded-xl bg-white"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          required
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Email"
          aria-label="Email"
          className="h-12 rounded-xl bg-white"
        />

        <Input
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="Τηλέφωνο"
          aria-label="Τηλέφωνο"
          className="h-12 rounded-xl bg-white"
        />
      </div>

      <NativeSelect
        required
        name="contactReason"
        defaultValue=""
        aria-label="Λόγος επικοινωνίας"
        className="h-12 w-full rounded-xl bg-white"
      >
        <NativeSelectOption value="" disabled>
          Λόγος επικοινωνίας
        </NativeSelectOption>

        <NativeSelectOption value="property-search">
          Αναζήτηση ακινήτου
        </NativeSelectOption>

        <NativeSelectOption value="property-listing">
          Ανάθεση ακινήτου
        </NativeSelectOption>

        <NativeSelectOption value="investment">
          Επενδυτικό ενδιαφέρον
        </NativeSelectOption>

        <NativeSelectOption value="other">
          Άλλο
        </NativeSelectOption>
      </NativeSelect>

      <Textarea
        required
        name="message"
        placeholder="Πες μας λίγα περισσότερα..."
        aria-label="Μήνυμα"
        className="min-h-40 rounded-xl bg-white"
      />

      <label className="flex items-start gap-3 text-xs leading-5 text-[#607277]">
        <input
          required
          name="privacyConsent"
          type="checkbox"
          className="mt-1 accent-[#173b3f]"
        />

        <span>
          Συμφωνώ με την επεξεργασία των στοιχείων μου αποκλειστικά για την
          απάντηση στο αίτημά μου.
        </span>
      </label>

      <Button
        type="submit"
        className="mt-2 h-12 rounded-full bg-[#173b3f] text-white hover:bg-[#244e52]"
      >
        Αποστολή μηνύματος
      </Button>
    </form>
  );
}