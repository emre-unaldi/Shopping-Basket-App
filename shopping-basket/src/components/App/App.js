import React from 'react';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Order from '../../pages/Order/Order';

const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/complete-order' element={<Order/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;