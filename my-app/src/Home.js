import React,{useContext,useState,useEffect} from 'react'
import Navbar from './Nav';
import products from './data'
import Card from './Card';
import { AppContext } from './context';
import axios from 'axios';
import { useParams } from 'react-router-dom';
function Home(props) {
  let [items, setItems] = useState([])
  const { myParam } = useParams();
  console.log("myParam in home ",myParam);
  useEffect(() => {
    localStorage.setItem('myParam', JSON.stringify(myParam));
    console.log("running in app")
  }, [myParam]);
  useEffect(() => {
    const res =  axios.get("http://127.0.0.1:8000/").then(function (response) {
    // console.log(response.data);
    setItems(response.data)
  })
  },[])
 console.log(items);
  return (
    <div className='Display'>
    <div className="App">
      
      {items.map((product) => (
        <Card key={product.id} title={product.item_name} id={product.id} cost={product.cost}/>
      ))}
    </div>
    </div>
  );
}

export default Home;