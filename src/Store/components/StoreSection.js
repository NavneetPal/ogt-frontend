import React from 'react'
import Item from './Item'

function StoreSection() {
    return (
        <>
        <div className="container mb-5">
        <div className="row mt-5">
            <div className="col-md-4">
                <div>
                    <form action="#" method="post">
                        <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Search Product" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <button className=" btn btn-primary" id="basic-addon2"><i className="fa fa-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="mb-2">
                    <p>Sort By:</p>
                    <form action="#" method="post">
                        <select className="form-select form-control"  name="arrival" id="arrival">
                            <option value="newArrival">New Arrival</option>
                            <option value="highest">Highest</option>
                            <option value="lowest">Lowest</option>
                        </select>
                    </form>
                </div>
                <div className="mb-3" style={{backgroundColor:'#f2f2f2',border:'1px solid #ccc',padding:'30px'}} >
                    <h2>Product Category</h2>
                    <div id="category">
                        <span className="badge bg-primary">Primary</span>
                        <span className="badge bg-secondary">Secondary</span>
                        <span className="badge bg-success">Success</span>
                    </div>
                </div>
                <div style={{backgroundColor:'#f2f2f2',border:'1px solid #ccc',padding:'30px'}} >
                    <h2>Filter By Price</h2>
                    <div >
                        <form action="/store" id="pricerange"  method="get">
                            <div>
                                <input type="number" min="0" value="0" name="minprice" id="minprice"/>
                                <span>-</span>
                                <input type="number" min="100" value="100" name="maxprice" id="maxprice"/>
                            </div>
                            <div className="mt-2">
                                <button className="btn btn-primary btn-sm" type="submit">Search</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-md-8">
              <div className="row gy-4">
                <Item/>
              </div>
            </div>
        </div>
    </div> 
        </>
    )
}

export default StoreSection
