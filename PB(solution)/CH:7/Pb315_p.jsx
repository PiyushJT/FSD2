// Write React JS script to display three products. Products having title, product image, price and 
// description. All three products should be horizontally adjacent to each other. Note: using props 
// show all products and use Functional component for complete this script.
import PB315_c from './Pb315_c.jsx';
function PB315_p() {
  const products = [    
    {
      title: "Product 1",
      image: "https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg",
        price: "$19.99",
        description: "This is the description for Product 1."
    },
    {
      title: "Product 2",
        image: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",   
        price: "$29.99",
        description: "This is the description for Product 2."
    },
    {
      title: "Product 3",
      image: "https://thumbs.dreamstime.com/b/autumn-nature-landscape-colorful-forest-autumn-nature-landscape-colorful-forest-morning-sunlight-131400332.jpg",
      price: "$39.99",
      description: "This is the description for Product 3."
    }
  ];

  return (
    <div>
      <h1 style={{ color: 'blue' }}>pb315</h1>
      <PB315_c products={products} />
    </div>
  );
}

export default PB315_p;