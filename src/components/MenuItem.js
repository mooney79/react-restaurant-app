
function MenuItem(props){
    function handleClick(event){
        console.log(props);
    }
    return (
        <li>
            <div className="menu-line">
                <span>{props.name}</span>
                <div className="line-end">
                    <span>{props.priceStr}</span>
                    <button type="button" onClick={handleClick} name={props.name}>+</button>
                </div>
            </div>
            
        </li>
    )
}

export default MenuItem;

//Add ability to sort by Categories
//Buttons across the top?
//Let's look.