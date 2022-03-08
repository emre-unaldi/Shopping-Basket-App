import React from 'react';
import Section from '../../components/Section/Section';
import ProductList from '../../components/ProductList/ProductList';
import Basket from '../../components/Basket/Basket';
import Checkout from '../../components/Checkout/Checkout';
import Complete from '../../components/Complete/Complete';

const Home = () => {
    return(
        <main role="main">
            <Section/>
            <ProductList/>
            <div class="container">
                <div class="row">
                    <Basket/>
                    <div class="col-sm-7 pb-5 reveal-step js-reveal-step2">
                        <div class="row">
                            <Checkout/>
                            <Complete/>
                        </div> 
                    </div> 
                </div> 
            </div> 
        </main>
    )
}

export default Home;