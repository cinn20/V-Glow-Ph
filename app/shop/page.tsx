import type { Metadata } from 'next';
import Link from 'next/link';
import { products } from '@/data/products';

export const metadata: Metadata = {
  title: 'Shop All | Velorian',
  description: 'Explore the complete Velorian, By Aivee, and Cavella collection.',
};

export default function ShopPage() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="section__header section__header--stacked">
          <div>
            <p className="eyebrow">Curated collection</p>
            <h1>Shop the collection</h1>
          </div>
          <Link href="/" className="text-link">Back to home</Link>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article key={product.slug} className="product-card">
              <div className="product-card__image-wrap">
                <img src={product.image} alt={product.name} className="product-card__image" />
                {(product.brand === 'By Aivee' || product.brand === 'Cavella') && (
                  <span className="badge">New</span>
                )}
              </div>
              <div className="product-card__content">
                <div className="product-card__meta">
                  <span>{product.brand}</span>
                  <strong>${product.price}</strong>
                </div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <Link href={`/products/${product.slug}`} className="text-link">View product</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
