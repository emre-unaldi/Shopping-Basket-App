import React from 'react';
import { ProductContext, useContext } from '../Context/Context';

const Product = () => {

    const { setProduct, setShowResult } = useContext(ProductContext);

    const productInfo = ({type, name, price, qty}) => {
        setProduct({
            type,
            name,
            price,
            qty
        })
        setShowResult({
            showBasket: true,
            showBasketList: true,
            showCheckout: false,
            showComplete: false,
            showBasketMessage: true,
        })
    }

    return(
            <div className="col-md">
            <div className="card mb-2 lg-4 box-shadow">
                <div className="card-body p-3">
                    <h3>Beans</h3> 
                    <div className="d-flex justify-content-between align-items-center">  
                        <p className="text-muted">£0.73 <small>/ can</small></p>
                        <button 
                            onClick={() => productInfo({
                                type: "add",
                                name: "Beans",
                                price: "0.72",
                                qty: "1"
                            })}
                            className="js-add-item btn btn-info btn-sm">
                            Add <span className="oi oi-plus"></span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;