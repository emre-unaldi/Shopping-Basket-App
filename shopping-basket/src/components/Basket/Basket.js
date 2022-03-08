import React from 'react';
import { ProductContext, useContext } from '../Context/Context';

const Basket = () => {
    const { product } = useContext(ProductContext);
    console.log(product);
    return(
        <div className="col-sm-4 pb-5 your-basket">
            <h5 className="mb-2">Your basket</h5> 
            <p><span className="js-totalItems"></span></p>
            <ul className="list-group mb-3 js-basket-items basket-items"></ul>
            <div className="your-basket_buttons js-reveal-step1">
                
                <button className="js-checkout btn btn-success btn-sm">Checkout </button> 
                <button className="js-clear btn btn-outline-info btn-sm">Clear basket </button>
            </div>
        </div> 
    )
}

export default Basket;