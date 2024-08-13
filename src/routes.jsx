import Home from "./Home";
import ErrorPage from "./pages/ErrorPage";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import ProductView from "./pages/ProductView";

const routes = [
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage message="Page not found"/>
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
    },
    {
        path: "/product/:productId",
        element: <ProductView />
    }
];

export default routes;