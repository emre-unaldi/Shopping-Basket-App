import React from 'react';
import axios from 'axios';
import { ProductContext, useContext } from '../Context/Context';

const BaskedList = () => {
    const { products, setProducts, setPriceSum, priceSum, qtyCalculator , priceCalculator } = useContext(ProductContext);

    const addBasket = async ({ name, qty, id }) => {
        setProducts(
            products.map( (element) => {
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

    const removeBasket = async ({ name, price, qty, id }) => {
        setProducts(
          products.map( (element) => {
            if (element.name === name) {
                element.qty -= 1;
            } else element.qty;
            return element;
          })
        )
        await axios.put(`http://localhost:3001/api/products/${id}`, { qty: qty - 1 })
        setPriceSum(Number((priceSum - price).toFixed(2)))
        qtyCalculator()
    }

    return(
        <ul className="list-group mb-3 js-basket-items basket-items">
            { 
                products
                    .filter((element) => element.qty > 0)
                    .map((data) => (
                        <li key={data._id} className="list-group-item p-3">
                            <p className="mb-0 float-left">
                                <strong>{data.name}</strong>
                                <span className="text-muted basket-qty"> qty: {data.qty}</span>
                            </p>
                            <div className="increment-btns float-right">
                                <span 
                                    className="btn btn-outline-danger btn-sm btn-increment js-remove-item" 
                                    data-type="remove-item" 
                                    data-name="Peas"
                                    style={{marginRight: '5px'}}
                                    onClick={() => removeBasket({
                                        name: data.name, 
                                        price: data.price,
                                        qty: data.qty,
                                        id: data._id 
                                    })}
                                    >
                                        -
                                    </span>
                                <span 
                                    className="btn btn-outline-success btn-sm btn-increment js-remove-item" 
                                    data-type="add-item" 
                                    data-name="Peas"
                                    onClick={() => addBasket({
                                        name: data.name,
                                        qty: data.qty,
                                        id: data._id 
                                    })}
                                    >
                                        +
                                    </span>
                            </div>
                        </li>
                    ))
            }     
        </ul>
    )
}

export default BaskedList;