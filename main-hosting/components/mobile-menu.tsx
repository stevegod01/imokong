'use client';
import Link from 'next/link';
import {Home} from 'lucide-react';
import {useRef} from 'react';
import styles from './mobile-menu.module.css';
export default function MobileMenu(){const menu=useRef<HTMLDetailsElement>(null);const close=()=>{if(menu.current)menu.current.open=false};return <details className="mobile-menu" ref={menu} onKeyDown={e=>{if(e.key==='Escape'){close();menu.current?.querySelector('summary')?.focus()}}}><summary>Menu</summary><nav className={styles.navigation} aria-label="Mobile navigation" onClick={e=>{if((e.target as HTMLElement).closest('a'))close()}}><Link href="/" className="home-nav-link"><Home size={17} aria-hidden="true"/>Home</Link><Link href="/about">About IMOKO</Link><div className={styles.leadershipLinks}><Link className={styles.childLink} href="/leadership/board-of-directors">Board of directors</Link><Link className={styles.childLink} href="/leadership/executive-management">Executive management</Link></div><Link href="/products">Products</Link><Link href="/#industries">Industries</Link><Link href="/partners">Partners</Link><Link href="/contact">Request a quote</Link></nav></details>}
