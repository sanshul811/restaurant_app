
import React,{useReducer,useContext,useState} from 'react'
import { AppContext } from './context';
function ConfirmationCard(props) {
  console.log("confirmation card");
  console.log(props)

  const storedItems = JSON.parse(localStorage.getItem('items'))

 
  function handleClick(event)
  {
    var name=event.target.name;
    var val=event.target.value;
    props.changeList(val,name);
    

  }
    
  return (
    
    <ol className="list-group ">
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">{props.title}</div>
      <div>
      <button type="button" className="btn btn-primary btn-sm" onClick={handleClick} name="Add" value={props.id}>+</button>
      
      <button type="button" className="btn btn-primary btn-sm" onClick={handleClick} name="Remove" value={props.id}>-</button>
      </div>
    </div>
    <span className="badge bg-primary rounded-pill">{props.count}</span>
    <span className="badge bg-primary rounded-pill">{props.cost}</span>
  </li>
</ol>
    
  );
}

export default ConfirmationCard;