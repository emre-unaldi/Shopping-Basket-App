import React from 'react';
import { ProductContext, useContext } from '../Context/Context';


const Complete = () => {
    const { product } = useContext(ProductContext);

    return(
        <div className="col-sm-6 pb-5">
            <h5 className="mb-2">Total cost: </h5>
            <p className="basket-total"><span className="js-totalCost">{ product.price } </span><span className="js-currency">GBP</span></p>
            <a href="thankyou.html" className="js-checkout btn btn-success btn-sm">Complete order</a> 
        </div>
    )
}

export default Complete;