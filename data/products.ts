export type Product = {
  slug: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  description: string;
  image: string;
};

export const products: Product[] = [
  {
    slug: 'aivee-noir-blazer',
    name: 'Noir Blazer',
    brand: 'By Aivee',
    category: 'Outerwear',
    price: 240,
    description: 'A sharply tailored statement blazer designed for polished evenings and elevated daywear.',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'aivee-luna-dress',
    name: 'Luna Dress',
    brand: 'By Aivee',
    category: 'Dresses',
    price: 180,
    description: 'Fluid silhouette with fine structure and a soft drape for effortless confidence.',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'cavella-velvet-heel',
    name: 'Velvet Heel',
    brand: 'Cavella',
    category: 'Footwear',
    price: 210,
    description: 'A sculpted heel with plush velvet texture and a refined, statement-ready profile.',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'cavella-satin-clutch',
    name: 'Satin Clutch',
    brand: 'Cavella',
    category: 'Accessories',
    price: 98,
    description: 'Compact, polished, and designed for evenings that call for a striking finishing touch.',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'velorian-ash-knit',
    name: 'Ash Knit',
    brand: 'Velorian',
    category: 'Knitwear',
    price: 130,
    description: 'An elevated knit layer with soft texture and modern structure for all-day wear.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'velorian-iris-scarf',
    name: 'Iris Scarf',
    brand: 'Velorian',
    category: 'Accessories',
    price: 72,
    description: 'Lightweight elegance that layers beautifully from day to evening.',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'velorian-mira-trench',
    name: 'Mira Trench',
    brand: 'Velorian',
    category: 'Outerwear',
    price: 260,
    description: 'A clean-lined trench with a sleek finish and versatile drape for transitional dressing.',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'velorian-elliot-bag',
    name: 'Elliot Bag',
    brand: 'Velorian',
    category: 'Accessories',
    price: 145,
    description: 'Structured carry-all designed for everyday luxury and clean city styling.',
    image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'velorian-sora-sandal',
    name: 'Sora Sandal',
    brand: 'Velorian',
    category: 'Footwear',
    price: 168,
    description: 'Minimal sandal lines with premium finish and elevated comfort.',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80',
  },
];
