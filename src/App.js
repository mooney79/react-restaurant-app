import {useState/*, useEffect*/} from 'react'
import MenuList from './components/MenuList';
import MenuNav from './components/MenuNav';
import Order from './components/Order';
import {Menu} from './components/Menu';

import './App.css';    

function App() {
  const [selection, setSelection] = useState('all');
  const [subtotal, setSubtotal] = useState(0);
  const [order, setOrder] = useState([]);

  return (
    <div className="App">
       <header>          
          <h1>Mr. Fancy's Pizza</h1>          
       </header>
      
       <MenuList Menu={Menu} selection={selection}/>
       <MenuNav Menu={Menu} selection={selection} setSelection={setSelection}/>
       <Order />
    </div>
  );
}

export default App;

/*

Getting Started (Thinking in React: Mock + Step 1)
     Produce a functional static mockup 

 Order view
 Define an Order component
 Render an instance of Order component
 Define an order object in your application state
 Pass the order to the Order component
 console.log the order when I click on the foods price
 Add the food object to the order
 In Order, console.log the order
 In Order, console.log a menu item every time it is added to the order
 Render the data from the order every time the order is updated
 In Order, define a subtotal function that calculates the total price.
 console.log, then render the subtotal, every time the order is updated

 Order data
 Save the order data to your RESTful API when the order is submitted

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
