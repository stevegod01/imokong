'use client';
import Link from 'next/link';
import {useRef} from 'react';
export default function MobileMenu(){const menu=useRef<HTMLDetailsElement>(null);const close=()=>{if(menu.current)menu.current.open=false};return <details className="mobile-menu" ref={menu} onKeyDown={e=>{if(e.key==='Escape'){close();menu.current?.querySelector('summary')?.focus()}}}><summary>Menu</summary><nav aria-label="Mobile navigation" onClick={e=>{if((e.target as HTMLElement).closest('a'))close()}}><Link href="/products">Products</Link><Link href="/#industries">Industries</Link><Link href="/about">About IMOKO</Link><Link href="/partners">Partners</Link><Link href="/contact">Request a quote</Link></nav></details>}
