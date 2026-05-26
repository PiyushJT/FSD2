// Create react app to pass product image, name and price as properties from one component to 
// another component. Add an array of objects with pic, name and price properties of 2 products. 
// Display Image name and price of the products in browser using map method.
function PB311() {
    const products = [
        {
            pic: "https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg",
            name: "Product 1",
            price: "$10"
        },
        {
            pic: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
            name: "Product 2",
            price: "$20"
        }
    ];
    return (
        <div>
            <h1 style={{ color: 'blue' }}>pb311</h1>
            <h1 style={{ color: 'blue' }}>Product List</h1>
            {products.map((product, index) => (
                <div key={index}>
                    <img src={product.pic} alt={product.name} style={{ width: '100px', height: '100px' }} />
                    <h2>{product.name}</h2>
                    <p>Price: {product.price}</p>
                </div>
            ))}
        </div>
    )
}
export default PB311;