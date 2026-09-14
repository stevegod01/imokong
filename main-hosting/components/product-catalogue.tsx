'use client';

import Link from 'next/link';
import {useSearchParams} from 'next/navigation';
import {ArrowUpRight} from 'lucide-react';
import {products, divisionName} from '@/lib/products';

export function ProductCatalogue({division}: {division?: string | null}) {
  const selected = division === 'industrial' || division === 'food' ? division : 'all';
  const list = products.filter(product => selected === 'all' || product.division === selected);

  return (
    <main id="main" className="wrap inner-page catalogue-page">
      <header className="catalogue-header">
        <div>
          <p className="eyebrow">THE IMOKO CATALOGUE</p>
          <h1>Find your next <em>essential.</em></h1>
        </div>
        <p className="intro">From the materials you manufacture with to the products you put on shelves. Explore our range.</p>
      </header>
      <nav className="catalogue-nav" aria-label="Product divisions">
        {[
          ['all', 'All products'],
          ['industrial', 'Industrial materials'],
          ['food', 'Food & consumer products'],
        ].map(([key, label]) => (
          <Link key={key} href={key === 'all' ? '/products' : `/products?division=${key}`} aria-current={selected === key ? 'page' : undefined}>
            {label}<span>{key === 'all' ? products.length : products.filter(product => product.division === key).length}</span>
          </Link>
        ))}
      </nav>
      <div className="featured-grid catalogue-grid">
        {list.map(product => (
          <Link href={`/products/${product.slug}`} className="product-card" key={product.slug}>
            <div className={product.slug === 'soap-noodles' ? 'product-image product-image-soap-photo' : 'product-image'}>
              <img src={`/images/${product.image}`} alt={product.name} loading="lazy"/>
              <span className="circle-arrow"><ArrowUpRight size={22}/></span>
            </div>
            <p className="eyebrow">{divisionName(product.division)}</p>
            <h2>{product.name}</h2>
            <p className="card-description">{product.applications.slice(0, 2).join(' · ')}</p>
          </Link>
        ))}
      </div>
      <div className="catalogue-help">
        <h2>Looking for something specific?</h2>
        <p>Share your product specification and quantity with our team.</p>
        <Link href="/contact" className="text-link">Discuss a requirement <ArrowUpRight size={18}/></Link>
      </div>
    </main>
  );
}

export default function ProductCatalogueFromQuery() {
  const searchParams = useSearchParams();
  return <ProductCatalogue division={searchParams.get('division')}/>;
}
