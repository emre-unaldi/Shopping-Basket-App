import React from 'react';
import axios from 'axios';
import BaskedList from '../BasketList/BasketList';
import { ProductContext, useContext } from '../Context/Context';

const Basket = () => {
    const { products, setProducts, numberAddProducts, priceCalculator , setOpenCheckout } = useContext(ProductContext);

    const getCheckout = () => {
        setOpenCheckout(true)
        priceCalculator()
    }
   
    const clearBasket = () => {
        setProducts(
            products.map((element) => {
                element.qty = 0;
                axios.put(`http://localhost:3001/api/products/${element._id}`, { qty: 0 })
                return element;
            })
        )
        setOpenCheckout(false)
    }

    return(
        <div className="col-sm-4 pb-5 your-basket">
            <h5 className="mb-2">Your basket</h5>
            <p>
                <span className="js-totalItems">
                { numberAddProducts !== 0 ? `${numberAddProducts} products` : 'Basket empty' }
                </span>
            </p>
            <BaskedList/>
            { numberAddProducts === 0 ? 
            <div className="your-basket_buttons js-reveal-step1 hide">
                <button className="js-checkout btn btn-success btn-sm" style={{margin: '10px 5px 10px 0'}} onClick={getCheckout}>Checkout </button> 
                <button className="js-clear btn btn-outline-info btn-sm" style={{margin: '10px 5px 10px 0'}} onClick={clearBasket}>Clear basket </button>
            </div> : 
            <div className="your-basket_buttons js-reveal-step1 show">
                <button className="js-checkout btn btn-success btn-sm" style={{margin: '10px 5px 10px 0'}} onClick={getCheckout}>Checkout </button> 
                <button className="js-clear btn btn-outline-info btn-sm" style={{margin: '10px 5px 10px 0'}} onClick={clearBasket}>Clear basket </button>
            </div> 
            }
        </div> 
    )
}

export default Basket;