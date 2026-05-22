// create a react a app that display list of product using props 1) create a product card component that display product detail like title , price , rate , img 2) use product list component to store product data and display multiple card component using map method 
function ProductCard(props) {
    return ( 
        <>
            {props.product.map((prod, index) => (
                <div key={index}>
                    <img src={prod.img} alt={prod.title} />
                    <h2>{prod.title}</h2>
                    <p>Price: {prod.price}</p>
                    <p>Rating: {prod.rate}</p>
                </div>
            ))}
        </> 
    );
}
export default ProductCard;