// create a react app to perform the following operations 1. main.jsx to setup the router and defind the routes 2. home.jsx for the home page 3. product.jsx for the product page 4.create an react router include two routes home and product implement navigation between this routes create the following routes and componenets when a user click on the home page link it should navigate to the home page and display welcome to  our shop within an h1 tag with blue color also include link to product page  a product page that display the product information name ,price and image using props when a user click on the product page link it should navigate to the product page and display product detail using props.
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Home from './Home';
import Product from './Product'
import Nopage from './Nopage';
function My1() {

    <h1>hjihu</h1>
    const productData = [{
        name: "Laptop",
        price: "$1000",
        image: "https://cdnb.artstation.com/p/marketplace/presentation_assets/003/430/263/large/file.jpg?1706950302"
    },
    {
        name: "Phone",
        price: "$500",
        image: "https://cdnb.artstation.com/p/marketplace/presentation_assets/003/430/263/large/file.jpg?1706950302"
    }];
    return (
        <div>
            <Router>
                <div className="main-route">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/product">Product</Link>
                        </li>
                    </ul>
                </div>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product" element={<Product info={productData} />} />
                    <Route path="*" element={<Nopage />} />
                </Routes>
            </Router>
        </div>
    );
}
export default My1;