import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <>
            <main className="d-flex flex-column justify-content-center align-items-center vh-100">
                <p className="display-1 text-danger">404</p>
                <h1>Page not found</h1>
                <p className="lead">Sorry, we couldn’t find the page you’re looking for.</p>
                <div>
                    <Link to="/">
                        <button className="btn btn-link" >
                            Go back home
                        </button>
                    </Link>
                </div>
            </main>
        </>
    );
}

export default ErrorPage;