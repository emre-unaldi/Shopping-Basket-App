import React from 'react';
import Section from '../../components/Section/Section';
import ProductList from '../../components/ProductList/ProductList';
import Basket from '../../components/Basket/Basket';
import Checkout from '../../components/Checkout/Checkout';
import Complete from '../../components/Complete/Complete';
import { ProductContext, useContext } from '../../components/Context/Context';

const Home = () => {
    const { showResult } = useContext(ProductContext);
    
    return(
        <main role="main">
            <Section/>
            <ProductList/>
            <div className="container">
                <div className="row">
                    { showResult.showBasket ?  <Basket/> : null }
                    <div className="col-sm-7 pb-5 reveal-step js-reveal-step2 show">
                        <div className="row">
                           { showResult.showCheckout ?  <Checkout/> : null }
                           { showResult.showComplete ? <Complete/> : null }
                        </div> 
                    </div> 
                </div> 
            </div> 
        </main>
    )
}

export default Home;