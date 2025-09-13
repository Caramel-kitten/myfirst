import "./app.css"
import ButtonClick from "./ButtonClick.jsx"
import { useState } from "react"
function App() {

  const handleClick = (name) => {
    alert('hello,' + name)
  }

  const [formdata,setformdata] = useState({
    email:"",
    password:""
})

  const handleChange = (event) => {
    console.log(event.target.name)
    console.log(event.target.value)
    setformdata(
      {
        ...formdata,
        [event.target.name]: event.target.value
      }
    )
  }

  const handleSubmit =(event) => {
    event.preventDefault()
    alert(`email: ${formdata.email} \n password: ${formdata.password} \n you are logged in`)
  }


  
  const [password,setpassword] = useState("")
  const [email,setemail] = useState("")
  const [count,setcount] = useState(0)

  const handleincrement =() =>{
    setcount((prevcount) => prevcount+1)
    console.log(count)
  }

  const handleemail =(event) =>{
    setemail(event.target.value)
  }

  const handlepassword =(event) =>{
    setpassword(event.target.value)
  }
  return (
    <div className="Maincontainer">
        <form onSubmit={handleSubmit}> 
        <p>type your email</p>
        <input type="text" name="email" placeholder="type your email" onChange={handleChange} />
        <input type="text" name="password" placeholder="password" onChange={handleChange} />
        <button type="submit">login</button> 
        <button onClick={handleincrement}>increment</button>
       </form> 
    </div>
  )
}

export default App
