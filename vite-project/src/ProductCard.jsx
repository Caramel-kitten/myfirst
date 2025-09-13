function ProductCard({
  product
}
)  {

const Containerstyle = {
  // Color: rgb(0, 0, 0),
  FontWeight: 'bold',
  FontSize: 'larger',
  FontFamily: 'lucida sans',
  PaddingLeft: '8px',
  Border: 'Solid',
  MarginLeft: '16px',
  BorderRadius: '8px',
  BorderColor: 'Aqua'
}
  return(
    <div style={Containerstyle} className="product">
      <p className="l1">product name :{product.product}</p>
      <p className="l2">product price: {product.price}</p>
      <p className="l3">product is :{product.instock?<span className="s1">"In stock"</span>:<span className="s2">"Out of stock" </span>}</p>

    </div>
  )
}

export default ProductCard
