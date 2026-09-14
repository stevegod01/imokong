'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useEffect, useId, useRef, useState} from 'react';
import {ChevronDown} from 'lucide-react';
import styles from './about-menu.module.css';

export default function AboutMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const panelId = useId();
  const inAbout = pathname === '/about' || pathname.startsWith('/leadership/');

  useEffect(() => {
    function closeOutside(event: PointerEvent) {
      if (!container.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener('pointerdown', closeOutside);
    return () => document.removeEventListener('pointerdown', closeOutside);
  }, []);

  return (
    <div
      ref={container}
      className={styles.menu}
      onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}
      onKeyDown={event => {
        if (event.key === 'Escape' && open) {
          setOpen(false);
          trigger.current?.focus();
        }
      }}
    >
      <Link href="/about" className={inAbout ? styles.active : undefined} aria-current={pathname === '/about' ? 'page' : undefined} onClick={() => setOpen(false)}>About IMOKO</Link>
      <button ref={trigger} type="button" className={styles.trigger} aria-label="About IMOKO pages" aria-expanded={open} aria-controls={panelId} onClick={() => setOpen(!open)}>
        <ChevronDown size={15} aria-hidden="true"/>
      </button>
      <ul id={panelId} className={styles.panel} hidden={!open}>
        <li><Link href="/about" aria-current={pathname === '/about' ? 'page' : undefined} onClick={() => setOpen(false)}>About IMOKO<span>Our company and purpose</span></Link></li>
        <li><Link href="/leadership/board-of-directors" aria-current={pathname === '/leadership/board-of-directors' ? 'page' : undefined} onClick={() => setOpen(false)}>Board of directors<span>Guiding our direction</span></Link></li>
        <li><Link href="/leadership/executive-management" aria-current={pathname === '/leadership/executive-management' ? 'page' : undefined} onClick={() => setOpen(false)}>Executive management<span>Leading our business</span></Link></li>
      </ul>
    </div>
  );
}
