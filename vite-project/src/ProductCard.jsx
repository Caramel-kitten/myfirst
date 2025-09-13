function productcard({
  product,price
  
  }
)  
{
  return(
    <div>
      <p>product name:{product}</p>
      <p>product price: {price}</p>
      {/* <p>product is {instock?" in stock":"out of stock"}</p> */}
    </div>
  )
}

export default productcardm