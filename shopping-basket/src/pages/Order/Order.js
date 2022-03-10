import React from 'react';

const Order = () => {
    return(
        <div className="view_thank-you">
                <section className="jumbotron text-center py-4">
                        <div className="container">
                            <h1 className="jumbotron-heading">Thanks for your order </h1>  
                        </div> 
                </section> 
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 pb-5 mt-5 your-basket">
                            <h5 className="mb-2">Your basket contained:</h5> 
                            <p>
                                <span className="js-totalItems">1 products</span>
                            </p>
                            <ul className="list-group mb-3 js-basket-items basket-items">
                                <li className="list-group-item p-3">
                                    <p className="mb-0 float-left">
                                        <strong>Peas </strong>
                                        <span className="text-muted basket-qty">qty: 2</span>
                                    </p>
                                </li>
                                <li className="list-group-item p-3">
                                    <p className="mb-0 float-left">
                                        <strong>Milk </strong>
                                        <span className="text-muted basket-qty">qty: 1</span>
                                    </p>
                                </li>
                            </ul> 
                            <p className="mb-2"><strong>Total cost: </strong></p>
                            <p className="basket-total">
                                <span className="js-totalCost">2.73 </span> 
                                <span className="js-currency">GBP</span>
                            </p> 
                        </div>  
                    </div> 
                </div> 
        </div>
    )
}

export default Order;