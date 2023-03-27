import React,{useEffect,useState} from 'react'
import Navbar from './Nav';
import axios from 'axios';
import OrderCard from './OrderCard';
function Order() {
  const[items,setItems]=useState([]);
  const myParam = JSON.parse(localStorage.getItem('myParam'))
  console.log(typeof(myParam))
  useEffect(() => {
    const res =  axios.get("http://127.0.0.1:8000/order/"+myParam+"/").then(function (response) {
    // console.log(response.data);
    console.log(response.data)
    setItems(response.data)
  })
  },[])
console.log(items)
  return (
    <div className="App">
      <header className="App-header">
        
       {items.map((product) => (
        <OrderCard key={product.id} id={product.id} count={product.quantity} title={product.dish_name} cost={product.cost}/>
      ))}
      </header>
    </div>
  );
}

export default Order;