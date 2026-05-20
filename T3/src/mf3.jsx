// array of 10 number  display only even number using filter method 
function Mf3() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <>
            <h1>Even Numbers</h1>
            {numbers
                .filter((num) => num % 2 === 0).join(", ")
                }
        </>
    );
}
export default Mf3;