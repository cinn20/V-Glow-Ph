import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Velorian',
  description: 'Luxury fashion and essentials curated for every wardrobe.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="topbar">
          <div className="topbar__inner container">
            <Link href="/" className="brand">Velorian</Link>
            <nav className="nav">
              <Link href="/">Home</Link>
              <Link href="/shop">Shop</Link>
              <Link href="/shop#featured">New In</Link>
              <Link href="/cart">Bag</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="footer">
          <div className="container footer__inner">
            <div>
              <p className="brand">Velorian</p>
              <p>Luxury essentials, thoughtfully curated.</p>
            </div>
            <div className="footer__links">
              <Link href="/shop">Shop</Link>
              <Link href="/cart">Bag</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
