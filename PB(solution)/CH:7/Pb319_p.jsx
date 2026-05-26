// Create a React function component named File1 that receives two props, productName and 
// price. The component should display the product name and price. Additionally, add a button 
// labeled "Add to cart" to the component. When the button is clicked onClick event triggered and 
// an alert should be displayed with the message "Your Product is Added to cart!".
import Pb319_c from './Pb319_c.jsx';
function PB319_p() {
    const product = {
        productName: "Sample Product",
        price: "$19.99"
    };
    return (
        <div>
            <h1 style={{ color: 'blue' }}>pb319</h1>
            <Pb319_c productName={product.productName} price={product.price} />
        </div>
    )
}
export default PB319_p;