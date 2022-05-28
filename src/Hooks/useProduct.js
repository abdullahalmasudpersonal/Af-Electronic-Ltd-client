import { useEffect, useState } from "react"

const usePorudcts = () => {
    const [products, setPorudcts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setPorudcts(data));
    }, []);
    return [products, setPorudcts]
}

export default usePorudcts;