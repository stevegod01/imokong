import Link from 'next/link';
import {ArrowRight, Factory, Layers3, Package} from 'lucide-react';
import styles from './home-divisions.module.css';

export default function HomeDivisions() {
  return (
    <section className={`wrap ${styles.section}`} id="industries" aria-label="Our divisions and business support">
      <article className={styles.division}>
        <header className={styles.heading}>
          <Factory size={26} strokeWidth={1.5} aria-hidden="true"/>
          <h2>Industrial materials</h2>
        </header>
        <p className={styles.description}>Essential inputs for the people making what comes next.</p>
        <ul className={styles.items}>
          <li><Link href="/products/soap-noodles">Soap noodles</Link></li>
          <li><Link href="/products/glycerine">Glycerine</Link></li>
          <li><Link href="/products/stearic-acid">Stearic acid</Link></li>
          <li><Link href="/products/solvents">Solvents</Link></li>
        </ul>
        <Link className={styles.cta} href="/products?division=industrial">Explore raw materials <ArrowRight size={18} aria-hidden="true"/></Link>
      </article>
      <article className={styles.division}>
        <header className={styles.heading}>
          <Package size={26} strokeWidth={1.5} aria-hidden="true"/>
          <h2>Food &amp; consumer products</h2>
        </header>
        <p className={styles.description}>Thoughtfully sourced products for shelves, kitchens and everyday life.</p>
        <ul className={styles.items}>
          <li><Link href="/products/granola">Granola</Link></li>
          <li><Link href="/products/oatmeal">Oatmeal</Link></li>
          <li><Link href="/products/margarine">Margarine</Link></li>
        </ul>
        <Link className={styles.cta} href="/products?division=food">Explore food products <ArrowRight size={18} aria-hidden="true"/></Link>
      </article>
      <article className={`${styles.division} ${styles.support}`}>
        <header className={styles.heading}>
          <Layers3 size={26} strokeWidth={1.5} aria-hidden="true"/>
          <h2>Built around your business</h2>
        </header>
        <p className={styles.description}>Product knowledge and local support, from requirement to supply.</p>
        <ul className={`${styles.items} ${styles.sectors}`}>
          <li>Manufacturing</li>
          <li>Personal care</li>
          <li>Paints &amp; coatings</li>
          <li>Retail &amp; food service</li>
        </ul>
        <Link className={styles.cta} href="/contact">Discuss your requirements <ArrowRight size={18} aria-hidden="true"/></Link>
      </article>
    </section>
  );
}
