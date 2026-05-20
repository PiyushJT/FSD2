// that contain an array of fruit object with item id item name , price and availability perform the following task using map and filter first display only available fruit second increase thier price by 10 third display fruit name and updated price 
function Mf4() {
    const fruits = [
        {id:1, name:"Apple", price:100, available:true},
        {id:2, name:"Banana", price:50, available:false},
        {id:3, name:"Orange", price:80, available:true},
        {id:4, name:"Mango", price:120, available:false}
    ];
    return (    
        <>
            <h1>Available Fruits</h1>
            {fruits
            .filter((fruit) => fruit.available)
            .map((fruit) => (
                <div key={fruit.id}>
                    <p>Name: {fruit.name}</p>
                    <p>Price: {fruit.price + 10}</p>    
                </div>
            ))}
        </>
    );
}
export default Mf4;