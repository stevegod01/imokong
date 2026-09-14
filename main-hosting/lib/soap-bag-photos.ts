// Original company-supplied photographs. Bag colours do not establish a TFM grade.
export const soapBagPhotos = [
  {
    id: 'palm-white', name: 'Palm Bright', packaging: 'White bag',
    label: 'Pure white soap noodles',
    photos: [
      {file: 'palm-bright-white-standing.jpg', view: 'Warehouse view', alt: 'White NIMIR Palm Bright pure white soap noodles bag standing on a pallet'},
      {file: 'palm-bright-white-label.jpg', view: 'Label detail', alt: 'Front label on a white Palm Bright soap noodles bag, showing 25 kg net weight when packed'},
    ],
  },
  {
    id: 'palm-green', name: 'Palm Bright', packaging: 'Green bag',
    label: 'Pure white soap noodles',
    photos: [
      {file: 'palm-bright-green-standing.jpg', view: 'Warehouse view', alt: 'Green NIMIR Palm Bright pure white soap noodles bag standing in the warehouse'},
      {file: 'palm-bright-green-label.jpg', view: 'Label detail', alt: 'Front of a green Palm Bright soap noodles bag laid on a pallet'},
    ],
  },
  {
    id: 'capella', name: 'Capella', packaging: 'Soap noodles',
    label: 'NIMIR Capella soap noodles',
    photos: [
      {file: 'capella-standing.jpg', view: 'Warehouse view', alt: 'NIMIR Capella soap noodles bag standing on a green pallet'},
      {file: 'capella-label.jpg', view: 'Label detail', alt: 'Full front of a Capella soap noodles bag, showing the NIMIR branding and 25 kg label'},
    ],
  },
  {
    id: 'soap-base-78', name: 'Soap Base', packaging: '78 TFM',
    label: 'Soap Base · 78 TFM on the pack',
    photos: [
      {file: 'soap-base-78-tfm.jpg', view: 'Front of pack', alt: 'Natural-coloured NIMIR Soap Base bag with 78 TFM and 25 kg printed on the label'},
    ],
  },
  {
    id: 'soap-base-ultra', name: 'Soap Base', packaging: 'Ultra',
    label: 'NIMIR Soap Base Ultra',
    photos: [
      {file: 'soap-base-ultra-standing.jpg', view: 'Warehouse view', alt: 'NIMIR Soap Base Ultra bag standing in front of stacked warehouse bags'},
      {file: 'soap-base-ultra-label.jpg', view: 'Label detail', alt: 'Close front view of the NIMIR Soap Base Ultra bag and its 25 kg label'},
    ],
  },
];

export const soapBagImage = (file: string) => `/images/soap-bags/${file}`;
