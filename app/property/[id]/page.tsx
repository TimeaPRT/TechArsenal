import PropertyClient from './PropertyClient';
import { properties } from '@/data/properties';

export async function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id.toString(),
  }));
}

export default async function PropertyPage({ params }: { params: { id: string } }) {
  const property = properties.find(p => p.id === parseInt(params.id));

  return <PropertyClient property={property} />;
}
