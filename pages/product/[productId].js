import React from "react";
import { useRouter } from "next/router";

const ProductItem = () => {
  //* sin destructurar
  /*   const router = useRouter();
  return <div>Página de produto: {router.query.productId}</div>; */
  //* destructurarando
  const {
    query: { productId },
  } = useRouter();
  return <div>Página de produto: {productId}</div>;
};

export default ProductItem;
