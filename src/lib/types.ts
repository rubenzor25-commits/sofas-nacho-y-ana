export interface Sofa {
  id: string;
  store: string;
  name: string;
  type?: string | null;
  price: number;
  oldPrice?: number | null;
  url: string;
  image: string;
  sliding: boolean;
  reclining: boolean;
  bed: boolean;
  chaise: boolean;
  width_cm?: number | null;
  depth_cm?: number | null;
  color?: string | null;
  material?: string | null;
  rating?: number | null;
  ratingCount?: number | null;
  /** Aviso importante (p. ej. vendido por terceros o clasificado como 4 plazas). */
  nota?: string | null;
  joke: string;
}

export interface Tienda {
  store: string;
  name: string;
  address: string;
  city: string;
}
