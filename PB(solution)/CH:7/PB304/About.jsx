// Create react app and use routing functionality of react to perform the tasks as asked.
// Create one file named Main.js which contains links for home and about page and routing 
// functionality.
// In Home.js file add one image and heading(h1) "LJ University"
// In About.js file add branch list (CSE,IT,CE)
function About() {
    return (
        <div>   
            <h1 style={{ color: 'blue' }}>About Page</h1>
            <h2>Branch List:</h2>
            <ul>
                <li>CSE (Computer Science and Engineering)</li>
                <li>IT (Information Technology)</li>
                <li>CE (Civil Engineering)</li>
            </ul>
        </div>
    )
}
export default About;