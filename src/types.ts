export interface FloorPlan {
  id: string;
  name: string;
  size: string; // e.g. "68 m²"
  bedrooms: string;
  suites: string;
  parking: string;
  description: string;
  highlights: string[];
  image: string;
}

export interface Amenity {
  name: string;
  category: 'lazer' | 'bem-estar' | 'conveniencia' | 'seguranca';
  icon: string; // lucide icon identifier
  description?: string;
}

export interface LocationHighlight {
  title: string;
  time: string;
  type: 'metro' | 'parque' | 'shopping' | 'gastronomia' | 'escola';
}

export interface Development {
  id: 'mooca' | 'tatuape' | 'vila-ema';
  name: string;
  tagline: string;
  neighborhood: string;
  city: string;
  formUrl: string;
  status: 'Lançamento' | 'Breve Lançamento' | 'Obras Aceleradas' | 'Últimas Unidades';
  badgeColor: string;
  priceStartingFrom: string;
  estimatedDelivery: string;
  heroImage: string;
  galleryImages: {
    url: string;
    caption: string;
    category: 'fachada' | 'interiores' | 'lazer' | 'implantacao';
  }[];
  overview: {
    areaRange: string;
    bedrooms: string;
    suites: string;
    bathrooms: string;
    parkingSpots: string;
    towers: string;
    floors: string;
    unitsTotal: string;
  };
  description: string;
  highlights: string[];
  amenities: Amenity[];
  floorPlans: FloorPlan[];
  location: {
    address: string;
    neighborhoodDescription: string;
    pointsOfInterest: LocationHighlight[];
    mapQuery: string;
  };
  differentials: string[];
  themeColor: {
    primary: string;
    secondary: string;
    accent: string;
    lightBg: string;
    border: string;
    textAccent: string;
  };
}

export interface FilterState {
  neighborhood: string;
  bedrooms: string;
  minSize: number;
  maxBudget: number;
}
