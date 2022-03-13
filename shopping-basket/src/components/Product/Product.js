import axios from 'axios';
import React from 'react';
import { ProductContext, useContext } from '../Context/Context';

const Product = (props) => {
    const { products, setProducts, priceCalculator } = useContext(ProductContext);
    const { name, price, unit, qty, id } = props;

    const productInfo = async ({ name }) => {
        setProducts(
            products.map((element) => {
                if (element.name === name) {
                    element.qty += 1;
                } else {
                    element.qty
                }
                return element;
            })
        )
        await axios.put(`http://localhost:3001/api/products/${id}`, { qty: qty + 1 })
        priceCalculator()
    }

    return(
            <div className="col-md">
            <div className="card mb-2 lg-4 box-shadow">
                <div className="card-body p-3">
                    <h3>{name}</h3> 
                    <div className="d-flex justify-content-between align-items-center">  
                        <p className="text-muted">£ {price} <small>/ {unit} </small></p>
                        <button 
                            onClick={() => productInfo({ name })}
                            className="js-add-item btn btn-info btn-sm"
                            style={{marginLeft: '80px'}}
                            >
                            Add <span className="oi oi-plus"></span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;