'use client';

import {useState} from 'react';
import {ArrowLeft, ArrowRight, Expand} from 'lucide-react';
import {Tabs, TabsList, TabsTrigger, TabsContent} from '@/components/ui/tabs';
import {Dialog, DialogContent, DialogTitle, DialogDescription} from '@/components/ui/dialog';
import {soapBagPhotos, soapBagImage} from '@/lib/soap-bag-photos';
import './soap-bag-gallery.css';

export default function SoapBagGallery() {
  const [selected, setSelected] = useState(soapBagPhotos[0].id);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [enlarged, setEnlarged] = useState(false);
  const bag = soapBagPhotos.find(item => item.id === selected) || soapBagPhotos[0];
  const photo = bag.photos[photoIndex] || bag.photos[0];
  const changePhoto = (direction: number) => setPhotoIndex(index => (index + direction + bag.photos.length) % bag.photos.length);

  return <div className="soap-bag-gallery">
    <div className="soap-gallery-heading"><span>NIMIR PACKAGING</span><span>5 pack styles</span></div>
    <Tabs value={selected} onValueChange={value => {setSelected(String(value)); setPhotoIndex(0);}} className="soap-photo-tabs">
      {soapBagPhotos.map((item, index) => {
        const current = item.id === selected ? photo : item.photos[0];
        return <TabsContent value={item.id} key={item.id} className="soap-photo-panel">
          <figure className="soap-gallery-figure">
            <button type="button" className="soap-gallery-enlarge" onClick={() => setEnlarged(true)} aria-label={`Enlarge ${item.name} ${item.packaging} photo`}>
              <img src={soapBagImage(current.file)} alt={current.alt} width={960} height={1280} loading={index === 0 ? 'eager' : 'lazy'}/>
              <span className="soap-photo-number">0{index + 1} / 05</span>
              <span className="soap-zoom-hint"><Expand size={16} aria-hidden="true"/> Enlarge</span>
            </button>
            <figcaption><div><strong>{item.name}</strong><span>{item.packaging}</span></div><p>{item.label}</p></figcaption>
          </figure>
          <div className="soap-photo-views" aria-label={`${item.name} photo views`}>
            {item.photos.map((view, viewIndex) => <button type="button" key={view.file} aria-pressed={item.id === selected && photoIndex === viewIndex} onClick={() => setPhotoIndex(viewIndex)}>{view.view}</button>)}
          </div>
        </TabsContent>;
      })}
      <TabsList aria-label="Choose soap noodle packaging" className="soap-photo-selectors">
        {soapBagPhotos.map(item => <TabsTrigger key={item.id} value={item.id} className="soap-photo-choice" aria-label={`${item.name} ${item.packaging}`}>
          <img src={soapBagImage(item.photos[0].file)} alt="" width={72} height={88} loading="lazy"/>
          <span>{item.name}<small>{item.packaging}</small></span>
        </TabsTrigger>)}
      </TabsList>
    </Tabs>
    <p className="soap-pack-note">25 kg net weight when packed, as shown on the bags. Confirm your required grade and current packaging with our team.</p>
    <Dialog open={enlarged} onOpenChange={setEnlarged}>
      <DialogContent className="soap-photo-dialog">
        <DialogTitle>{bag.name} · {bag.packaging}</DialogTitle>
        <DialogDescription>{photo.view} · Original product photograph</DialogDescription>
        <img className="soap-dialog-image" src={soapBagImage(photo.file)} alt={photo.alt} width={960} height={1280}/>
        {bag.photos.length > 1 && <div className="soap-dialog-controls">
          <button type="button" onClick={() => changePhoto(-1)} aria-label="Previous product photo"><ArrowLeft size={19} aria-hidden="true"/></button>
          <span aria-live="polite">{photoIndex + 1} / {bag.photos.length}</span>
          <button type="button" onClick={() => changePhoto(1)} aria-label="Next product photo"><ArrowRight size={19} aria-hidden="true"/></button>
        </div>}
      </DialogContent>
    </Dialog>
  </div>;
}
