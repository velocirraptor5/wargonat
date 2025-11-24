interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  // 👇 desestructuramos después de hacer await
  const { id } = await params;

  console.log("Params en ProductPage:", { id });

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Producto {id}</h1>
      <p>Detalle del producto. Luego traeremos la info desde la BD.</p>
    </main>
  );
}
