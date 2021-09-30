import MenuItem from "./MenuItem";

function MenuList(props){

    // const MenuHTML = props.Menu.map(food => <MenuItem key={food.name} {...food} />);

    let MenuHTML;
    let shownItems=[{}];
    if (props.selection === "all"){
        MenuHTML = props.Menu.map(food => <MenuItem key={food.name} {...food} />);
    } 
    else {
        shownItems = props.Menu.filter(food => props.selection === food.category);

        MenuHTML = shownItems.map(shownItem => <MenuItem key={shownItem.name} {...shownItem}/>);
    }

    return (
        <ul className="menu">
                {MenuHTML}
        </ul>
    )
}

export default MenuList;



   

