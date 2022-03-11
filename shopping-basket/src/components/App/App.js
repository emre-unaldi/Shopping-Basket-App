import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Order from '../../pages/Order/Order';
import { ProductContext } from '../Context/Context';


const App = () => {
    const [products, setProducts] = useState([])
    const [priceSum, setPriceSum] = useState(0)
    const [showResult, setShowResult] = useState({
        showBasket: true,
        showBasketList: false,
        showBasketMessage: false,
        showCheckout: false,
        showComplete: false
    })
    
    const numberAddProducts = products.filter((element) => element.qty > 0).length;
    
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
        setPriceSum,
        numberAddProducts
    }

    return(
        <ProductContext.Provider value={data}>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Home/>} />
                    <Route exact path='/complete-order' element={<Order/>} />
                </Routes>
            </BrowserRouter>
        </ProductContext.Provider>
    )
}

export default App;