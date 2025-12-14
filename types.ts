export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price?: string;
}

export type CategoryType = 'SIMPLE' | 'FANCY' | 'WEDDING' | 'PEDI';

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: CategoryType;
}

export enum NavLink {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services',
  GALLERY = 'gallery',
  AI_STUDIO = 'ai-studio',
  PRICE = 'price',
  CONTACT = 'contact',
}