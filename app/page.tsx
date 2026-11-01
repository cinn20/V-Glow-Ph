import type { Metadata } from 'next';
import Link from 'next/link';
import { products } from '@/data/products';

const featured = products.slice(0, 3);

export const metadata: Metadata = {
  title: 'Velorian | Luxury Fashion & Essentials',
  description: 'Discover refined wardrobes from Velorian, By Aivee, and Cavella.',
};

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero__content">
          <p className="eyebrow">Curated for modern wardrobes</p>
          <h1>Refined essentials for every moment.</h1>
          <p className="lead">
            Discover elevated pieces from Velorian, By Aivee, and Cavella — designed to move effortlessly from day to evening.
          </p>
          <div className="hero__actions">
            <Link href="/shop" className="button button--primary">Shop collection</Link>
            <Link href="/shop#featured" className="button button--secondary">View edits</Link>
          </div>
          <div className="hero__stats">
            <div>
              <strong>37+</strong>
              <span>Curated pieces</span>
            </div>
            <div>
              <strong>3</strong>
              <span>Design houses</span>
            </div>
            <div>
              <strong>24h</strong>
              <span>Dispatch</span>
            </div>
          </div>
        </div>
        <div className="hero__visual" aria-label="Featured editorial image">
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80"
            alt="Editorial fashion look"
          />
        </div>
      </section>

      <section className="section" id="featured">
        <div className="section__header">
          <div>
            <p className="eyebrow">Featured designers</p>
            <h2>New arrivals to discover</h2>
          </div>
          <Link href="/shop" className="text-link">See all products</Link>
        </div>

        <div className="product-grid">
          {featured.map((product) => (
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
                <Link href={`/products/${product.slug}`} className="text-link">Shop now</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--wide">
        <div className="feature-band">
          <div>
            <p className="eyebrow">Modern essentials</p>
            <h2>Wardrobe staples with a refined point of view.</h2>
          </div>
          <div className="feature-band__list">
            <div>
              <strong>Tailored</strong>
              <span>structured silhouettes</span>
            </div>
            <div>
              <strong>Polished</strong>
              <span>premium finishes</span>
            </div>
            <div>
              <strong>Versatile</strong>
              <span>ready for every setting</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__header">
          <div>
            <p className="eyebrow">Best sellers</p>
            <h2>Shop the collection</h2>
          </div>
        </div>

        <div className="product-grid product-grid--compact">
          {products.slice(3).map((product) => (
            <article key={product.slug} className="product-card product-card--compact">
              <img src={product.image} alt={product.name} className="product-card__image" />
              <div className="product-card__content">
                <div className="product-card__meta">
                  <span>{product.brand}</span>
                  <strong>${product.price}</strong>
                </div>
                <h3>{product.name}</h3>
                <Link href={`/products/${product.slug}`} className="text-link">View item</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
