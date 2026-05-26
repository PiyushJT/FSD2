// Create a React app to perform tasks as asked using functional component:
// 1)Create a React Router that includes three routes: Home, Food Items, and Contact and
// implement navigation between these routes. 2)Create a route that displays a Home
// page, Food Items details page and Contact details page. 3) When a user clicks on
// Home page it should navigate to the home page and display “Welcome to LJU” in bold
// in the h1 heading. When a user clicks on a Food Items page, it should navigate to the
// Food Items Detail page and display three products&#39; information with name, price and
// description using props. And when the user clicks on Contact page it should navigate to
// contact details page and display contact information with blue color font.
function Contact() {
    return (
        <div>
            <h1 style={{ color: 'blue' }}>Contact Information</h1>
            <p>Email:
                <a href="mailto:info@ljU.com">info@ljU.com</a>
            </p>
            <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
        </div>
    )
}
export default Contact;