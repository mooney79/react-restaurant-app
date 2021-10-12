import {useEffect, useState} from 'react'
import MenuList from './components/MenuList';
import MenuNav from './components/MenuNav';
import Order from './components/Order';
// import {Menu} from './utilities/Menu';
import OrderForm from './components/OrderForm';
import MenuPreview from './components/MenuPreview';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo2 from './images/logo.png';

import './App.css';    

function App() {
  const [selection, setSelection] = useState('all');
  const [subtotal, setSubtotal] = useState(0);
  const [order, setOrder] = useState([]);
  const [checkout, setCheckout] = useState(false);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetchData()
  }, []);

  useEffect(() => {
    let orderSubtotal = 0;
    for (let i=0; i < order.length; i++) {
      orderSubtotal += order[i].priceCents;
    }
    setSubtotal(orderSubtotal);
  }, [order]);
  



    async function fetchData(){
      const response = await fetch('https://django-restaurant-api-mooney79.herokuapp.com/api_v1/menuitems/')
      if (response.ok){
        const data = await response.json();
        setMenu(data);
        console.log(menu)
      }
    }
    

  let mainpane;
  let sidepane;
  let navpane;
  if (!checkout) {
      navpane =  <MenuNav Menu={menu} selection={selection} setSelection={setSelection}/>  
      mainpane = <MenuList Menu={menu} selection={selection} order={order} setOrder={setOrder}/>
      sidepane = <Order order={order} subtotal={subtotal} setOrder={setOrder} setCheckout={setCheckout}/>      
  } else {
      mainpane = <OrderForm order={order} subtotal={subtotal} setOrder={setOrder} setCheckout={setCheckout}/>
      navpane = null;
      sidepane = <MenuPreview setCheckout={setCheckout}/>
  }

  return (
    <div className="App">

       <header>
         <div className="wrap">
           <img src={logo2} alt='logo' className="logo" />           
          <h1>Mr. Fancy's Pizza</h1>
         </div>
          {sidepane}
      </header>
      <div className="testcontainer">
        {mainpane}
        {navpane}
      </div>
       
    </div>
  );
}

export default App;