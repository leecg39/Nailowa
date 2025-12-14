export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'simple' | 'fancy' | 'wedding' | 'pedi' | 'art';
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