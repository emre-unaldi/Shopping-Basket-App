import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Section from '../../components/Section/Section';
import ProductList from '../../components/ProductList/ProductList';
import Basket from '../../components/Basket/Basket';
import Checkout from '../../components/Checkout/Checkout';
import Complete from '../../components/Complete/Complete';
import { ProductContext } from '../../components/Context/Context';

const Home = () => {

    const [products, setProducts] = useState([])
    const [priceSum, setPriceSum] = useState(0)
    const [showResult, setShowResult] = useState({
        showBasket: true,
        showBasketList: false,
        showBasketMessage: false,
        showCheckout: false,
        showComplete: false
    })

    useEffect(() => {
        const getProduct = async () => {
            const response = await axios.get('http://localhost:3001/api/products');
            setProducts(response.data)
        }
        getProduct()
    }, []);
    
    const data = {
        products,
        setProducts,
        showResult,
        setShowResult,
        priceSum,
        setPriceSum
    }
    
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