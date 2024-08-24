import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="newsletter">
                <h2>Sign up for our newsletter</h2>
                <p>Be the first to know about our special offers, new product launches and event</p>
                <div className="newsletter-form">
                    <input className="email" type="text" name="email" id="email" placeholder="Email Address" />
                    <input className="signup" type="button" value="Sign Up" />
                </div>
            </div>
            <div className="footer-link-section">
                <h4>Shop</h4>
                <ul>
                    <li>Women's Clothing</li>
                    <li>Men's Clothing</li>
                    <li>Jewelery</li>
                    <li>Electronics</li>
                </ul>
            </div>
            <div className="footer-link-section">
                <h4>Help</h4>
                <ul>
                    <li>Help Center</li>
                    <li>Order Status</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="footer-link-section">
                <h4>About</h4>
                <ul>
                    <li>About Us</li>
                    <li>Explore our stories</li>
                </ul>
            </div>

            <div className="footer-link-section">
                <h4>Developer</h4>
                <ul>
                    <li><a href="https://github.com/sujanlimbu" target="_blank">Author: Sujan Khapung</a></li>
                    <li><a href="https://github.com/sujanlimbu/cv-generator" target="_blank" rel="noopener noreferrer">Source Code Here</a></li>
                    <li><a href="https://fakestoreapi.com/" target="_blank">API powered by Fake Store API</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;