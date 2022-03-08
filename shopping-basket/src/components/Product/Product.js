import React from 'react';

const Product = () => {
    return(
        <div className="col-md">
            <div className="card mb-2 lg-4 box-shadow">
                <div className="card-body p-3">
                    <h3>Beans</h3> 
                    <div className="d-flex justify-content-between align-items-center">  
                        <p className="text-muted">£0.73 <small>/ can</small></p>
                        <button data-type="add-item" data-name="Beans" data-price="0.73" data-qty="1" className="js-add-item btn btn-info btn-sm">Add <span className="oi oi-plus"></span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;