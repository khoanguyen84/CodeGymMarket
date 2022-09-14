import React from "react";
import { Link } from 'react-router-dom';
import Helper from './../../helper/Helper';

function Cart(props) {
    var { carts, incrementQuantity, decrementQuantity } = props;
    carts = carts.map((cart) => {
        return { ...cart, amount: cart.quantity * cart.price }
    })
    const totalAmount = carts.reduce((preValue, currenValue) => preValue + currenValue.amount, 0);
    return (
        <section className="py-2">
            <div className="container px-1 px-lg-5 mt-1">
                <div className="row">
                    <div className="col-8">
                        <h4 className="border-bottom border-2 border-warning">Cart detail</h4>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th className="text-center">#ID</th>
                                    <th className="text-center">Name</th>
                                    <th className="text-center">Photo</th>
                                    <th className="text-center">Price</th>
                                    <th className="text-center">Quantity</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    carts.map((pet, index) => (
                                        <tr keys={pet.id}>
                                            <td className="text-center">{index + 1}</td>
                                            <td>{pet.name}</td>
                                            <td className="text-center">
                                                <img className="pet-photo" src={pet.photoUrl} alt="" />
                                            </td>
                                            <td className="text-right">{Helper.formatCurrency(pet.price)}</td>
                                            <td className="text-center">{pet.quantity}</td>
                                            <td className="text-center">
                                                <i className="fa fa-plus btn btn-sm btn-danger me-2"
                                                    onClick={() => incrementQuantity(pet)}
                                                ></i>
                                                <i className="fa fa-subtract btn btn-sm btn-primary"
                                                    onClick={() => decrementQuantity(pet)}
                                                ></i>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                    </div>
                    <div className="col-4">
                        <h4 className="border-bottom border-2 border-warning">Order summary</h4>
                        {
                            carts.length === 0 ? <p>Cart is empty</p> : (
                                <React.Fragment>
                                    <div className="card bg-warning">
                                        <div className="card-body tẽ">
                                            {
                                                carts.map(cart => (
                                                    <div keys={cart.id} className="d-flex justify-content-between mb-2 py-2 border-bottom-style">
                                                        <div>{cart.name}</div>
                                                        <div>
                                                            <h6>{Helper.formatCurrency(cart.amount)}</h6>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div className="card-footer bg-secondary text-white">
                                            <div className="d-flex justify-content-between">
                                                <div></div>
                                                <div className="flex-group-1">
                                                    <h6>{Helper.formatCurrency(totalAmount)}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <button className="flex-grow-1 btn btn-primary btn-sm my-1"
                                            onClick={() => alert('Going to implement')}
                                        >Checkout</button>
                                        <Link to={'/pets-store/market'} className="btn btn-secondary btn-sm flex-grow-1">Continue shopping</Link>
                                    </div>
                                </React.Fragment>
                            )

                        }
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Cart;