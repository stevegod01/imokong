'use client';

import Image from 'next/image';
import {useRef} from 'react';
import {ArrowUpRight, X} from 'lucide-react';
import type {Leader} from '@/lib/leadership';
import styles from './leadership.module.css';

export default function LeaderCard({member, index}: {member: Leader; index: number}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = `${member.id}-profile-title`;

  return (
    <article className={styles.card}>
      <div className={styles.portrait}>
        <Image src={member.image} alt={member.name} width={600} height={700}
          sizes="(max-width: 620px) calc(100vw - 40px), (max-width: 1050px) 45vw, 420px"
          loading={index === 0 ? 'eager' : 'lazy'} className={styles.portraitImage}/>
      </div>
      <div className={styles.cardCopy}>
        <p className={styles.role}>{member.role}</p>
        <h3>{member.name}</h3>
        <button type="button" className={styles.profileButton} onClick={() => dialog.current?.showModal()}
          aria-label={`Read profile of ${member.name}`} aria-haspopup="dialog">
          Read profile <ArrowUpRight size={18} aria-hidden="true"/>
        </button>
      </div>
      <dialog ref={dialog} className={styles.dialog} aria-labelledby={titleId}
        onClick={event => {
          if (event.target !== event.currentTarget) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.current?.close();
        }}>
        <div className={styles.dialogTop}>
          <p className="eyebrow">IMOKO / LEADERSHIP PROFILE</p>
          <button autoFocus type="button" aria-label="Close profile" onClick={() => dialog.current?.close()}><X size={22} aria-hidden="true"/></button>
        </div>
        <div className={styles.dialogContent}>
          <p className={styles.role}>{member.role}</p>
          <h2 id={titleId}>{member.name}</h2>
          <div className={styles.biography}>{member.bio.map((paragraph, i) => <p key={i}>{paragraph}</p>)}</div>
          <a className={`text-link ${styles.email}`} href={`mailto:${member.email}`}>{member.email}<ArrowUpRight size={16} aria-hidden="true"/></a>
        </div>
      </dialog>
    </article>
  );
}
