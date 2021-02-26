import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const products = [
    {name:'photoshop', price:'$350'},
    {name:'pdf reader', price:'$550'},
    {name:'photoeditor', price:'$150'},
    {name:'photoeditor', price:'$150'}
  ]
 
 
  const friends = ['samir','foridul','maruf','rafin','piklu']
  return (
    <div className="App">
      <header className="App-header">
      <ul>
          {friends.map(friend=><li>{friend}</li>)}
          {products.map(product=><li>{product.price}</li>)}
          {products.map(product=><li>{product.name}</li>)}
        </ul>
        {/* ===========signle type send======= */}
        {/* <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product>
        <Product name={products[2].name} price={products[2].price}></Product> */}

        {/* ============multitype send======== */}

        <Product name={products[0]}></Product>

        {/* ===========dinamic data send============ */}
        {
          products.map(pd=> <Product name={pd}></Product>)
        }

        
        <User></User>
        <Counter></Counter>
        <p>my first paragraph</p>

        {/* ===========signle type send======= */}

        {/* <Persons name = {friends[0]} naika = "sabana"></Persons>
        <Persons name = {friends[1]}naika = "sabnur"></Persons>
        <Persons name = {friends[2]} naika = "apu"></Persons>
        <Persons name = {friends[3]} naika = "sabnaj"></Persons> */}
        {/* ===========dinamic data send============ */}
        {
          friends.map(fd=> <Persons name={fd} ></Persons>)
        }

      </header>
    </div>
  );
}

function Counter(){
  const[count,setCount]= useState(0)
  const handelIncrease = () =>setCount(count+1);
  return(
    <div>
      <button onMouseEnter={handelIncrease}>Increase</button>
      <h1>count:{count}</h1>
      <button onClick={() =>setCount(count-1)}>Decrese</button>
      
      
    </div>
  )
}
function Product(props){
  const productStyle = {
    border : "2px solid gray",
    color : 'white',
    backgroundColor : 'black',
    height : '220px',
    width : '300px',
    float : 'left',
    marginTop:'10px'
  }
  return(
    <div style = {productStyle}>
      <h2>name:{props.name.name}</h2>
      <h2>price:{props.name.price}</h2>
      <button >BuyNow</button>
    </div>
  )
}
    
function User(){
 const [users,setUsers] = useState([]);
 useEffect(()=>{
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res => res.json())
   .then(data => setUsers(data));
 })
  return(
    <div>
      <h3>Dynamic user:{users.length}</h3>
      <ul>
       {
          users.map(user => <li>{user.name+'  '+ user.email}</li>)
       }
      </ul>
    </div>
  )
} 




function Persons(props){
  const style = {
    border : '2px solid blue',
    color : 'yellow',
    margin:'10px',
    width:'300px'

  }
  return(
    <div style ={style}>
      <h1>nayok:{props.name}</h1>
      {/* <h3>Hero of {props.naika}</h3> */}
    </div>
  )
    
  
}



export default App;
