import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Order from '../../pages/Order/Order';
import { ProductContext } from '../Context/Context';
import '../../css/main.css'

const App = () => {
    const [products, setProducts] = useState([]);
    const [priceSum, setPriceSum] = useState(0);
    const [openCheckout, setOpenCheckout] = useState(false);
    const numberAddProducts = products.filter((element) => element.qty > 0).length;

    useEffect(() => {
        const getProduct = async () => {
            const response = await axios.get('http://localhost:3001/api/products');
            setProducts(response.data)
        }
        getProduct()
    }, []);

    const priceCalculator = () => {
        const priceCalculater = products.reduce((data, element) => (data = data + element.qty * element.price), 0);
        setPriceSum(Number(priceCalculater.toFixed(2)))
    }

    const qtyCalculator = () => {
        const qtyCalculator = products.reduce((data, element) => (data = data + element.qty), 0);
        qtyCalculator === 0 ? setOpenCheckout(false) : null
    }

    const data = {
        products,
        setProducts,
        openCheckout,
        setOpenCheckout,
        priceSum,
        setPriceSum,
        numberAddProducts,
        priceCalculator,
        qtyCalculator
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