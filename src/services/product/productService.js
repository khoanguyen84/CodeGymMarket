import axios from "axios";
import { API_PRODUCT } from './../common';
class ProductService{
    static getProducts(){
        return axios.get(API_PRODUCT);
    }
}

export default ProductService;