import MenuItem from "./MenuItem";

function MenuList(props){

    // const MenuHTML = props.Menu.map(food => <MenuItem key={food.name} {...food} />);

    let MenuHTML;
    let shownItems=[{}];
    if (props.selection === "all"){
        MenuHTML = props.Menu.map(food => <MenuItem key={food.name} {...food} order={props.order} setOrder={props.setOrder}/>);
    } 
    else {
        shownItems = props.Menu.filter(food => props.selection === food.category);

        MenuHTML = shownItems.map(shownItem => <MenuItem key={shownItem.name} {...shownItem} order={props.order} setOrder={props.setOrder}/>);
    }

    return (
        <ul className="mainpane">
                {MenuHTML}
        </ul>
    )
}

export default MenuList;



   

