import { KitchenDesignType, KitchenServiceType } from "@/types/location";

export const SITE_CONFIG = {
  name: "Miiday Studio",
  tagline: "Architectural Modular Kitchens & Fine Cabinetry",
  baseUrl: "https://miidaystudio.online",
  phoneDisplay: "+91 94126 25853",
  phoneRaw: "+919412625853",
  telLink: "tel:+919412625853",
  googleBusinessProfileUrl: "https://share.google/xt2IIzKY92YvOEKQ5",
  serviceCity: "Mumbai",
  serviceState: "Maharashtra",
  serviceCountry: "India",
  primaryService: "Modular Kitchen Design, Manufacturing and Installation",
  warrantyYears: "10-Year Limited Warranty",
  completionTimeline: "35–45 Days Turnkey Delivery",
};

export const KITCHEN_DESIGNS: KitchenDesignType[] = [
  {
    id: "parallel-kitchen",
    name: "Parallel (Galley) Kitchen",
    tagline: "The gold standard for ergonomic culinary workflows",
    description:
      "Dual opposing countertops separating wet preparation and high-heat cooking zones. Optimizes narrow floorplans without sacrificing storage volume or appliance integration.",
    bestFor: "Mumbai 2 & 3 BHK apartments, narrow floor plans, high-efficiency daily cooking",
    features: [
      "Dedicated wet & dry counter segregation",
      "Ergonomic golden work triangle",
      "Floor-to-ceiling pantry pullouts",
      "Anti-humidity marine core boards",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "l-shaped-kitchen",
    name: "L-Shaped Modular Kitchen",
    tagline: "Fluid, open layout maximizing corner utility",
    description:
      "Utilizes two adjacent walls to create an intuitive cooking environment. Leaves ample breathing room for small breakfast counters or open living-dining integration.",
    bestFor: "Open-plan flats, compact corners, living-dining combo spaces",
    features: [
      "LeMans & Magic Corner hardware optimization",
      "Natural lighting flow from balcony windows",
      "Integrated microwave and convection oven wall",
      "Anti-fingerprint matte lacquer finishes",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "island-kitchen",
    name: "Grand Island Kitchen",
    tagline: "The architectural centerpiece of luxury entertaining",
    description:
      "A freestanding central counter that acts as culinary prep station, casual dining bar, and family gathering hub, paired with perimeter floor-to-ceiling cabinetry.",
    bestFor: "Spacious apartments, penthouses, modern duplexes across Bandra, Worli & Juhu",
    features: [
      "Monolithic quartz or sintered stone waterfall counters",
      "Concealed downdraft or architectural ceiling chimney",
      "Integrated wine chillers & cutlery drawers",
      "Fluted timber or metallic brass accents",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "u-shaped-kitchen",
    name: "U-Shaped Kitchen",
    tagline: "Maximum continuous countertop and total storage density",
    description:
      "Enveloping three perimeter walls for the passionate home chef. Provides maximum uninterrupted preparation surfaces, extensive tandem drawers, and overhead lift-ups.",
    bestFor: "Dedicated enclosed kitchen rooms, joint families, extensive appliance setups",
    features: [
      "Continuous work surfaces on three sides",
      "Double corner swivel carousels",
      "Under-cabinet temperature-tuned lighting",
      "Built-in dishwasher & double-bowl granite sinks",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "straight-kitchen",
    name: "Straight Line (Single Wall) Kitchen",
    tagline: "Pure minimalist elegance for space-conscious living",
    description:
      "All functional elements aligned along a single architectural wall. Engineered with vertical lofts and concealed drawer organizers to maximize usable floor area.",
    bestFor: "Studio apartments, compact urban flats, secondary pantries",
    features: [
      "Ultra-compact single wall footprint",
      "Integrated induction cooktops and slimline hoods",
      "Full-height vertical lofts for surplus storage",
      "Heavy-duty tandem soft-close drawer runners",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1200&q=80",
  },
];

export const SERVICES: KitchenServiceType[] = [
  {
    id: "design-consultation",
    title: "Architectural 3D Kitchen Design",
    subtitle: "Precision spatial planning tailored to your exact floorplan",
    description:
      "We begin with exact on-site laser measurements, studying your lifestyle, daily cooking habits, and appliance inventory to deliver photorealistic 3D renders and millimeter-accurate elevation drawings.",
    deliverables: [
      "Photorealistic 3D visualization renders",
      "Cabinet elevation & sectional layout blueprints",
      "Appliance fitment & MEP (electrical, plumbing) schematics",
      "Curated material, shutter, and countertop swatches",
    ],
    icon: "Ruler",
  },
  {
    id: "precision-manufacturing",
    title: "Precision Factory Manufacturing",
    subtitle: "German-grade machinery, zero on-site cutting dust",
    description:
      "All carcases, shutters, and drawer bodies are CNC cut, edge-banded with polyurethane (PUR) waterproof glue, and pre-drilled in controlled factory conditions for flawless structural squareness.",
    deliverables: [
      "Boiling Waterproof (BWP) Marine Ply or HDHMR cores",
      "Zero-joint laser edge-banding against moisture ingress",
      "Blum, Hettich, or Hafele certified soft-close hardware",
      "Rigorous pre-dispatch tolerance inspection",
    ],
    icon: "Factory",
  },
  {
    id: "turnkey-installation",
    title: "Clean Turnkey Installation",
    subtitle: "Mess-free, silent fitting in just 3 to 5 working days",
    description:
      "Because every module is pre-finished in our facility, our certified installation crew arrives with ready-to-assemble modules. No cutting sawdust, no noisy carpentry inside your home.",
    deliverables: [
      "Rapid on-site assembly within 3–5 working days",
      "Laser-leveled base and wall suspension brackets",
      "Sink cutout, hob cutouts, and countertop sealing",
      "100% post-installation deep cleaning & handover check",
    ],
    icon: "Wrench",
  },
  {
    id: "remodel-renovation",
    title: "Kitchen Remodeling & Retrofit",
    subtitle: "Transforming dated civil kitchens into modern modular systems",
    description:
      "Upgrading existing granite platforms and dated tile layouts into contemporary modular cabinetry, replacing damaged shutters, or retrofitting high-load tandem drawer systems into civil frameworks.",
    deliverables: [
      "Existing civil platform structural assessment",
      "Carcass retrofitting under granite slabs",
      "Countertop replacement with seamless quartz / sintered stone",
      "Appliance integration & chimney duct re-routing",
    ],
    icon: "RefreshCw",
  },
];

export const FAQS_HOMEPAGE = [
  {
    q: "How does the modular kitchen process work with Miiday Studio?",
    a: "Our process is structured in four clear stages: First, an on-site design consultation and laser measurement. Second, interactive 3D layout design and material finalization. Third, precision factory manufacturing using automated CNC edge-banding. Fourth, clean turnkey installation at your Mumbai residence within 3 to 5 days once dispatched.",
  },
  {
    q: "What materials do you use to withstand Mumbai's coastal humidity?",
    a: "We strictly recommend Boiling Waterproof (BWP IS:710) marine plywood or high-density water-resistant HDHMR boards treated against moisture and wood-borers. Shutters are edge-banded using waterproof PUR glue, and all hinges/drawer channels are corrosion-resistant stainless steel or zinc-plated European fittings.",
  },
  {
    q: "How long does a modular kitchen take from order to handover?",
    a: "The complete journey typically takes 35 to 45 calendar days. This includes 7 days for design sign-off and material curation, 25 to 30 days for factory precision manufacturing, and 3 to 5 days for on-site clean assembly.",
  },
  {
    q: "Can I customize the kitchen around my existing appliances?",
    a: "Yes. Every kitchen we manufacture is 100% custom-built. Before fabrication, our design team takes exact brand and model specifications of your chimney, hob, built-in oven, dishwasher, refrigerator, and water purifier to ensure seamless flush integration.",
  },
  {
    q: "What warranty and service support do you offer?",
    a: "We provide up to a 10-year limited structural warranty on cabinet carcasses and manufacturer lifetime warranties on German motion hardware (Blum / Hettich / Hafele). We also conduct a complimentary 6-month alignment tune-up.",
  },
];
