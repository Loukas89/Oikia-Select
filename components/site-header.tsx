"use client";

import Link from "next/link";
import { Heart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const nav = [
  ["Ακίνητα", "/properties"],
  ["Περιοχές", "/properties#areas"],
  ["Σχετικά", "/about"],
  ["Επικοινωνία", "/contact"],
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#173b3f]/10 bg-[#f8f5ef]/92 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="Oikia Select home">
          <span className="grid size-10 place-items-center rounded-full bg-[#173b3f] font-serif text-lg text-[#f6e8cf] transition-transform group-hover:-rotate-6">O</span>
          <span>
            <span className="block font-serif text-xl leading-none tracking-tight text-[#102f35]">Oikia Select</span>
            <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.28em] text-[#9a7247]">Curated living</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Κύρια πλοήγηση">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm font-medium text-[#315158] transition-colors hover:text-[#9a7247]">
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="icon" className="rounded-full text-[#173b3f] hover:bg-[#e8dfd0]">
            <Link href="/favorites" aria-label="Αγαπημένα ακίνητα"><Heart /></Link>
          </Button>
          <Button asChild className="hidden rounded-full bg-[#173b3f] px-5 text-[#fffaf0] hover:bg-[#244e52] sm:inline-flex">
            <Link href="/contact">Ανάθεση ακινήτου</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full md:hidden" aria-label="Άνοιγμα μενού"><Menu /></Button>
            </SheetTrigger>
            <SheetContent className="border-[#d7cbbb] bg-[#f8f5ef]">
              <SheetHeader><SheetTitle className="font-serif text-2xl text-[#173b3f]">Oikia Select</SheetTitle></SheetHeader>
              <nav className="flex flex-col px-5 py-6">
                {nav.map(([label, href]) => (
                  <SheetClose asChild key={href}><Link href={href} className="border-b border-[#173b3f]/10 py-4 text-lg text-[#173b3f]">{label}</Link></SheetClose>
                ))}
                <SheetClose asChild><Link href="/favorites" className="border-b border-[#173b3f]/10 py-4 text-lg text-[#173b3f]">Αγαπημένα</Link></SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
