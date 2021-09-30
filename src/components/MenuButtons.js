// import {useState} from 'react';
// import MenuItem from "./MenuItem";

function MenuButtons(props){

    function handleClick2(event){
        if (props.selection === props.value){
            props.setSelection('all');
            console.log(props.selection, props.value);
        } else {
            props.setSelection(props.value);
            console.log(props.selection, props.value);
        }
    }

    return(

        <>
            <button type="button" key={props.value} onClick={handleClick2}>{props.value} </button>
        </>
    )


}

export default MenuButtons;




