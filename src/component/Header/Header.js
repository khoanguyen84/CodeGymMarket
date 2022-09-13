import React from "react";
import { Link } from 'react-router-dom';
function Header(props) {
    const { carts } = props;
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container px-4 px-lg-5 d-flex">
                <Link className="navbar-brand text-light" to={"/market"}>
                    <i className="fa-solid fa-cart-shopping text-warning me-2"></i>
                    <span className="text-warning fw-bolder">Pets</span> Store
                </Link>
                <Link to={"/cart"} className="btn btn-outline-warning" type="submit">
                    <i className="bi-cart-fill me-1" />
                    Cart
                    <span className="badge bg-warning text-white ms-1 rounded-pill">{carts.length}</span>
                </Link>
            </div>
        </nav>
    )
}

export default Header;