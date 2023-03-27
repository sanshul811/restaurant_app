
import React,{useReducer,useContext,useState} from 'react'
import { AppContext } from './context';
function OrderCard(props) {
  

   
  
    
  return (
    
    <ol className="list-group ">
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">{props.title}</div>
    </div>
    <span className="badge bg-primary rounded-pill">{props.count}</span>
    <span className="badge bg-primary rounded-pill">{props.cost}</span>
  </li>
</ol>
    
  );
}

export default OrderCard;