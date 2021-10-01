// import {useState} from 'react';
// import MenuItem from "./MenuItem";

function MenuButtons(props){

    function handleClick2(event){
        if (props.selection === props.value){
            props.setSelection('all');
        } else {
            props.setSelection(props.value);
        }
    }

    return(

        <>
            <button className="nav-button" type="button" key={props.value} onClick={handleClick2}>{props.value} </button>
        </>
    )


}

export default MenuButtons;




