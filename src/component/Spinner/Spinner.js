import React from "react";
import LoadingImage from '../../asset/images/loading.gif';
function Spinner(){
    return (
        <div className="container d-flex align-items-center justify-content-center px-4 px-lg-5 mt-5">
            <img className="loading" src={LoadingImage} alt="" />
        </div>
    )
}

export default Spinner;