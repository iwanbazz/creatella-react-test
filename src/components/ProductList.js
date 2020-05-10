{
  /* Component that mapping ascii face item into grid */
}

import React from "react";
import Product from "./Product";

function ProductList({ products }) {
  return (
    <div className="row">
      {products.map((product, index) => (
        <Product key={product.id} index={index + 1} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
