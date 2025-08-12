import React from "react";

type PageProps = {
  params: Promise<{ productId: string }>;
};

const ProductsPage = async ({ params }: PageProps) => {
  const { productId } = await params;

  return <div>ProductsPage {productId}</div>;
};

export default ProductsPage;
