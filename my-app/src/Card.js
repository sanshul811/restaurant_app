
import React,{useReducer,useContext} from 'react'
import { AppContext } from './context';
function Card(props) {
  
  function addItem(id, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            
            return true;
        }
    }
    
    return false;
}
  function handleClick(event)
  {
    console.log("printing in cards");
   
    const storedItems = JSON.parse(localStorage.getItem('items'))

    let object={id:event.target.value,count:1,title:event.target.getAttribute("title"), permanent_cost :parseInt(event.target.getAttribute("cost")),cost :parseInt(event.target.getAttribute("cost"))}

    if(addItem(event.target.value,storedItems)===false)
    {
        storedItems.push(object);
        localStorage.setItem('items', JSON.stringify(storedItems));

    }
    else
    {
      var i=0;
      for(i=0;i<storedItems.length;i++)
      {
        if(storedItems[i].id===event.target.value)
        {
          storedItems[i].count++;
          storedItems[i].cost=storedItems[i].permanent_cost*storedItems[i].count;
          localStorage.setItem('items', JSON.stringify(storedItems));
          break;
        }
      }

    }
    
    
    console.log(storedItems)
    event.preventDefault()
    

    
    
  
  }
 
  return (
    <div className="card" style={{width: "18rem"}}>
    {/* <img src="..." className="card-img-top" alt="..."/> */}
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <h6 className="card-text">Price : {props.cost}</h6>
  </div>
    <button type="button" className="btn btn-primary" onClick={handleClick} value={props.id} name={props.title}title={props.title} cost={props.cost}>ADD</button>
    </div>
  );
}

export default Card;