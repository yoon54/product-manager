import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {navigate , Link} from "@reach/router"

const ViewProduct = props => {
    const [title,setTitle] = useState("");
    const [price,setPrice] = useState(0);
    const [desc,setDesc] = useState("");

    useEffect( () => {
        Axios.get(`http://localhost:8000/api/Products/${props._id}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDesc(res.data.desc);
            })
            .catch(err => console.log(err));
    },[]);
    const Edit = _id => {
        navigate(`/product/edit/${props._id}`)
    }
    const Delete = _id => {
        Axios.delete(`http://localhost:8000/api/Products/${props._id}`)
        navigate("/")
    }

    return (
        <>
        <nav className= "navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to ="/" className = "navbar-brand">Home</Link>
        </nav>
        <div className="jumbotron">
        
        <h1>{title}</h1>
        <p>Price: {price}</p>
        <p>Description: {desc}</p>
        <button className = "btn btn-outline-success" onClick = {e => Edit(props._id) }>Edit</button>
        <p></p>
        <button className = "btn btn-outline-danger" onClick = {e => Delete(props._id) }>Delete</button>
        </div>
        </>
    )

    }

export default ViewProduct;
