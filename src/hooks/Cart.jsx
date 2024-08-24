import { useEffect, useState } from "react";

export function useCart(){
    const [cartItems, setCartItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://fakestoreapi.com/carts/user/4")
            .then(res => res.json())
            .then(data => {
                setCartItems(data[data.length - 1].products)
            })
            .catch(err => setError(err))
    }, []);

    return {cartItems, setCartItems, error};

}