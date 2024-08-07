import Home from "./Home";
import ErrorPage from "./pages/ErrorPage";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

const routes = [
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: "/shop",
        element: <Shop />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/cart",
        element: <Cart />
    }
];

export default routes;