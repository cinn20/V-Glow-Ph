import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products } from '@/data/products';

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="page-shell">
      <div className="section product-detail">
        <div className="product-detail__image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-detail__content">
          <p className="eyebrow">{product.brand}</p>
          <h1>{product.name}</h1>
          <p className="product-price">${product.price}</p>
          <p className="product-description">{product.description}</p>

          <div className="product-detail__actions">
            <button className="button button--primary">Add to bag</button>
            <Link href="/shop" className="button button--secondary">Continue shopping</Link>
          </div>

          <dl className="product-meta">
            <div>
              <dt>Category</dt>
              <dd>{product.category}</dd>
            </div>
            <div>
              <dt>Shipping</dt>
              <dd>2-4 business days</dd>
            </div>
            <div>
              <dt>Returns</dt>
              <dd>30-day easy returns</dd>
            </div>
          </dl>
        </div>
      </div>
    </main>
  );
}
