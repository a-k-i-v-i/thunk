
import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { IObj } from './interface/Interface';


function App() {
  const [product, setProduct] = useState<IObj[]>([])
 
const fetchingFn = async()=>{
  const res = await axios.get('https://fakestoreapi.com/products?limit=10')
  const {data} = await res
  await setProduct(data)
}
useEffect(()=>{
  fetchingFn()
},[])
console.log(product);


  return (
    <div className="App">
     
    </div>
  );
}

export default App;
