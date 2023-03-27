import React,{useState,useContext,useEffect} from 'react'
import Navbar from './Nav';
import { AppContext } from './context';
import ConfirmationCard from './ConfirmationCard';
import axios from 'axios';
function Confirmation() {
  // const data=useGlobalContext();
  const storedItems = JSON.parse(localStorage.getItem('items'))
  const myParam = parseInt(JSON.parse(localStorage.getItem('myParam')))
 console.log("my params in confirmation",myParam)
  
  const[products,setProducts]=useState(storedItems);
   console.log("confirmation")
 
   
  
   function changeList(id,command)
   {
    const json = JSON.stringify(products);
    const newArray = JSON.parse(json);
    var i;
    var val;

    for(i=0;i<newArray.length;i++)
    {
      if(newArray[i].id===id)
      {
        
        break;
      }
    }
    
   
    if(command==="Add")
    {
      
       newArray[i].count++;
       newArray[i].cost=newArray[i].permanent_cost*newArray[i].count
       setProducts(newArray);
       

    }
    else
    {
      if(newArray[i].count===1)
      {
        
         newArray.splice(i,1);
         setProducts(newArray);
      } 
      else
      {
        
        newArray[i].count--;
        newArray[i].cost=newArray[i].permanent_cost*newArray[i].count
        setProducts(newArray);
      }
    }
    
      

   }
  function placeOrder(event)
  {
    
    console.log("pringint in confirmation card")
    console.log(storedItems)
    var i;
    for(i=0;i<products.length;i++)
    {
      console.log(products[i])
      axios.post('http://127.0.0.1:8000/order/', {
      item: products[i].id,
      dish_name: products[i].title,
      table:myParam,
      quantity:products[i].count,
      cost:products[i].cost
      }).then((response) => {
        console.log(response);
        }, (error) => {
        console.log(error);
      });

    }

    setProducts([]);
    // localStorage.clear();
    localStorage.removeItem("items")
    
    
    
    console.log("Order Placed")

  } 
  
   

  return (
    <div className="App">

      <header className="App-header">
      </header>
      {products.map((product) => (
        <ConfirmationCard key={product.id} id={product.id} count={product.count} title={product.title}changeList={changeList} cost={product.cost}/>
      ))}
      <div className='place_order_button'>
      <button type="button" className="btn btn-primary" onClick={placeOrder}>Place Order</button>
      </div>
    </div>
  );
}

export default Confirmation;