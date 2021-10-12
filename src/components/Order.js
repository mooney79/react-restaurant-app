// import OrderItem from "./OrderItem";
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