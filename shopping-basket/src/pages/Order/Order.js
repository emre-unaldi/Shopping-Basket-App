import React from 'react';
import { ProductContext, useContext } from '../../components/Context/Context';
import OrderList from '../../components/OrderList/OrderList';

const Order = () => {
    const { priceSum, numberAddProducts} = useContext(ProductContext);

    return(
        <div className="view_thank-you">
                <section className="jumbotron text-center py-4">
                        <div className="container">
                            <h1 className="jumbotron-heading">Thanks for your order </h1>  
                        </div> 
                </section> 
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 pb-5 mt-5 your-basket">
                            <h5 className="mb-2">Your basket contained:</h5> 
                            <p>
                                <span className="js-totalItems">{numberAddProducts} products</span>
                            </p>
                            
                                <OrderList/>
                            
                            <p className="mb-2"><strong>Total cost: </strong></p>
                            <p className="basket-total">
                                <span className="js-totalCost">{priceSum} </span> 
                                <span className="js-currency">GBP</span>
                            </p> 
                        </div>  
                    </div> 
                </div> 
        </div>
    )
}

export default Order;