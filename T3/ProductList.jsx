// create a react a app that display list of product using props 1) create a product card component that display product detail like title , price , rate , img 2) use product list component to store product data and display multiple card component using map method 
import ProductCard from './ProductCard.jsx'
function ProductList() {
    const products = [
        { "title": "Product 1", "price": "$10", "rate": "4.5", "img": "https://tse2.mm.bing.net/th/id/OIP.96zMshtN7pHiZU4Da4wnvgHaDw?cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3" },
        { "title": "Product 2", "price": "$20", "rate": "4.0", "img": "https://tse2.mm.bing.net/th/id/OIP.96zMshtN7pHiZU4Da4wnvgHaDw?cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3" },
        { "title": "Product 3", "price": "$30", "rate": "5.0", "img": "https://tse2.mm.bing.net/th/id/OIP.96zMshtN7pHiZU4Da4wnvgHaDw?cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3" }
    ];
    return (
        <>
            <h1>product Details</h1>
            <ProductCard product={products} />
        </>
    );
}
export default ProductList;
