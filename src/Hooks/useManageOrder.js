import { useEffect, useState } from "react";

const useManageOrder = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://agile-reaches-45369.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);
    return [orders, setOrders]
}

export default useManageOrder;