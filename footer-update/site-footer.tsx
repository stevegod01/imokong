import Link from 'next/link';
import { ArrowUpRight, ArrowUp, Download, Mail, Phone, MapPin } from 'lucide-react';
import { soapBrochure } from '@/lib/brochure';
import './site-footer.css';

export default function SiteFooter() {
  return (
    <footer className="imoko-footer">
      <div className="wrap">
        <div className="imoko-footer-main">
          <div className="imoko-footer-brand">
            <Link href="/" className="imoko-footer-logo"><img src="/images/logo.png" alt="IMOKO home" width="130" height="54" loading="lazy" /></Link>
            <h2>The right partner.<br /><span>More possibilities.</span></h2>
            <p>Industrial raw materials and food products for manufacturers, retailers and food-service businesses across Nigeria.</p>
            <Link href="/contact" className="imoko-footer-cta">Discuss your requirements <ArrowUpRight size={19} aria-hidden="true" /></Link>
          </div>
          <nav aria-label="Footer products">
            <h3>Our products</h3>
            <p className="imoko-footer-category">Industrial materials</p>
            <Link href="/products/soap-noodles">Soap noodles</Link>
            <Link href="/products/glycerine">Glycerine</Link>
            <Link href="/products/stearic-acid">Stearic acid</Link>
            <Link href="/products/solvents">Solvents</Link>
            <p className="imoko-footer-category">Food & consumer</p>
            <Link href="/products/granola">Granola</Link>
            <Link href="/products/oatmeal">Oatmeal</Link>
            <Link href="/products/margarine">Margarine</Link>
          </nav>
          <nav aria-label="Footer company">
            <h3>Company</h3>
            <Link href="/about">About IMOKO</Link>
            <Link href="/#industries">Industries we serve</Link>
            <Link href="/partners">Our partners</Link>
            <Link href="/contact">Contact us</Link>
            <a href={soapBrochure.href} download className="imoko-footer-download"><Download size={18} aria-hidden="true" /><span>Soap product brochure<small>{soapBrochure.size}</small></span></a>
          </nav>
          <div className="imoko-footer-contact">
            <h3>Get in touch</h3>
            <a href="mailto:contact@imokong.com"><Mail size={18} aria-hidden="true" /><span>contact@imokong.com</span></a>
            <div className="imoko-footer-detail"><Phone size={18} aria-hidden="true" /><div><a href="tel:+2347062935109">+234 706 293 5109</a><a href="tel:+2348166404597">+234 816 640 4597</a></div></div>
            <div className="imoko-footer-detail"><MapPin size={18} aria-hidden="true" /><address><strong>Lagos</strong>1, Kayode Oni Animashaun Street,<br />Olive Park, Ajah, Lagos State.</address></div>
            <div className="imoko-footer-detail"><MapPin size={18} aria-hidden="true" /><address><strong>Abuja</strong>16, Philip T Aduda Street,<br />Wuye, Abuja.</address></div>
          </div>
        </div>
        <div className="imoko-footer-bottom"><span>© {new Date().getFullYear()} IMOKO. All rights reserved.</span><span className="imoko-footer-signoff">Quality materials. Reliable supply.</span><a href="#main">Back to top <ArrowUp size={16} aria-hidden="true" /></a></div>
      </div>
    </footer>
  );
}
