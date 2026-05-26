// Write React JS script to display three products. Products having title, product image, price and 
// description. All three products should be horizontally adjacent to each other. Note: using props 
// show all products and use Functional component for complete this script.
function PB315_c(props) {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            {props.products.map((product, index) => (
                <div key={index} style={{ border: '1px solid #ccc', padding: '10px', width: '30%' }}>
                    <h2>{product.title}</h2>
                    <img src={product.image} alt={product.title} style={{ width: '100%' }} />
                    <p>Price: {product.price}</p>
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
    );
}
export default PB315_c;