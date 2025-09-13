import Profile from "./Profile.jsx"
import Productcard from "./ProductCard.jsx"
function App() {
  const product1 = {product:"football",price:20,instock:true}
  const {product,price,instock} = product1
 
    return (
    <div>
     <Productcard product ={product} price = {price}/>
    </div>
  )
}

export default App
