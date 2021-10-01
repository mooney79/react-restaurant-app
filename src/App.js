import {useEffect, useState} from 'react'
import MenuList from './components/MenuList';
import MenuNav from './components/MenuNav';
import Order from './components/Order';
import {Menu} from './utilities/Menu';
import OrderForm from './components/OrderForm';
import MenuPreview from './components/MenuPreview';

import './App.css';    

function App() {
  const [selection, setSelection] = useState('all');
  const [subtotal, setSubtotal] = useState(0);
  const [order, setOrder] = useState([]);
  const [checkout, setCheckout] = useState(false);


  useEffect(() => {
    let orderSubtotal = 0;
    for (let i=0; i < order.length; i++) {
      orderSubtotal += order[i].priceCents;
    }
    setSubtotal(orderSubtotal);
  }, [order]);

  let mainpane;
  let sidepane;
  let navpane;
  if (!checkout) {
      mainpane = <MenuList Menu={Menu} selection={selection} order={order} setOrder={setOrder}/>
      navpane =  <MenuNav Menu={Menu} selection={selection} setSelection={setSelection}/>
      sidepane = <Order order={order} subtotal={subtotal} setOrder={setOrder} setCheckout={setCheckout}/>
      
  } else {
      mainpane = <OrderForm order={order} subtotal={subtotal} setOrder={setOrder} setCheckout={setCheckout}/>
      navpane = null;
      sidepane = <MenuPreview />
  }

  return (
    <div className="App">
       <header>          
          <h1>Mr. Fancy's Pizza</h1>          
       </header>
      {mainpane}
      {navpane}
      {sidepane}
       
    </div>
  );
}

export default App;

/*

Getting Started (Thinking in React: Mock + Step 1)
     Produce a functional static mockup 


 Hey Mikey, I Think He Likes It Mode
 Create another view that gives the owner the ability to view the orders and "complete" them.


 |-----------------------------------------|
 |    VIC'S PIZZA                    |check|
 |  |----------------------------|   | out |
 |  | item....price              |   ------|
 |  | item....price              |    Sub: |
 |  | item....price              |         |
 |  | item....price              |         |
 |  ------------------------------         |
 |_________________________________________|

 If check out selected, menu and check out screens should swap places...

 |-----------------------------------------|
 |    VIC'S PIZZA                    |back2|
 |  |----------------------------|   |menu |
 |  | order item..qty..price     |   ------|
 |  | order item..qty..price     |         |
 |  | order item..qty..price     |         |
 |  | Subtotal: $  |placeOrder|  |         |
 |  ------------------------------         |
 |_________________________________________|

*/
