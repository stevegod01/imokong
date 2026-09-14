// Transcribed from the user-supplied IMOKO SOAP PRODUCT BROCHURE, page 1.
// TFM is total fatty matter. Availability is deliberately not copied from the brochure.
export const soapGrades = [
  { name: 'Palm Bright 85:15', tfm: '78%', shelfLife: '12 months' },
  { name: 'Swing 85:15 / 80:20 / 90:10', tfm: 'Not specified in brochure', shelfLife: '6 months' },
  { name: 'Capella 80:20', tfm: '72%', shelfLife: '12 months' },
  { name: 'Palm Bright 90:10 — 78% TFM', tfm: '78%', shelfLife: '12 months' },
  { name: 'Palm Bright 90:10 — 72% TFM', tfm: '72%', shelfLife: '12 months' },
  { name: 'Palm Bright 80:20 — 72% TFM', tfm: '72%', shelfLife: '12 months' },
  { name: 'Palm Bright 80:20 — 78% TFM', tfm: '78%', shelfLife: '12 months' },
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
