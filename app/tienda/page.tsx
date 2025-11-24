import { supabase } from '@/lib/supabaseClient';
import Image from 'next/image';

export default async function TiendaPage() {
  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error(error);
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tienda de Ultimate</h1>

      {!products || products.length === 0 ? (
        <p>No hay productos aún.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product) => (
            <a
              key={product.id}
              href={`/producto/${product.id}`}
              className="border rounded-lg p-4 hover:shadow"
            >
              {product.image_url && (
                <Image
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-40 object-cover mb-2 rounded"
                  width={400}
                  height={160}
                />
              )}
              <h2 className="font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-600 line-clamp-2">
                {product.description}
              </p>
              <p className="mt-2 font-bold">
                {product.price} {product.currency}
              </p>
            </a>
          ))}
        </div>
      )}
    </main>
  );
}
