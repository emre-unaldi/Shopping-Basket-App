import React from 'react';
import { ProductContext, useContext } from '../Context/Context';

const BaskedList = () => {

    const { product, setShowResult } = useContext(ProductContext);
    const getCheckout = () => {
        setShowResult({
            showBasket: true,
            showBasketList: true,
            showCheckout: true,
            showComplete: true,
            showBasketMessage: true,
        })
    }
    const deleteVisible = () => {
        setShowResult({
            showBasket: true,
            showBasketList: false,
            showCheckout: false,
            showComplete: false,
            showBasketMessage: false,
        })
    }

    return(
        <ul className="list-group mb-3 js-basket-items basket-items">
            <li className="list-group-item p-3">
                <p className="mb-0 float-left">
                    <strong>{product.name}</strong>
                    <span className="text-muted basket-qty">qty: {product.qty}</span>
                </p>
                <div className="increment-btns float-right">
                    <span className="btn btn-outline-danger btn-sm btn-increment js-remove-item" data-type="remove-item" data-name="Peas">-</span>
                    <span className="btn btn-outline-success btn-sm btn-increment js-remove-item" data-type="add-item" data-name="Peas">+</span>
                </div>
            </li>
            <div className="your-basket_buttons js-reveal-step1">
                <button className="js-checkout btn btn-success btn-sm" onClick={getCheckout}>Checkout </button> 
                <button className="js-clear btn btn-outline-info btn-sm" onClick={deleteVisible}>Clear basket </button>
            </div>
        </ul>
    )
}

export default BaskedList;