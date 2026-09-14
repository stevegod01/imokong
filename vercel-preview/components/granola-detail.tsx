import Link from 'next/link';
import {productShelfLife} from '@/lib/product-specifications';
import {ArrowLeft, ArrowUpRight} from 'lucide-react';
import './granola-detail.css';

const flavours = [
  {name:'Almond Cranberry Granola', tone:'almond', description:'Crunchy oats with almonds, cranberries, cashew nuts and coconut, as described on the pictured pack. Serve over yoghurt or with milk for a fruit-and-nut breakfast.', image:'packs.jpg', alt:'Almond Cranberry and Fruity Delight granola packs'},
  {name:'Fruity Delight Granola', tone:'fruit', description:'An oat-based granola with sun-ripened raisins, shown in the yellow Nicnax pack. Try it with fresh fruit or as a crunchy topping for breakfast pots.', image:'packs.jpg', alt:'Nicnax Almond Cranberry and Fruity Delight granola packs'},
  {name:'Tropical Fruit Granola', tone:'tropical', description:'The tropical option in the range, with banana and pineapple named on the pictured label. Pair with plain yoghurt or add to a fruit bowl.', image:'tropical.jpg', alt:'Tropical Fruit Granola packaging artwork with banana and pineapple'}
];
const enquiry = (variant:string) => '/contact?product=Granola&variant=' + encodeURIComponent(variant);

export default function GranolaDetail(){
  return <main id="main" className="wrap inner-page granola-page">
    <Link className="breadcrumb" href="/products?division=food"><ArrowLeft size={16}/> Food &amp; consumer products</Link>
    <section className="granola-hero">
      <div className="granola-packshot"><img src="/images/granola-detail/packs.jpg" alt="Nicnax Almond Cranberry and Fruity Delight granola packs" width={348} height={348}/></div>
      <div className="granola-lead"><p className="eyebrow">NICNAX GRANOLA</p><h1>A little crunch.<br/><em>More to enjoy.</em></h1>
        <p className="intro">Oat-based granola for breakfast bowls, yoghurt toppings and everyday snacking. Choose from Almond Cranberry, Fruity Delight and Tropical Fruit, and discuss the packs and supply quantities suited to your shelves or menu.</p>
        <div className="actions"><Link className="button" href={enquiry('Range and supply')}>Enquire about granola <ArrowUpRight size={18}/></Link><a className="text-link" href="#granola-flavours">Explore the flavours ↓</a></div>
        <p className="small-note">Retail · Food service · Wholesale</p>
      </div>
    </section>
    <section id="granola-flavours" className="granola-section">
      <div className="granola-section-heading"><div><p className="eyebrow">FIND YOUR FLAVOUR</p><h2 className="display-heading">Three ways to crunch.</h2></div><p>Explore the flavours shown across the Nicnax range. Ask our team about current packs and availability.</p></div>
      <div className="granola-flavours">{flavours.map((flavour,index)=><article className={'granola-flavour '+flavour.tone} key={flavour.name}>
        <div className="granola-flavour-top"><span>0{index+1}</span><h3>{flavour.name}</h3></div><p>{flavour.description}</p><p className="small-note">Shelf life: {productShelfLife}.</p>
        <Link className="text-link" href={enquiry(flavour.name)}>Ask about this flavour <ArrowUpRight size={17}/></Link>
      </article>)}</div>
      <div className="granola-packaging"><figure><img src="/images/granola-detail/packs.jpg" alt="Nicnax Almond Cranberry and Fruity Delight granola retail packs" width={348} height={348} style={{maxWidth:348}} loading="lazy"/><figcaption>Almond Cranberry in purple and Fruity Delight in yellow. Tell us your preferred flavour when enquiring about retail packs or carton supply.</figcaption></figure>
      <figure className="granola-label"><img src="/images/granola-detail/tropical.jpg" alt="Tropical Fruit Granola pack artwork" width={194} height={194} loading="lazy"/><figcaption>Tropical Fruit Granola with banana and pineapple. Ask for the current label and pack size before ordering.</figcaption></figure></div>
    </section>
    <section className="granola-serving granola-section">
      <figure><img src="/images/granola-detail/serving.jpg" alt="Serving inspiration: a bowl of granola beside a jar of peanut butter" width={4720} height={2504} loading="lazy"/><figcaption>Serving inspiration.</figcaption></figure>
      <div><p className="eyebrow">FROM BREAKFAST TO SNACK TIME</p><h2 className="display-heading">Make more of<br/>every bowl.</h2><dl><dt>Pour &amp; enjoy</dt><dd>Serve with milk or your preferred alternative for a simple breakfast.</dd><dt>Layer &amp; top</dt><dd>Add crunch to yoghurt, fresh fruit or a breakfast parfait.</dd><dt>Snack &amp; share</dt><dd>Serve a portion on its own, or add a spoonful of peanut butter to your bowl.</dd></dl></div>
    </section>
    <section className="granola-pairing"><img src="/images/granola-detail/tropical.jpg" alt="Nicnax Tropical Fruit Granola packaging with banana and pineapple" width={194} height={194} loading="lazy"/><div><p className="eyebrow">CHOOSE YOUR BREAKFAST RANGE</p><h2 className="display-heading">Find the right flavour mix.</h2><p>Build your selection around fruit-and-nut, raisin or tropical flavours. For retail shelves, tell us which packs you want to stock. For cafés and breakfast service, share how you plan to serve the granola and the quantity you need.</p><Link className="text-link" href={enquiry('Flavour selection and pack formats')}>Discuss flavours and pack formats <ArrowUpRight size={17}/></Link></div></section>
    <section className="granola-section granola-supply"><div><p className="eyebrow">FOR YOUR BUSINESS</p><h2 className="display-heading">From your shelf<br/>to their breakfast.</h2><p>Tell us which flavours you are interested in, your quantity and your delivery location. We can discuss a suitable supply format for your business.</p></div><div><dl><dt>Retail &amp; supermarkets</dt><dd>Ask about current retail pack sizes and a flavour selection for your shelves.</dd><dt>Cafés &amp; food service</dt><dd>Discuss granola for breakfast bowls, yoghurt pots and menu toppings.</dd><dt>Wholesale &amp; distribution</dt><dd>Confirm carton quantities, order requirements and availability with our team.</dd></dl></div></section>
    <section className="granola-order"><div><h2>Before you order</h2><p>Almond Cranberry lists almonds, cashew nuts and coconut on the pictured pack. Check the current ingredient and allergen declaration for every flavour, including any cross-contact guidance. Shelf life is {productShelfLife} for all flavours. Confirm pack size, carton quantity and storage instructions before ordering; packaging and formulations may differ across the range.</p></div><Link className="button" href={enquiry('Product labels, pack sizes and supply')}>Discuss your requirements <ArrowUpRight size={18}/></Link></section>
  </main>;
}

