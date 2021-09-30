// import {useState} from 'react';
import MenuNavButton from './MenuButtons';
import {Menu} from './Menu';

function MenuNav(props){
    const categories = Menu.map(category => category.category);
    const uniqueCategories = [...new Set(categories)];
    const menuButtonHTML = uniqueCategories.map(category => <MenuNavButton key={category} 
        value={category} setSelection={props.setSelection} selection={props.selection}/>);
    
    return(
        <div className="nav-button-div">
            {menuButtonHTML}
        </div>
    )
}

export default MenuNav;



