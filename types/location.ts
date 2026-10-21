export interface NearbyArea {
  name: string;
  slug: string;
}

export interface LocationData {
  id: string;
  name: string;
  slug: string;
  city: string;
  state: string;
  pincode: string;
  region: string;
  seoTitle: string;
  metaDescription: string;
  nearbyAreas: NearbyArea[];
  popularLayouts: string[];
  landmarkContext: string;
}

export interface KitchenDesignType {
  id: string;
  name: string;
  tagline: string;
  description: string;
  bestFor: string;
  features: string[];
  imageUrl: string;
}

export interface KitchenServiceType {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  icon: string;
}
