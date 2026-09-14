const partners = [
  { id: 'nimir', file: 'nimir.png', name: 'NIMIR', width: 400, height: 81 },
  { id: 'nicnax', file: 'nicnax.png', name: 'Nicnax', width: 398, height: 170 },
  { id: 'dhl', file: 'dhl.png', name: 'DHL Express', width: 350, height: 200 },
  { id: 'jazglo', file: 'jazglo-transparent.png', name: 'JazGlo', width: 1345, height: 1170 },
];

export default function PartnerLogos() {
  return (
    <div className="partner-marquee" role="region" aria-label="Partner logos" tabIndex={0}>
      <div className="partner-marquee-viewport">
        <div className="partner-marquee-track">
          {[0, 1].map(copy => (
            <ul
              className="partner-marquee-group"
              key={copy}
              aria-label={copy === 0 ? 'IMOKO partner brands' : undefined}
              aria-hidden={copy === 1 ? true : undefined}
            >
              {partners.map(partner => (
                <li className="partner-marquee-item" key={partner.id}>
                  <span className={`partner-logo-frame partner-mark-${partner.id}`}>
                    <img
                      src={`/images/${partner.file}`}
                      alt={copy === 0 ? partner.name : ''}
                      width={partner.width}
                      height={partner.height}
                      decoding="async"
                      draggable={false}
                    />
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
