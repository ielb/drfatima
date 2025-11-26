export type Language = 'fr' | 'ar';

export interface ServiceItem {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
}

export type GalleryCategory = 'all' | 'anti_age' | 'acne' | 'hair' | 'laser';

export interface GalleryItem {
  id: string;
  category: GalleryCategory;
  title: string;
  beforeUrl: string;
  afterUrl: string;
}

export interface TranslationData {
  nav: {
    home: string;
    services: string;
    gallery: string;
    about: string;
    contact: string;
    book: string;
  };
  hero: {
    subtitle: string;
    title: string;
    cta: string;
  };
  about: {
    title: string;
    subtitle: string;
    bio: string;
    philosophy_title: string;
    philosophy: string;
    technology_title: string;
    technology: string;
    qualifications: string[];
  };
  services: {
    title: string;
    items: ServiceItem[];
  };
  gallery: {
    title: string;
    subtitle: string;
    filters: {
      all: string;
      anti_age: string;
      acne: string;
      hair: string;
      laser: string;
    };
    labels: {
      before: string;
      after: string;
    };
  };
  trust: {
    rating: string;
    review_count: string;
    quote: string;
  };
  info: {
    title: string;
    address_label: string;
    hours_label: string;
    phone_label: string;
    get_directions: string;
    mon_fri: string;
    sat: string;
    sun: string;
    closed: string;
  };
  footer: {
    rights: string;
  };
}