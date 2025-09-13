// import Profile from "./Profile.jsx"
import Productcard from "./ProductCard.jsx"
import "./productcard.css"
import "./app.css"
import UserAvatar from "./UserAvatar.jsx"
import "./UserAvatar.css"
function App() {
  const product1 = { product: "football", price: 20, instock: true }
  const product2 = { product: "shoes", price: 30, instock: false }
  const Person1 = { namee: "G.ASWIN", course: "B-Tech", roll: "24VV1A0522", DOB: "14/06/2006" }


  return (
    <div className="container">
      <Productcard product={product1} />
      <Productcard product={product2} />
      {/* <UserAvatar Person={Person1} /> */}
    </div>
  )
}

export default App
