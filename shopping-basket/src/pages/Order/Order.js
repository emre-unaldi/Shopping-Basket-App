import React, {useEffect} from 'react';
import axios from 'axios';
import { ProductContext, useContext } from '../../components/Context/Context';
import OrderList from '../../components/OrderList/OrderList';

const Order = () => {
    const { numberAddProducts, baskets, setBaskets } = useContext(ProductContext);

    useEffect(() => {
        for (let index = 0; index < 3; index++) {
            const getBaskets = async () => {
                const response = await axios.get('http://localhost:3001/api/baskets');
                setBaskets(response.data)
            }
            getBaskets()
        }
    }, []);

    const lastAddedOrderPrice = baskets.map((data) => data.totalPrice)[baskets.length - 1];
    console.log(lastAddedOrderPrice);

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
                            <span className="js-totalCost">{lastAddedOrderPrice} </span> 
                            <span className="js-currency">GBP</span>
                        </p> 
                    </div>  
                </div> 
            </div> 
        </div>
    )
}

export default Order;