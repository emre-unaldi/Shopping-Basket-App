import React from 'react';
import BaskedList from '../BasketList/BasketList';
import { ProductContext, useContext } from '../Context/Context';

const Basket = () => {
    const { showResult,numberAddProducts } = useContext(ProductContext);

    return(
        <div className="col-sm-4 pb-5 your-basket">
            <h5 className="mb-2">Your basket</h5>
            <p>
                <span className="js-totalItems">
                { showResult.showBasketMessage ? `${numberAddProducts} products` : 'Basket empty' }
                </span>
            </p>
            { showResult.showBasketList ? <BaskedList/> : null }
        </div> 
    )
}

export default Basket;