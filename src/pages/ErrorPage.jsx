import { Link } from "react-router-dom";

function ErrorPage(){
    return (
        <>
            <p>404, Page Not Found.</p>
            <p>Go back to <Link to="/">
                Homepage.
            </Link></p>
        </>
    );
}

export default ErrorPage;