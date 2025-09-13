function ProductCard(
  product
)  {


  return(
    <div  className="product">
      <p className="l1">product name :{product.product}</p>
      <p className="l2">product price: {product.price}</p>
      <p className="l3">product is :{product.instock?<span className="s1">"In stock"</span>:<span className="s2">"Out of stock" </span>}</p>

    </div>
  )
}

export default ProductCard
