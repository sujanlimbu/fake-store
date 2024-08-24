import { Link } from "react-router-dom";
import "./ErrorPage.css"

function ErrorPage({ message }) {
    return (
        <>
            <div className="content-body error-page-content">
                <p className="">404</p>
                <h1>{`${message}`}</h1>
                <p className="">Sorry, we couldn’t find the page you’re looking for.</p>
                <div>
                    <Link to="/">
                        <button className="btn btn-secondary" >
                            Go back home
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default ErrorPage;