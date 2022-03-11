import React from 'react';
import { ProductContext, useContext } from '../../components/Context/Context';

const OrderList = () => {
    const { products } = useContext(ProductContext);

    return(
        <ul className="list-group mb-3 js-basket-items basket-items">
        {products && 
            products
                .filter((element) => element.qty > 0)
                .map((data) => (
                
                    <li key={data._id} className="list-group-item p-3">
                        <p className="mb-0 float-left">
                            <strong>{data.name} </strong>
                            <span className="text-muted basket-qty">qty: {data.qty}</span>
                        </p>
                    </li>
                
        ))}
        </ul>
    )
}

export default OrderList;