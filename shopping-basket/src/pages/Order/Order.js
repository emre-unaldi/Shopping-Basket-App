import React from 'react';

const Order = () => {
    return(
        <div class="view_thank-you">
                <section class="jumbotron text-center py-4">
                        <div class="container">
                            <h1 class="jumbotron-heading">Thanks for your order </h1>  
                        </div> 
                </section> 
                <div class="container">
                    <div class="row">
                        <div class="col-sm-4 pb-5 mt-5 your-basket">
                            <h5 class="mb-2">Your basket contained:</h5> 
                            <p>
                                <span class="js-totalItems">1 products</span>
                            </p>
                            <ul class="list-group mb-3 js-basket-items basket-items">
                                <li class="list-group-item p-3">
                                    <p class="mb-0 float-left">
                                        <strong>Peas </strong>
                                        <span class="text-muted basket-qty">qty: 2</span>
                                    </p>
                                </li>
                                <li class="list-group-item p-3">
                                    <p class="mb-0 float-left">
                                        <strong>Milk </strong>
                                        <span class="text-muted basket-qty">qty: 1</span>
                                    </p>
                                </li>
                            </ul> 
                            <p class="mb-2"><strong>Total cost: </strong></p>
                            <p class="basket-total">
                                <span class="js-totalCost">2.73 </span> 
                                <span class="js-currency">GBP</span>
                            </p> 
                        </div>  
                    </div> 
                </div> 
        </div>
    )
}

export default Order;