import { useEffect, useState } from "react"

const usePorudcts = () => {
    const [products, setPorudcts] = useState([]);

    useEffect(() => {
        fetch('https://agile-reaches-45369.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setPorudcts(data));
    }, []);
    return [products, setPorudcts]
}

export default usePorudcts;