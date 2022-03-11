import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { ProductContext, useContext } from '../Context/Context';

const Complete = () => {
    const { priceSum, products } = useContext(ProductContext);

    const addOrderDb = async() => {
        const getOrderList = await products.filter((e) => e.qty > 0)
        axios.post('http://localhost:3001/api/baskets', { 
            orderList: getOrderList,
            totalPrice: priceSum
        })
    }

    return(
        <div className="col-sm-6 pb-5">
            <h5 className="mb-2">Total cost: </h5>
            <p className="basket-total"><span className="js-totalCost">{ priceSum } </span><span className="js-currency">GBP</span></p>
            <button className="js-checkout btn btn-success btn-sm" onClick={addOrderDb}>
                <Link to="/complete-order">Complete order</Link> 
            </button>
        </div>
    )
}

export default Complete;