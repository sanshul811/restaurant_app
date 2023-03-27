import React,{useState,useEffect} from 'react'
import Navbar from './Nav';
import Home from './Home';
import Confirmation from './Confirmation';
import Order from './Order';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import { AppContext } from './context';
import { useParams } from 'react-router-dom';

function App() {
  
  const { myParam } = useParams();
  console.log("myParam in App ",myParam);

  
  
  const [items, setItems] = useState([]);
 

  


  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
    console.log("running in app")
  }, [items]);

   
    
  
  return (
    <Router>
      
      <Navbar/>

      <Routes>
        
        <Route path="/:myParam" element={<Home  />}/>
        <Route path="/confirmation/:myParam"element={<Confirmation />}/>
        <Route path="orders/:myParam"element={<Order/>}/>
        
      </Routes>
     
    </Router>
  );
}

export default App;
