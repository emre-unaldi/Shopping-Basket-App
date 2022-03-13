import React from 'react';
import Product from '../Product/Product';
import { ProductContext, useContext } from '../Context/Context';

const ProductList = () => {
    const { products } = useContext(ProductContext);
   
    return(
        <div className="album py-4 mb-4 product-panel">
            <div className="container"> 
                <div className="row">
                    {products && 
                        products.map(data =>
                        <div key={data._id}>
                            <Product name={data.name} price={data.price} unit={data.unit} qty={data.qty} id={data._id} />
                        </div>
                    )}
                </div> 
            </div> 
        </div> 
    )
}

export default ProductList;