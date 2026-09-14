import {Suspense} from 'react';
import ProductCatalogueFromQuery, {ProductCatalogue} from '@/components/product-catalogue';

export const metadata = {title: 'Our products'};

export default function Products() {
  return (
    <Suspense fallback={<ProductCatalogue/>}>
      <ProductCatalogueFromQuery/>
    </Suspense>
  );
}

