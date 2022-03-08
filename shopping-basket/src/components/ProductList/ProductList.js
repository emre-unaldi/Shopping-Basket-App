import React from 'react';
import Product from '../Product/Product';

const ProductList = () => {
    return(
        <div className="album py-4 mb-4 product-panel">
            <div className="container"> 
                <div className="row">
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                </div> 
            </div> 
        </div> 
    )
}

export default ProductList;