import rawLocations from "@/data/locations.json";
import { LocationData } from "@/types/location";

const locations: LocationData[] = rawLocations as LocationData[];

/**
 * Returns all active locations from the single source of truth.
 * Scalable to 700+ locations by appending to data/locations.json.
 */
export function getAllLocations(): LocationData[] {
  return locations;
}

/**
 * Looks up a location by its URL slug (e.g. 'modular-kitchen-in-andheri')
 */
export function getLocationBySlug(slug: string): LocationData | undefined {
  if (!slug) return undefined;
  const normalized = slug.trim().toLowerCase();
  return locations.find(
    (loc) =>
      loc.slug.toLowerCase() === normalized ||
      loc.slug.toLowerCase() === `modular-kitchen-in-${normalized}`
  );
}

/**
 * Looks up a location by ID
 */
export function getLocationById(id: string): LocationData | undefined {
  return locations.find((loc) => loc.id === id);
}

/**
 * Returns distinct regions represented in the locations catalog
 */
export function getAllRegions(): string[] {
  const regions = new Set<string>();
  for (const loc of locations) {
    if (loc.region) {
      regions.add(loc.region);
    }
  }
  return Array.from(regions).sort();
}

/**
 * Group locations by first letter for alphabetical directory index
 */
export function getLocationsByAlphabet(): Record<string, LocationData[]> {
  const grouped: Record<string, LocationData[]> = {};
  const sorted = [...locations].sort((a, b) => a.name.localeCompare(b.name));

  for (const loc of sorted) {
    const firstLetter = loc.name.charAt(0).toUpperCase();
    if (!grouped[firstLetter]) {
      grouped[firstLetter] = [];
    }
    grouped[firstLetter].push(loc);
  }

  return grouped;
}

/**
 * Filter locations by search query (name, region, pincode)
 */
export function filterLocations(query: string, regionFilter?: string): LocationData[] {
  const q = query.trim().toLowerCase();
  return locations.filter((loc) => {
    const matchesRegion =
      !regionFilter || regionFilter === "All" || loc.region === regionFilter;
    if (!matchesRegion) return false;
    if (!q) return true;

    return (
      loc.name.toLowerCase().includes(q) ||
      loc.region.toLowerCase().includes(q) ||
      loc.pincode.includes(q) ||
      loc.city.toLowerCase().includes(q)
    );
  });
}
