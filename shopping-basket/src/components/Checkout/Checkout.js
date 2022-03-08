import React from 'react';

const Checkout = () => {
    return(
        <div className="col-sm-6 pb-5">
            <div className="checkout">
                <h5 className="mb-2">Change currency?</h5>
                <div className="dropdown mb-3 mt-2"> 
                    <button className="btn btn-sm btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Currencies
                    </button>
                    <ul className="js-currencies dropdown-menu currency-list" aria-labelledby="dropdownMenuButton">
                        <li className="dropdown-item" href="#">No currencies yet!</li> 
                    </ul>
                </div> 
            </div>
        </div> 
    )
}
export default Checkout;