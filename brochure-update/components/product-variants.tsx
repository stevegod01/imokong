'use client';
import {useState} from 'react';
import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import {Tabs,TabsList,TabsTrigger,TabsContent} from '@/components/ui/tabs';
import {Table,TableBody,TableCell,TableRow} from '@/components/ui/table';

export default function ProductVariants({name,variants,food,specifications}:{name:string;variants:string[];food:boolean;specifications?:Record<string,[string,string][]>}){
  const [active,setActive]=useState(variants[0]);
  return <section className="variant-section"><p className="eyebrow">{food?'FIND YOUR FLAVOUR':'FIND YOUR GRADE'}</p><h2 className="display-heading">Explore the range.</h2>
    {specifications&&<p className="variant-source-note">TFM means total fatty matter. Specifications below follow our product brochure; confirm the selected grade and batch documentation before ordering.</p>}
    <Tabs value={active} onValueChange={value=>setActive(String(value))} className="product-tabs"><TabsList aria-label={`${name} variants`} className="variant-tabs">{variants.map(v=><TabsTrigger value={v} key={v}>{v}</TabsTrigger>)}</TabsList>
    {variants.map(v=><TabsContent value={v} key={v} className="variant-panel"><div><h3>{v}</h3>{specifications?.[v]?<><Table className="variant-specifications"><TableBody>{specifications[v].map(([label,value])=><TableRow key={label}><TableCell>{label}</TableCell><TableCell>{value}</TableCell></TableRow>)}</TableBody></Table><p>Ask our team about current availability, packaging and your production requirements.</p></>:<p>{food?'Ask about pack sizes, carton quantities and the current product label.':'Discuss this grade, your formulation requirements and the relevant technical documentation.'}</p>}<Link className="button" href={`/contact?product=${encodeURIComponent(name)}&variant=${encodeURIComponent(v)}`}>Enquire about this {food?'variant':'grade'} <ArrowUpRight size={18}/></Link></div>{food&&<img src={`/images/${v==='Tropical Fruit Granola'?'tropical':'granola'}.jpg`} alt={v} loading="lazy"/>}</TabsContent>)}</Tabs>
  </section>
}
