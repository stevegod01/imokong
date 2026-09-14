import type {Metadata} from 'next';
import Link from 'next/link';
import {ArrowUpRight, Home} from 'lucide-react';
import './globals.css';
import '@/components/site-header.css';
import MobileMenu from '@/components/mobile-menu';
import SiteFooter from '@/components/site-footer';
import AboutMenu from '@/components/about-menu';
export const metadata:Metadata={title:{default:'IMOKO — Quality materials. Reliable supply.',template:'%s | IMOKO'},description:'Industrial raw materials and food products for Nigerian manufacturers, retailers and food-service businesses.',icons:{icon:{url:'/favicon.svg?v=imoko-1',type:'image/svg+xml',sizes:'any'}},robots:{index:false,follow:false}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body><a href="#main" className="skip-link">Skip to content</a><header className="site-header"><div className="wrap header-inner"><Link href="/" aria-label="IMOKO home" className="logo"><span className="header-logo-mark" aria-hidden="true"/></Link><nav className="desktop-nav" aria-label="Main navigation"><Link href="/" className="home-nav-link"><Home size={17} aria-hidden="true"/>Home</Link><AboutMenu/><Link href="/products">Products</Link><Link href="/#industries">Industries</Link><Link href="/partners">Partners</Link></nav><Link href="/contact" className="header-cta">Request a quote <ArrowUpRight size={17}/></Link><MobileMenu/></div></header>{children}<SiteFooter/></body></html>}

