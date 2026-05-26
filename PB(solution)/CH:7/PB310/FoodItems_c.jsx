function FoodItems_c(props) {
    return (
        <div>
            {props.numbers.map((product, index) => (
                <div key={index}>
                    <h2>{product.name}</h2>
                    <p>Price: {product.price}</p>
                    <p>Description: {product.description}</p>
                </div>
            ))}
        </div>
    )
}
export default FoodItems_c;