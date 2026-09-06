export type Property = {
  id: number;
  slug: string;
  title: string;
  location: string;
  area: string;
  type: "Διαμέρισμα" | "Μεζονέτα" | "Βίλα" | "Μονοκατοικία";
  transaction: "Πώληση" | "Ενοικίαση";
  price: number;
  bedrooms: number;
  bathrooms: number;
  size: number;
  year: number;
  energyClass: string;
  featured?: boolean;
  image: string;
  gallery: string[];
  description: string;
  features: string[];
};

export const properties: Property[] = [
  {
    id: 1,
    slug: "seaview-residence-glyfada",
    title: "Sea-view residence in Glyfada",
    location: "Γλυφάδα, Αθήνα",
    area: "Νότια Προάστια",
    type: "Μεζονέτα",
    transaction: "Πώληση",
    price: 780000,
    bedrooms: 3,
    bathrooms: 2,
    size: 168,
    year: 2022,
    energyClass: "A+",
    featured: true,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85",
    ],
    description: "Μια φωτεινή, σύγχρονη κατοικία με ανεμπόδιστη θέα στη θάλασσα, μεγάλους εξωτερικούς χώρους και ήσυχη θέση κοντά στο κέντρο της Γλυφάδας.",
    features: ["Θέα θάλασσα", "Ιδιωτικό parking", "Ενδοδαπέδια θέρμανση", "Smart home", "Αποθήκη"],
  },
  {
    id: 2,
    slug: "minimal-loft-kolonaki",
    title: "Minimal loft in Kolonaki",
    location: "Κολωνάκι, Αθήνα",
    area: "Κέντρο Αθήνας",
    type: "Διαμέρισμα",
    transaction: "Ενοικίαση",
    price: 1850,
    bedrooms: 2,
    bathrooms: 2,
    size: 112,
    year: 2021,
    energyClass: "A",
    featured: true,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    ],
    description: "Πλήρως ανακαινισμένο loft με διακριτική πολυτέλεια, φυσικά υλικά και άμεση πρόσβαση στην πολιτιστική και εμπορική ζωή του Κολωνακίου.",
    features: ["Πλήρως επιπλωμένο", "Ασανσέρ", "Κλιματισμός", "Συναγερμός", "Concierge"],
  },
  {
    id: 3,
    slug: "garden-villa-kifisia",
    title: "Garden villa in Kifisia",
    location: "Κηφισιά, Αθήνα",
    area: "Βόρεια Προάστια",
    type: "Βίλα",
    transaction: "Πώληση",
    price: 1250000,
    bedrooms: 5,
    bathrooms: 4,
    size: 310,
    year: 2019,
    energyClass: "A+",
    featured: true,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1400&q=85",
    ],
    description: "Ανεξάρτητη βίλα με ώριμο κήπο, πισίνα και γενναιόδωρους χώρους, σχεδιασμένη για οικογένειες που αναζητούν ιδιωτικότητα και ποιότητα ζωής.",
    features: ["Πισίνα", "Κήπος 520 τ.μ.", "Playroom", "3 θέσεις parking", "Ξενώνας"],
  },
  {
    id: 4,
    slug: "urban-apartment-pangrati",
    title: "Urban apartment in Pangrati",
    location: "Παγκράτι, Αθήνα",
    area: "Κέντρο Αθήνας",
    type: "Διαμέρισμα",
    transaction: "Πώληση",
    price: 295000,
    bedrooms: 2,
    bathrooms: 1,
    size: 88,
    year: 2020,
    energyClass: "B+",
    image: "https://images.unsplash.com/photo-1600566753151-8f6f3c7b6b74?auto=format&fit=crop&w=1400&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1400&q=85",
    ],
    description: "Κομψό διαμέρισμα σε μία από τις πιο ζωντανές γειτονιές της Αθήνας, ιδανικό για σύγχρονη κατοικία ή αστική επένδυση.",
    features: ["Ανακαινισμένο", "Μπαλκόνι", "Ασανσέρ", "Φυσικό αέριο", "Κοντά σε μετρό"],
  },
  {
    id: 5,
    slug: "waterfront-home-paros",
    title: "Waterfront home in Paros",
    location: "Νάουσα, Πάρος",
    area: "Κυκλάδες",
    type: "Μονοκατοικία",
    transaction: "Πώληση",
    price: 980000,
    bedrooms: 4,
    bathrooms: 3,
    size: 205,
    year: 2018,
    energyClass: "A",
    image: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1400&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&w=1400&q=85",
    ],
    description: "Κυκλαδίτικη κατοικία λίγα βήματα από τη θάλασσα, όπου η παραδοσιακή αρχιτεκτονική συναντά τις καθαρές σύγχρονες γραμμές.",
    features: ["Πρόσβαση στη θάλασσα", "Infinity pool", "Ξενώνας", "Πέργκολα", "Ηλιακό σύστημα"],
  },
  {
    id: 6,
    slug: "city-view-thessaloniki",
    title: "City-view apartment in Thessaloniki",
    location: "Άνω Πόλη, Θεσσαλονίκη",
    area: "Θεσσαλονίκη",
    type: "Διαμέρισμα",
    transaction: "Ενοικίαση",
    price: 1100,
    bedrooms: 2,
    bathrooms: 1,
    size: 96,
    year: 2017,
    energyClass: "B+",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1400&q=85",
    ],
    description: "Φωτεινή κατοικία με πανοραμική θέα στην πόλη και τον Θερμαϊκό, σε ήσυχο σημείο με άμεση πρόσβαση στο ιστορικό κέντρο.",
    features: ["Πανοραμική θέα", "Τζάκι", "Επιπλωμένο", "Αυτόνομη θέρμανση", "Αποθήκη"],
  },
  {
    id: 7,
    slug: "family-maisonette-chalandri",
    title: "Family maisonette in Chalandri",
    location: "Χαλάνδρι, Αθήνα",
    area: "Βόρεια Προάστια",
    type: "Μεζονέτα",
    transaction: "Πώληση",
    price: 545000,
    bedrooms: 4,
    bathrooms: 3,
    size: 186,
    year: 2016,
    energyClass: "B+",
    image: "https://images.unsplash.com/photo-1600607688960-e095ff83135c?auto=format&fit=crop&w=1400&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600566752229-250ed79470f8?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600566752734-2a0cd312aa84?auto=format&fit=crop&w=1400&q=85",
    ],
    description: "Άνετη μεζονέτα με ξεκάθαρη λειτουργική διαρρύθμιση, ιδανική για οικογενειακή καθημερινότητα κοντά σε σχολεία και αγορά.",
    features: ["Ιδιωτικός κήπος", "Parking", "Playroom", "Τζάκι", "Αυτόνομη θέρμανση"],
  },
  {
    id: 8,
    slug: "penthouse-piraeus",
    title: "Penthouse near the Marina",
    location: "Πασαλιμάνι, Πειραιάς",
    area: "Πειραιάς",
    type: "Διαμέρισμα",
    transaction: "Ενοικίαση",
    price: 1450,
    bedrooms: 3,
    bathrooms: 2,
    size: 125,
    year: 2023,
    energyClass: "A+",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600607688066-890987f18a86?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600607688961-4e3f57b4360f?auto=format&fit=crop&w=1400&q=85",
    ],
    description: "Νεόδμητο ρετιρέ με μεγάλη βεράντα, ανοιχτό ορίζοντα και άμεση πρόσβαση στη μαρίνα και τις συγκοινωνίες.",
    features: ["Μεγάλη βεράντα", "Θέα μαρίνα", "Parking", "Αντλία θερμότητας", "Smart home"],
  },
];

export const formatPrice = (property: Property) =>
  new Intl.NumberFormat("el-GR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(property.price) + (property.transaction === "Ενοικίαση" ? "/μήνα" : "");

export const findProperty = (slug: string) => properties.find((property) => property.slug === slug);
