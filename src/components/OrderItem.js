// import Order from "./Order";

function OrderItem(props){
    function handleClick(event){
        const index=props.order.findIndex(orderItem => orderItem.name === event.target.name);
        const remainingOrder = [...props.order];
        remainingOrder.splice(index, 1);
        props.setOrder(remainingOrder);
    }
    return (
        <li>
            <div className="menu-line">
                <span>{props.name}</span>
                <div className="line-end">
                    <span>{props.priceStr}</span>
                    <button type="button" onClick={handleClick} name={props.name}>remove</button>
                </div>
            </div>
            
        </li>
    )
}

export default OrderItem;

