import { useState } from 'react';
import OrderItem from "./OrderItem";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function OrderForm(props){

    const [state, setState] = useState({
        firstName: "",
        lastName: '',
        address: "",
        city: "",
        state: "",
        zip: '',
    })

    let customer;
    const orderHTML = props.order.map(food => <OrderItem key={food.name} {...food} order={props.order} setOrder={props.setOrder}/>);

    function handleSubmit(event){
      event.preventDefault();
      customer = {firstName: state.firstName, lastName:state.lastName, address: state.address, city: state.city, state: state.state, zip: state.zip};
      submitOrder(customer, props.order);
      props.setCheckout(false);
      props.setOrder([]);
    }


  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setState({...state, [name]: value});
  }




async function submitOrder(customer, order) {
  const newOrder = {customer, order};
  const response = await fetch(`http://tiny-taco-server.herokuapp.com/fancy-restaurant/`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newOrder),
  }).catch(console.log('Something went wrong'));
  if (response.ok){
        console.log('Order Submitted!');
  }
}


   return(
     <>
     <Form onSubmit={handleSubmit} className="mainpane solitarymain">
          <input name="firstName" type="text" id="firstName" value={state.firstName} onChange={handleChange} autoComplete="off" placeholder="First Name"/>
          <input name="lastName" type="text" id="lastName" value={state.lastName} onChange={handleChange} autoComplete="off" placeholder="Last Name"/>
          <input name="address" type="text" id="address" value={state.address} onChange={handleChange} autoComplete="off" placeholder="123 Placeholder St"/>
          <input name="city" type="text" id="city" value={state.city} onChange={handleChange} autoComplete="off" placeholder="City"/>
          <input name="state" type="text" id="state" value={state.state} onChange={handleChange} autoComplete="off" placeholder="State"/>
          <input name="zip" type="text" id="zip" value={state.zip} onChange={handleChange} autoComplete="off" placeholder="Zip"/>
          {orderHTML}
          <div className="subtotal">
              <div className="vert">
                    <p> <span>Subtotal:</span>&nbsp; ${props.subtotal/100}</p><br />
                    <Button type="submit" variant="primary" className="form-button">Submit Order</Button>
               </div>
          </div>
    </Form>
    
     </>
   )
 }
 
 export default OrderForm;
