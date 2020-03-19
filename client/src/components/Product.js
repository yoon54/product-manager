import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {navigate, Link} from "@reach/router"

import Create from "./Create"


const Product = props => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        Axios.get("http://localhost:8000/api/Products")
            .then(res => {
                setProducts(res.data)})
            .catch(err => console.log(err));
    },[]);

    const View = _id => {
        navigate(`/product/${_id}`)
    }

    return (
    <>
    <nav className= "navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to ="/" className = "navbar-brand">Home</Link>
        </nav>
        <div className="jumbotron">

        
        <h4>Create a Product</h4>
        <Create />
        </div>
        <p>-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
        <div className="jumbotron">
        <h4>All Products</h4>
        <p></p>
        {
            products.map(pro => 
                <ul className= "list-group">
                    <li className = "list-group-item">
                            <button className = "btn btn-lg btn-block btn-outline-primary" onClick = {e => View(pro._id) } >{pro.title}</button>
                    </li>
                </ul>
            )
        }
        </div>
    </>
    )}

export default Product;