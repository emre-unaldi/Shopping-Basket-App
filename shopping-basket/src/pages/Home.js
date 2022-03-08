import React from 'react';

const Home = () => {
    return(
        <main role="main">

            <section class="jumbotron text-center py-4">
                    <div class="container">
                        <h1 class="jumbotron-heading">Shopping basket <span class="oi oi-basket"></span></h1>  
                    </div> 
            </section>

            <div class="album py-4 mb-4 product-panel">
                <div class="container"> 
                    <div class="row">
                        <div class="col-md">
                            <div class="card mb-2 lg-4 box-shadow">
                                <div class="card-body p-3">
                                <h3>Peas</h3> 
                                <div class="d-flex justify-content-between align-items-center">  
                                    <p class="text-muted">£0.95 <small>/ bag</small></p>
                                    <button data-type="add-item" data-name="Peas" data-price="0.95" data-qty="1" class="js-add-item btn btn-info btn-sm">Add <span class="oi oi-plus"></span></button>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="card mb-2 lg-4 box-shadow">
                                <div class="card-body p-3">
                                <h3>Eggs</h3> 
                                <div class="d-flex justify-content-between align-items-center">  
                                    <p class="text-muted">£2.10 <small>/ dozen</small></p>
                                    <button data-type="add-item" data-name="Eggs" data-price="2.10" data-qty="1" class="js-add-item btn btn-info btn-sm">Add <span class="oi oi-plus"></span></button>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="card mb-2 lg-4 box-shadow">
                                <div class="card-body p-3">
                                <h3>Milk</h3> 
                                <div class="d-flex justify-content-between align-items-center">  
                                    <p class="text-muted">£1.30 <small>/ bottle</small></p>
                                    <button data-type="add-item" data-name="Milk" data-price="1.30" data-qty="1" class="js-add-item btn btn-info btn-sm">Add <span class="oi oi-plus"></span></button>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="card mb-2 lg-4 box-shadow">
                                <div class="card-body p-3">
                                <h3>Beans</h3> 
                                <div class="d-flex justify-content-between align-items-center">  
                                    <p class="text-muted">£0.73 <small>/ can</small></p>
                                    <button data-type="add-item" data-name="Beans" data-price="0.73" data-qty="1" class="js-add-item btn btn-info btn-sm">Add <span class="oi oi-plus"></span></button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div> 
            </div> 

            <div class="container">
                <div class="row">
                    <div class="col-sm-4 pb-5 your-basket">
                        <h5 class="mb-2">Your basket</h5> 
                        <p><span class="js-totalItems"></span></p>
                        <ul class="list-group mb-3 js-basket-items basket-items"></ul>
                        <div class="your-basket_buttons js-reveal-step1">
                            <button class="js-checkout btn btn-success btn-sm">Checkout </button> 
                            <button class="js-clear btn btn-outline-info btn-sm">Clear basket </button>
                        </div>
                    </div> 

                    <div class="col-sm-7 pb-5 reveal-step js-reveal-step2">
                        <div class="row">
                            <div class="col-sm-6 pb-5">
                                    <div class="checkout">
                                        <h5 class="mb-2">Change currency?</h5>
                                        <div class="dropdown mb-3 mt-2"> 
                                            <button class="btn btn-sm btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Currencies
                                            </button>
                                            <ul class="js-currencies dropdown-menu currency-list" aria-labelledby="dropdownMenuButton">
                                                <li class="dropdown-item" href="#">No currencies yet!</li> 
                                            </ul>
                                        </div> 
                                    </div>
                            </div> 
                            <div class="col-sm-6 pb-5">
                                <h5 class="mb-2">Total cost: </h5>
                                <p class="basket-total"><span class="js-totalCost"></span> <span class="js-currency">GBP</span></p>
                                <a href="thankyou.html" class="js-checkout btn btn-success btn-sm">Complete order</a> 
                            </div>
                        </div> 
                    </div> 
                </div> 
            </div> 
    </main>
    )
}

export default Home;