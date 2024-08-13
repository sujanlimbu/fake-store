import { Link } from "react-router-dom";
import Header from "../components/Header";
import "./ErrorPage.css"

function ErrorPage() {
    return (
        <>
            <main className="wrapper">
                <Header />
                <div className="content-body error-page-content">
                    <p className="">404</p>
                    <h1>Page not found</h1>
                    <p className="">Sorry, we couldn’t find the page you’re looking for.</p>
                    <div>
                        <Link to="/">
                            <button className="btn btn-secondary" >
                                Go back home
                            </button>
                        </Link>
                    </div>
                </div>Ï
            </main>
        </>
    );
}

export default ErrorPage;