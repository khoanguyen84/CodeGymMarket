import React from "react";

function Cart(props) {
    const { carts } = props;
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
                                        <tr key={pet.id}>
                                            <td className="text-center">{index + 1}</td>
                                            <td>{pet.name}</td>
                                            <td className="text-center">
                                                <img className="pet-photo" src={pet.photoUrl} alt="" />
                                            </td>
                                            <td className="text-right">${pet.price}</td>
                                            <td className="text-center">{pet.quantity}</td>
                                            <td className="text-center">
                                                <i className="fa fa-plus btn btn-sm btn-danger me-2"></i>
                                                <i className="fa fa-subtract btn btn-sm btn-primary"></i>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-4">
                        <h4 className="border-bottom border-2 border-warning">Order summary</h4>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Cart;