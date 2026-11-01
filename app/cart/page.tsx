import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cart | Velorian',
  description: 'Review your selected pieces before checkout.',
};

export default function CartPage() {
  const items = [
    {
      name: 'Noir Blazer',
      brand: 'By Aivee',
      price: 240,
      image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
    },
    {
      name: 'Velvet Heel',
      brand: 'Cavella',
      price: 210,
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80',
    },
  ];

  const subtotal = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <main className="page-shell">
      <section className="section cart-page">
        <div className="section__header section__header--stacked">
          <div>
            <p className="eyebrow">Your bag</p>
            <h1>Review your selection</h1>
          </div>
          <Link href="/shop" className="text-link">Continue shopping</Link>
        </div>

        <div className="cart-layout">
          <div className="cart-items">
            {items.map((item) => (
              <div key={item.name} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <p className="eyebrow">{item.brand}</p>
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                </div>
              </div>
            ))}
          </div>

          <aside className="checkout-summary">
            <h2>Order summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <strong>${subtotal}</strong>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <strong>Free</strong>
            </div>
            <div className="summary-row summary-row--total">
              <span>Total</span>
              <strong>${subtotal}</strong>
            </div>
            <button className="button button--primary button--block">Proceed to checkout</button>
          </aside>
        </div>
      </section>
    </main>
  );
}
