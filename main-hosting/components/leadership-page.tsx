import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import AboutNav from '@/components/about-nav';
import LeaderCard from '@/components/leader-card';
import type {Leader} from '@/lib/leadership';
import styles from './leadership.module.css';

type Props = {
  current: 'board' | 'executive';
  members: readonly Leader[];
};

export default function LeadershipPage({current, members}: Props) {
  const board = current === 'board';

  return (
    <main id="main">
      <div className={`wrap inner-page ${styles.page}`}>
        <AboutNav current={current}/>
        <header className={`${styles.intro} ${styles.singleLineIntro} ${board ? '' : styles.executiveIntro}`}>
          <div>
            <p className="eyebrow">ABOUT IMOKO / OUR LEADERSHIP</p>
            <h1>{board ? <>Board of <em>directors.</em></> : <>Executive <em>management.</em></>}</h1>
          </div>
          <div className={styles.introCopy}>
            <p className={styles.lead}>{board ? 'Guiding our direction. Shaping our future.' : 'Turning our purpose into everyday progress.'}</p>
            <p>{board
              ? 'Governance and strategic oversight led by the leaders guiding IMOKO’s long-term direction.'
              : 'The operational leaders responsible for execution, growth, and daily decision-making across the business.'}</p>
          </div>
        </header>

        <section aria-labelledby="team-heading" className={styles.team}>
          <div className={styles.sectionLabel}>
            <h2 id="team-heading" className="eyebrow">{board ? 'GOVERNANCE & DIRECTION' : 'OPERATIONS & DELIVERY'}</h2>
            <span>{String(members.length).padStart(2, '0')} / {board ? 'BOARD MEMBERS' : 'EXECUTIVES'}</span>
          </div>
          <div className={`${styles.grid} ${board ? styles.boardGrid : ''}`}>
            {members.map((member, index) => <LeaderCard key={member.id} member={member} index={index}/>)}
          </div>
        </section>

        <aside className={styles.related} aria-label="Explore more about IMOKO">
          <div>
            <p className="eyebrow">{board ? 'MEET THE EXECUTIVE TEAM' : 'MEET OUR BOARD'}</p>
            <h2>{board ? <>The people bringing<br/>our purpose to life.</> : <>The people guiding<br/>our next chapter.</>}</h2>
          </div>
          <div>
            <p>{board ? 'Get to know the team leading our operations and putting our purpose into practice.' : 'Meet the board providing oversight and shaping IMOKO’s long-term direction.'}</p>
            <Link className="text-link" href={board ? '/leadership/executive-management' : '/leadership/board-of-directors'}>
              {board ? 'Explore executive management' : 'Explore our board of directors'} <ArrowUpRight size={18} aria-hidden="true"/>
            </Link>
          </div>
        </aside>
        <Link className={`text-link ${styles.backLink}`} href="/about">More about IMOKO <ArrowUpRight size={18} aria-hidden="true"/></Link>
      </div>
    </main>
  );
}
