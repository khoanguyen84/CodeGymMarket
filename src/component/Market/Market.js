import React, { useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";
import ProductService from './../../services/product/productService';

function Market() {
    const [state, setState] = useState({
        loading: false,
        products: [],
        errorMessage: ''
    })

    useEffect(() => {
        try {
            setState({ ...state, loading: true });
            async function getData() {
                let productRes = await ProductService.getProducts();
                setState({
                    ...state,
                    loading: false,
                    products: productRes.data
                })
            }
            getData();
        } catch (error) {
            setState({
                ...state,
                loading: false,
                errorMessage : error.message
            })
        }
    }, [])

    const { loading, products, errorMessage } = state;
    return (
        <section className="py-2">
            {
                loading ? <Spinner /> : (
                    <div className="container px-1 px-lg-5 mt-1">
                        <h4 className="border-bottom border-2 border-warning">Pets</h4>
                        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                            {
                                products.map(pdt => (
                                    <div key={pdt.id} className="col mb-5">
                                        <div className="card h-100">
                                            <img className="card-img-top" src={pdt.photoUrl} alt="" />
                                            <div className="card-body p-4">
                                                <div className="text-center">
                                                    <h5 className="fw-bolder">{pdt.name}</h5>
                                                    ${pdt.minPrice} - ${pdt.maxPrice}
                                                </div>
                                            </div>
                                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                                <div className="text-center"><button className="btn btn-outline-warning mt-auto">Add to Cart</button></div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )
            }

        </section>
    )
}

export default Market;