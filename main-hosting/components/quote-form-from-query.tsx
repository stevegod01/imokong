'use client';

import {useSearchParams} from 'next/navigation';
import QuoteForm from './quote-form';

export default function QuoteFormFromQuery() {
  const searchParams = useSearchParams();
  const product = searchParams.get('product') || '';
  const variant = searchParams.get('variant') || '';

  return (
    <QuoteForm
      key={JSON.stringify([product, variant])}
      initialProduct={product}
      initialVariant={variant}
    />
  );
}
