import Link from 'next/link';
import styles from './about-nav.module.css';

type AboutPage = 'about' | 'board' | 'executive';

const pages: {id: AboutPage; href: string; label: string}[] = [
  {id: 'about', href: '/about', label: 'About IMOKO'},
  {id: 'board', href: '/leadership/board-of-directors', label: 'Board of directors'},
  {id: 'executive', href: '/leadership/executive-management', label: 'Executive management'},
];

export default function AboutNav({current}: {current: AboutPage}) {
  return (
    <nav className={styles.nav} aria-label="About IMOKO">
      <ul>
        {pages.map(page => (
          <li key={page.id}>
            <Link href={page.href} aria-current={current === page.id ? 'page' : undefined}>
              {page.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
