// create a react app to perform the following operations 1. main.jsx to setup the router and defind the routes 2. home.jsx for the home page 3. product.jsx for the product page 4.create an react router include two routes home and product implement navigation between this routes create the following routes and componenets when a user click on the home page link it should navigate to the home page and display welcome to  our shop within an h1 tag with blue color also include link to product page  a product page that display the product information name ,price and image using props when a user click on the product page link it should navigate to the product page and display product detail using props.
function Product(props){
    return(
        <div>
            <h1>Product Page</h1>
            {props.info.map((item,index)=>(
                <div key={index}>
                    <h2>{item.name}</h2>
                    <p>{item.price}</p>
                    <img src={item.image} alt={item.name} style={{width:"200px"}} />
                </div>
            ))}
            
        </div>
    )
}
export default Product