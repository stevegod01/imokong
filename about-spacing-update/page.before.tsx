import Link from 'next/link';
import Image from 'next/image';
import {ArrowUpRight, Download, Factory, FlaskConical, Ship, Truck} from 'lucide-react';
import styles from './about.module.css';
import {soapBrochure} from '@/lib/brochure';
import AboutNav from '@/components/about-nav';

export const metadata={title:'About IMOKO',description:'IMOKO manufactures, imports and distributes household commodities and industrial raw materials across Nigeria, with production partnerships and technical support.'};

export default function About(){return <main id="main"><section className="wrap inner-page">
  <AboutNav current="about"/>
  <div className={styles.hero}>
    <div><p className="eyebrow">GET TO KNOW IMOKO</p><h1>The right partner.<br/><em>More possibilities.</em></h1></div>
    <Image className={styles.photo} src="/images/logistics.png" width={1086} height={1132} alt="A truck loaded with bagged industrial materials for distribution" priority/>
  </div>
  <div className={`story-grid ${styles.introduction}`}><div><p className="story-lead">Supporting Nigerian industry. Bringing value to everyday life.</p>
    <section className={styles.capabilities} aria-label="What we do">
      <p className={`eyebrow ${styles.label}`}>WHAT WE DO</p>
      <ul><li><Factory size={27} strokeWidth={1.5} aria-hidden="true"/><span>Manufacturing</span></li><li><Ship size={27} strokeWidth={1.5} aria-hidden="true"/><span>Importation</span></li><li><Truck size={27} strokeWidth={1.5} aria-hidden="true"/><span>Distribution</span></li></ul>
    </section>
  </div><div><p>IMOKO manufactures, imports and distributes household commodities across Nigeria, serving businesses and reaching consumers through major retail stores. Our focus is quality, customer wellbeing and value for money.</p><p>Alongside our food and consumer products, we supply industrial inputs for soap production and other manufacturing applications. Our range includes soap noodles, distilled palm-based fatty acids, glycerine, stearic acid and paint-making solvents.</p><Link className="text-link" href="/products">Discover our products <ArrowUpRight size={18}/></Link></div></div>
  <section className="purpose-grid" aria-label="Our mission and vision"><article><p className="eyebrow">OUR MISSION</p><h2>Quality within reach.</h2><p>To deliver affordable, quality consumer products that improve life in Nigerian homes.</p></article><article><p className="eyebrow">OUR VISION</p><h2>Everyday life, elevated.</h2><p>To enhance the quality of life in Nigerian homes through an approach centred on our customers.</p></article></section>
  <section className={styles.leadership} aria-labelledby="leadership-heading">
    <div className={styles.leadershipIntro}><p className="eyebrow">OUR LEADERSHIP</p><h2 id="leadership-heading" className="display-heading">The people behind<br/>our purpose.</h2><p>Meet the board and executive team guiding IMOKO’s direction and bringing our commitment to quality into everyday practice.</p></div>
    <div className={styles.leadershipLinks}>
      <Link className={styles.leadershipCard} href="/leadership/board-of-directors"><span className={styles.leadershipIndex}>01 / DIRECTION</span><h3>Board of directors</h3><p>Meet the people providing oversight and shaping the company’s long-term direction.</p><span className={styles.cardAction}>Meet our board <ArrowUpRight size={19} aria-hidden="true"/></span></Link>
      <Link className={styles.leadershipCard} href="/leadership/executive-management"><span className={styles.leadershipIndex}>02 / DELIVERY</span><h3>Executive management</h3><p>Get to know the team leading our operations and putting our purpose into practice.</p><span className={styles.cardAction}>Meet our executive team <ArrowUpRight size={19} aria-hidden="true"/></span></Link>
    </div>
  </section>
  <div className="story-grid"><div><p className="eyebrow">OUR INDUSTRIAL PARTNERSHIP</p><h2 className="display-heading">Pakistani production.<br/>Nigerian market knowledge.</h2></div><div><p>Our exclusive strategic partnership with production partners in Pakistan connects Nigerian manufacturers to soap-making materials at source. We combine that manufacturing relationship with local procurement and supply-chain knowledge.</p><p>For soap producers, this includes formulation and research collaboration around total fatty matter, moisture content, skin feel and fragrance requirements.</p><Link className="text-link" href="/partners">Explore our partnerships <ArrowUpRight size={18}/></Link></div></div>
  <section className="company-capabilities" aria-label="How we support your business"><article><Factory size={29}/><h3>Direct sourcing</h3><p>Manufacturer relationships supporting procurement and cost planning for your production inputs.</p></article><article><FlaskConical size={29}/><h3>Technical collaboration</h3><p>Formulation discussions, laboratory-tested batch reports and technical support for soap manufacturers.</p></article><article><Truck size={29}/><h3>Flexible volumes</h3><p>Supply discussions shaped around the tonnage needs of medium-scale factories and larger manufacturers.</p></article></section>
  <section className="brochure-callout"><div><p className="eyebrow">EXPLORE OUR INDUSTRIAL RANGE</p><h2>More detail. Better decisions.</h2><p>Read our company introduction, soap-product specifications and production support offering.</p></div><a className="button" href={soapBrochure.href} download>Download soap brochure <Download size={18}/></a><span className="brochure-file-size">{soapBrochure.size}</span></section>
  <div className="catalogue-help"><h2>Let’s discuss your next requirement.</h2><p>Contact our team for a technical consultation or to request product samples.</p><Link className="text-link" href="/contact">Start a conversation <ArrowUpRight size={18}/></Link></div>
</section></main>}
