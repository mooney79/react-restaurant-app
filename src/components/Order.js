import OrderItem from "./OrderItem";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Order(props){
    // const orderHTML = props.order.map(food => <OrderItem key={food.name} {...food} order={props.order} setOrder={props.setOrder}/>);

    return (
        <Card className="sidepane">
            <i className="fas fa-car-alt"></i> &nbsp;&nbsp; Items in your cart!: {props.order.length} &nbsp;<i className="fas fa-shopping-cart"></i>
            <p> <span>Subtotal:</span>&nbsp; ${props.subtotal/100}</p>
            {/* {orderHTML} */}
            <Button type="button" onClick={()=>props.setCheckout(true)} variant="primary"> Checkout</Button>
        </Card>
    )
}

export default Order;

//Do I increment reproduced orders, or just look for repeats?

//What do I want to show in "preview mode?"
/*
Total number of items in your order (a la ToDo list)...
Running subtotal, updated every time it changes (useEffect?) useState?
Depends, I guess, on whether Orderitems is the state and subtotal is a side
effect, or if they're both examples of state...
"Checkout Button"
Button swaps views -- Menu gets previewed in side pane instead.
Main view becomes primary "order" form, complete with list of items, 
subtotal...
Then a form to enter address (for delivery)
and a submit button.

I almost feel like I build the main orderform in the same component as the MenuList
and the Menu preview in this component, that way I only have to style them each
once for position.

Yep, let's try that.


*/