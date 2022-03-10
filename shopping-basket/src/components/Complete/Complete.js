import React from 'react';
import { Link } from 'react-router-dom';
import { ProductContext, useContext } from '../Context/Context';


const Complete = () => {
    const { products } = useContext(ProductContext);

    return(
        <div className="col-sm-6 pb-5">
            <h5 className="mb-2">Total cost: </h5>
            <p className="basket-total"><span className="js-totalCost">{ products.price } </span><span className="js-currency">GBP</span></p>
            <Link to="/complete-order" className="js-checkout btn btn-success btn-sm">Complete order</Link> 
        </div>
    )
}

export default Complete;