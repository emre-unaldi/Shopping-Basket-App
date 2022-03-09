import React, { useState } from 'react';
import Section from '../../components/Section/Section';
import ProductList from '../../components/ProductList/ProductList';
import Basket from '../../components/Basket/Basket';
import Checkout from '../../components/Checkout/Checkout';
import Complete from '../../components/Complete/Complete';
import { ProductContext } from '../../components/Context/Context';

const Home = () => {

    const [product, setProduct] = useState({
        type: "",
        name: "",
        price: "",
        qty: ""
    })
    const [showResult, setShowResult] = useState({
        showBasket: true,
        showBasketList: false,
        showBasketMessage: false,
        showCheckout: false,
        showComplete: false
    })
    

    const data = {
        product,
        setProduct,
        showResult,
        setShowResult
    }
    console.log(showResult);
  
    return(
        <ProductContext.Provider value={data}>
            <main role="main">
                <Section/>
                <ProductList/>
                <div className="container">
                    <div className="row">
                        { showResult.showBasket ?  <Basket/> : null }
                        <div className="col-sm-7 pb-5 reveal-step js-reveal-step2">
                            <div className="row">
                               { showResult.showCheckout ?  <Checkout/> : null }
                               { showResult.showComplete ? <Complete/> : null }
                            </div> 
                        </div> 
                    </div> 
                </div> 
            </main>
        </ProductContext.Provider>
    )
}

export default Home;