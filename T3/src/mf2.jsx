// create react component that contain array of 10 number multiply this number by 5 asd display uptaed value
function Mf2() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
    return (    
        <>
            <h1>Updated Values</h1>
            {numbers
            .map((num) => (
                <div key={num}>
                    <p> {num * 5}</p>
                </div>
            ))}
        </>
    );
}
export default Mf2;