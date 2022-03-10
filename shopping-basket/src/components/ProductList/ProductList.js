import React from 'react';
import Product from '../Product/Product';
import { ProductContext, useContext } from '../Context/Context';

const ProductList = () => {
    const { products } = useContext(ProductContext);
   
    return(
        <div className="album py-4 mb-4 product-panel">
            <div className="container"> 
                <div className="row">
                    {products.map(get =>
                        <div key={get._id}>
                            <Product name={get.name} price={get.price} unit={get.unit} qty={get.qty}/>
                        </div>
                    )}
                </div> 
            </div> 
        </div> 
    )
}

export default ProductList;