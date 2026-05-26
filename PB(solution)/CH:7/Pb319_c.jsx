// Create a React function component named File1 that receives two props, productName and 
// price. The component should display the product name and price. Additionally, add a button 
// labeled "Add to cart" to the component. When the button is clicked onClick event triggered and 
// an alert should be displayed with the message "Your Product is Added to cart!".
function PB319_c(props) {
    const handleClick = () => {
        alert("Your Product is Added to cart!");
    }
    return (
        <div>
            <h2>Product Name: {props.productName}</h2>
            <h2>Price: {props.price}</h2>
            <button onClick={handleClick}>Add to cart</button>
        </div>
    )
}
export default PB319_c; 