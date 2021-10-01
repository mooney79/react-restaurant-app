import Button from 'react-bootstrap/Button';
function MenuPreview(props){
    function handleClick(){
        props.setCheckout(false);
    }
    return(
        <div className="sidepane back-menu">
        <Button className="back-button" variant="primary" onClick={handleClick}>
            Return to the Menu
        </Button>
        </div>
    )
}

export default MenuPreview