'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight, MoveDown, Pause, Play } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';

const artworkLayers = {
  factory: { file: 'banner-chemical-plant.png', cell: 0 },
  warehouse: { file: 'banner-supply-parts.png', cell: 0 },
  truck: { file: 'banner-supply-parts.png', cell: 1 },
  container: { file: 'banner-supply-parts.png', cell: 2 },
  pallet: { file: 'banner-supply-parts.png', cell: 3 },
  drum: { file: 'banner-industrial-parts.png', cell: 0 },
  glycerine: { file: 'banner-industrial-parts.png', cell: 1 },
  soap: { file: 'banner-industrial-parts.png', cell: 2 },
  sacks: { file: 'banner-industrial-parts.png', cell: 3 },
  granola: { file: 'banner-food-parts.png', cell: 0 },
  oats: { file: 'banner-food-parts.png', cell: 1 },
  margarine: { file: 'banner-food-parts.png', cell: 2 },
  toast: { file: 'banner-food-parts.png', cell: 3 },
  nicnax: { file: 'banner-nicnax-warm-products.png', cell: 0 },
} as const;

const companyDrumFile = 'banner-steel-drum.png';
const supplyWarehouseFile = 'banner-warehouse-white-fascia.png';
const supplyPalletFile = 'banner-palm-bright-pallet.png';
const forkliftFile = 'banner-forklift-operator.png';
const warehouseAddress = 'Plot 8, Block H, Cowbell Road, Isolo, Industrial estate, Isolo-Lagos.';

type ArtworkKey = keyof typeof artworkLayers;
type DrumLabelStyle = 'glycerine' | 'solvent' | 'stearic';
type BannerArtwork = ArtworkKey | { kind: ArtworkKey; label: string; labelStyle: DrumLabelStyle };

// Reference packaging treatments use product information already present on the site.
const drumLabels = {
  glycerine: { heading: ['GLYCERINE'], details: ['INDUSTRIAL RAW MATERIAL'] },
  solvent: { heading: ['PAINT MAKING', 'SOLVENTS'], details: ['PAINTS & COATINGS', 'FOR INDUSTRIAL USE'] },
  stearic: { heading: ['STEARIC ACID'], details: ['SOAP & PERSONAL CARE', 'INDUSTRIAL RAW MATERIAL'] },
} satisfies Record<DrumLabelStyle, { heading: string[]; details: string[] }>;

type Banner = {
  name: string;
  eyebrow: string;
  title: string;
  accent: string;
  copy: string;
  href: string;
  action: string;
  note: string;
  theme: string;
  items: BannerArtwork[];
  artworkAlt: string;
  duration?: number;
};

const banners: Banner[] = [
  {
    name: 'Who are we?',
    eyebrow: 'Who are we?',
    title: 'An Industrial chemical',
    accent: 'distribution company in Nigeria',
    copy: 'One of the top industrial chemical distribution companies in Nigeria. We import and support industries with raw materials such as soap noodles of different grades and quality, glycerine, stearic acid, and other industrial chemicals. Through direct production relationships and local market knowledge, we help manufacturers discuss suitable grades, plan supply quantities and access technical support for their production requirements.',
    href: '/products?division=industrial',
    action: 'Explore our chemicals',
    note: 'IMPORTS · RAW MATERIALS · INDUSTRIAL SUPPLY',
    theme: 'company',
    items: ['factory', 'drum', 'truck', 'soap'],
    artworkAlt: 'Industrial processing plant, IMOKO-branded delivery truck and chemical drum, and soap noodles.',
    duration: 6000,
  },
  {
    name: 'Reliable supply',
    eyebrow: 'THE RIGHT INPUTS. EVERY POSSIBILITY.',
    title: 'Quality materials.',
    accent: 'Reliable supply.',
    copy: 'Connecting Nigerian businesses to the raw materials and everyday products they need to move forward. Our range brings together industrial chemicals, soap-making inputs and food products, supported by manufacturer relationships and local supply-chain knowledge. Share your specifications and order quantities with our team to discuss the products and supply options that suit your business.',
    href: '/products',
    action: 'Explore our products',
    note: 'INDUSTRIAL MATERIALS & FOOD PRODUCTS',
    theme: 'supply',
    items: ['warehouse', 'truck', 'container', 'pallet'],
    artworkAlt: `IMOKO-branded delivery truck and shipping container at Imoko warehouse, ${warehouseAddress} The address is written on the broad white wall above the loading door. A seated forklift operator drives out through the open warehouse doorway and loads stacked white NIMIR Palm Bright soap-noodle bags into the truck. The 25 kg bags feature black lettering, a gold Palm Bright mark and a green Pure White Soap Noodles band.`,
  },
  {
    name: 'Industrial materials',
    eyebrow: 'FOR THE PEOPLE WHO MAKE WHAT’S NEXT.',
    title: 'Made for makers.',
    accent: 'Built for industry.',
    copy: 'Soap noodles, glycerine, stearic acid and solvents. Find the right starting point for your next formulation. Our range supports soap making, personal care and paints and coatings. For soap producers, our team can help you compare grades, discuss formulations and request laboratory-tested batch reports, with supply quantities shaped around your production needs.',
    href: '/products?division=industrial',
    action: 'Explore raw materials',
    note: 'SOAP · PERSONAL CARE · PAINTS & COATINGS',
    theme: 'industrial',
    items: [
      { kind: 'drum', label: 'Glycerine', labelStyle: 'glycerine' },
      { kind: 'drum', label: 'Paint solvent', labelStyle: 'solvent' },
      { kind: 'drum', label: 'Stearic acid', labelStyle: 'stearic' },
    ],
    artworkAlt: 'Three industrial drums labelled Glycerine, Paint Making Solvents and Stearic Acid, with black lettering printed directly on the cans.',
  },
  {
    name: 'Food products',
    eyebrow: 'GOOD PRODUCTS. EVERYDAY POSSIBILITIES.',
    title: 'Everyday essentials.',
    accent: 'More to enjoy.',
    copy: 'From breakfast favourites to kitchen staples. Discover food products for your shelves, menus and customers. Explore Nicnax almond and tropical fruit granola, oatmeal and margarine for retail, breakfast menus, bakeries and food service. Speak to our team about the current range, pack and carton sizes, and products suited to your business.',
    href: '/products?division=food',
    action: 'Explore food products',
    note: 'GRANOLA · OATMEAL · MARGARINE',
    theme: 'food',
    items: ['nicnax'],
    artworkAlt: 'Nicnax Almond Cranberry and Fruity Delight granola packs, an open Nicnax shipping carton and two jars of Nu+ee peanut butter.',
  },
];

const defaultArtworkFiles = [...new Set(banners[0].items.map(item => {
  const kind = typeof item === 'string' ? item : item.kind;
  return kind === 'drum' ? companyDrumFile : artworkLayers[kind].file;
}))];

export default function HeroBanner() {
  const [api, setApi] = useState<CarouselApi>();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [keyboardFocused, setKeyboardFocused] = useState(false);
  const [autoplayRevision, setAutoplayRevision] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(media.matches);
    const visibility = () => {
      setVisible(!document.hidden);
      if (document.hidden) setDragging(false);
    };
    update();
    visibility();
    media.addEventListener('change', update);
    document.addEventListener('visibilitychange', visibility);
    return () => {
      media.removeEventListener('change', update);
      document.removeEventListener('visibilitychange', visibility);
    };
  }, []);

  useEffect(() => {
    if (!api) return;
    const select = () => setActive(api.selectedScrollSnap());
    const pointerDown = () => setDragging(true);
    const pointerUp = () => {
      setDragging(false);
      setAutoplayRevision(revision => revision + 1);
    };
    const reinitialize = () => {
      select();
      // Embla may rebuild its drag listeners during a resize without emitting pointerUp.
      pointerUp();
    };
    select();
    api.on('select', select);
    api.on('reInit', reinitialize);
    api.on('pointerDown', pointerDown);
    api.on('pointerUp', pointerUp);
    return () => {
      api.off('select', select);
      api.off('reInit', reinitialize);
      api.off('pointerDown', pointerDown);
      api.off('pointerUp', pointerUp);
    };
  }, [api]);

  const rotating = !paused && !dragging && !keyboardFocused && !reducedMotion && visible;
  useEffect(() => {
    if (!api || !rotating) return;
    const timer = window.setTimeout(() => api.scrollNext(), banners[active].duration ?? 6000);
    return () => window.clearTimeout(timer);
  }, [api, rotating, active, autoplayRevision]);

  const move = (index: number) => {
    // Also restart the reading time when the selected dot is clicked again.
    setAutoplayRevision(revision => revision + 1);
    api?.scrollTo(index, reducedMotion);
  };

  const toggleMotion = () => {
    const nextPaused = !paused;
    setPaused(nextPaused);
    if (!nextPaused) setKeyboardFocused(false);
  };

  return (
    <Carousel
      setApi={setApi}
      opts={{ loop: true, align: 'start', startIndex: 0, duration: reducedMotion ? 0 : 30 }}
      className="hero-carousel"
      aria-label="IMOKO highlights"
      data-artwork-motion={!paused && visible && !reducedMotion ? 'running' : 'paused'}
      onPointerDownCapture={() => setKeyboardFocused(false)}
      onFocusCapture={event => {
        setKeyboardFocused(event.target.matches(':focus-visible'));
      }}
      onBlurCapture={event => {
        if (!(event.relatedTarget instanceof Node) || !event.currentTarget.contains(event.relatedTarget)) {
          setKeyboardFocused(false);
        }
      }}
      onKeyDownCapture={event => {
        if (event.key === 'Tab') setKeyboardFocused(true);
        if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
        setKeyboardFocused(true);
        event.preventDefault();
        move((active + (event.key === 'ArrowRight' ? 1 : -1) + banners.length) % banners.length);
      }}
    >
      {defaultArtworkFiles.map(file => <link key={file} rel="preload" as="image" href={`/images/${file}`} fetchPriority="high" />)}
      <CarouselContent className="banner-track" aria-live={rotating ? 'off' : 'polite'}>
        {banners.map((banner, index) => {
          const Heading = index === 0 ? 'h1' : 'h2';
          return (
          <CarouselItem
            className="banner-item"
            key={banner.name}
            aria-label={`${index + 1} of ${banners.length}: ${banner.name}`}
            aria-hidden={active !== index}
            inert={active !== index}
          >
            <section className={`banner-scene banner-${banner.theme}`} data-active={active === index}>
              <div className="banner-grid" aria-hidden="true" />
              {banner.theme === 'company' && (
                <div className="banner-refinery-underlay" aria-hidden="true">
                  <img src="/images/banner-refinery-sketch.png" alt="" decoding="async" draggable={false} />
                </div>
              )}
              {banner.theme === 'supply' && (
                <div className="banner-factory-floor-underlay" aria-hidden="true">
                  <img src="/images/banner-factory-floor-sketch.png" alt="" decoding="async" draggable={false} />
                </div>
              )}
              {banner.theme === 'industrial' && (
                <div className="banner-solvent-underlay" aria-hidden="true">
                  <img src="/images/banner-paint-solvent-sketch.png" alt="" decoding="async" draggable={false} />
                </div>
              )}
              {banner.theme === 'food' && (
                <div className="banner-food-grains-underlay" aria-hidden="true">
                  <img src="/images/banner-food-grains-sketch.png" alt="" decoding="async" draggable={false} />
                </div>
              )}
              <div className="banner-layout wrap">
                <div className="banner-copy">
                  <p className="banner-eyebrow"><span aria-hidden="true" />{banner.eyebrow}</p>
                  <Heading className="banner-heading">{banner.title}<br />{' '}<em>{banner.accent}</em></Heading>
                  <p className="banner-intro">{banner.copy}</p>
                  <div className="banner-actions">
                    <Link className="button banner-primary" href={banner.href}>
                      {banner.action}<MoveDown size={19} aria-hidden="true" />
                    </Link>
                    <Link className="text-link" href="/contact">
                      Talk to our team<ArrowUpRight size={17} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
                <div className="banner-artwork" role={banner.artworkAlt ? "img" : undefined} aria-label={banner.artworkAlt || undefined}>
                  <div className="banner-layer-stage" aria-hidden="true">
                    {banner.items.map((artwork, itemIndex) => {
                      const item = typeof artwork === 'string' ? artwork : artwork.kind;
                      const label = typeof artwork === 'string' ? undefined : artwork.label;
                      const labelStyle = typeof artwork === 'string' ? undefined : artwork.labelStyle;
                      const packagingLabel = labelStyle ? drumLabels[labelStyle] : undefined;
                      const { file, cell } = artworkLayers[item];
                      const artworkFile = banner.theme === 'company' && item === 'drum'
                        ? companyDrumFile
                        : banner.theme === 'supply' && item === 'warehouse' ? supplyWarehouseFile
                        : banner.theme === 'supply' && item === 'pallet' ? supplyPalletFile : file;
                      return (
                      <span className={`banner-piece banner-piece-${item}`} key={`${item}-${itemIndex}`} data-piece-index={itemIndex}>
                        <span className="banner-piece-motion">
                          <span className="banner-piece-image" style={{
                            backgroundImage: `url(/images/${artworkFile})`,
                            backgroundPosition: item === 'nicnax' ? 'center' : `${cell % 2 === 0 ? '0%' : '100%'} ${cell < 2 ? '0%' : '100%'}`,
                          }} />
                          {packagingLabel && (
                            <span className={`banner-drum-packaging banner-drum-packaging-${labelStyle}`}>
                              <strong>{packagingLabel.heading.map(line => <span key={line}>{line}</span>)}</strong>
                              <span className="banner-drum-label-details">
                                {packagingLabel.details.map(line => <span key={line}>{line}</span>)}
                              </span>
                            </span>
                          )}
                          {label && (
                            <span className="banner-material-label">
                              {label.split(' ').map((word, wordIndex) => <span key={`${word}-${wordIndex}`}>{word}{' '}</span>)}
                            </span>
                          )}
                          {((banner.theme === 'company' && (item === 'truck' || item === 'drum')) ||
                            (banner.theme === 'supply' && (item === 'truck' || item === 'container'))) && (
                            <span className={`banner-brand-mark banner-brand-mark-${item}`}>
                              <img src="/images/logo.png" alt="" draggable={false} />
                            </span>
                          )}
                        </span>
                      </span>
                      );
                    })}
                    {banner.theme === 'supply' && (
                      <>
                      <span className="banner-piece banner-piece-forklift">
                        <span className="banner-piece-motion">
                          <img className="banner-forklift-image" src={`/images/${forkliftFile}`} alt="" draggable={false} decoding="async" />
                          <span className="banner-forklift-cargo">
                            <span className="banner-forklift-load">
                              <img src={`/images/${supplyPalletFile}`} alt="" draggable={false} decoding="async" />
                            </span>
                          </span>
                        </span>
                      </span>
                      <span className="banner-piece banner-warehouse-front">
                        <img className="banner-warehouse-front-image" src={`/images/${supplyWarehouseFile}`} alt="" draggable={false} decoding="async" />
                        <span className="banner-warehouse-sign" title={`Imoko warehouse — ${warehouseAddress}`}>
                          <strong>Imoko warehouse</strong>
                          <span>Plot 8, Block H, Cowbell Road,<br />Isolo, Industrial estate, Isolo-Lagos.</span>
                        </span>
                      </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </CarouselItem>
          );
        })}
      </CarouselContent>
      <div className="banner-controls wrap">
        <div className="banner-navigation">
          <button className="banner-arrow" type="button" aria-label="Previous banner" onClick={() => move((active - 1 + banners.length) % banners.length)}>
            <ArrowLeft size={17} aria-hidden="true" />
          </button>
          <div className="banner-dots" aria-label="Choose a banner">
            {banners.map((banner, index) => (
              <button type="button" key={banner.name} aria-label={`Show ${banner.name} banner`} aria-current={active === index ? 'true' : undefined} onClick={() => move(index)}>
                <span />
              </button>
            ))}
          </div>
          <button className="banner-arrow" type="button" aria-label="Next banner" onClick={() => move((active + 1) % banners.length)}>
            <ArrowRight size={17} aria-hidden="true" />
          </button>
          {!reducedMotion && (
            <button className="banner-play" data-banner-play type="button" onClick={toggleMotion} aria-label={paused ? 'Play banners and artwork animations' : 'Pause banners and artwork animations'}>
              {paused ? <Play size={12} aria-hidden="true" /> : <Pause size={12} aria-hidden="true" />}
              {paused ? 'Play' : 'Pause'}
            </button>
          )}
          <span className="banner-count">0{active + 1}<span> / 0{banners.length}</span></span>
        </div>
        <span className="banner-range-note">{banners[active].note}</span>
      </div>
      <a className="banner-discover" href="#industries">Scroll to discover<MoveDown size={16} aria-hidden="true" /></a>
    </Carousel>
  );
}
