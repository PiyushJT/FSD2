// Create react app and use routing functionality of react to perform the tasks as asked.
// Create one file named Main.js which contains links for home and about page and routing 
// functionality.
// In Home.js file add one image and heading(h1) "LJ University"
// In About.js file add branch list (CSE,IT,CE)
function Home() {
    return (
        <div>
            <h1 style={{ color: 'blue' }}>Home Page</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9YYh5Fk1u9VsWWr1MhkyQeOzeNbtnnMO96g&s" alt="LJ University Logo" />
            <h1>LJ University</h1>
        </div>
    )
}
export default Home;