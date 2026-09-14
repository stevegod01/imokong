import {productShelfLife} from './product-specifications';

// Grades and TFM transcribed from the user-supplied IMOKO SOAP PRODUCT BROCHURE, page 1.
// The site owner confirmed 24 months for every product and grade.
// TFM is total fatty matter. Availability is deliberately not copied from the brochure.
export const soapGrades = [
  { name: 'Palm Bright 85:15', tfm: '78%', shelfLife: productShelfLife },
  { name: 'Swing 85:15 / 80:20 / 90:10', tfm: 'Not specified in brochure', shelfLife: productShelfLife },
  { name: 'Capella 80:20', tfm: '72%', shelfLife: productShelfLife },
  { name: 'Palm Bright 90:10 — 78% TFM', tfm: '78%', shelfLife: productShelfLife },
  { name: 'Palm Bright 90:10 — 72% TFM', tfm: '72%', shelfLife: productShelfLife },
  { name: 'Palm Bright 80:20 — 72% TFM', tfm: '72%', shelfLife: productShelfLife },
  { name: 'Palm Bright 80:20 — 78% TFM', tfm: '78%', shelfLife: productShelfLife },
];

export const soapVariantSpecifications: Record<string, [string, string][]> = Object.fromEntries(
  soapGrades.map(grade => [grade.name, [
    ['Total fatty matter (TFM)', grade.tfm],
    ['Storage', 'Ambient'],
    ['Shelf life', grade.shelfLife],
  ]]),
);

export const soapBrochure = {
  href: '/documents/imoko-soap-product-brochure.pdf',
  title: 'IMOKO soap product brochure',
  size: 'PDF · 27 MB',
};
