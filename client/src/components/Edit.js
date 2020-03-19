import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { navigate, Link} from '@reach/router';

const Edit = props =>{
    const [title,setTitle] = useState("");
    const [price,setPrice] = useState(0);
    const [desc,setDesc] = useState("");
    const [errors,setErrors] = useState({});

    useEffect( () => {
        Axios.get(`http://localhost:8000/api/Products/${props._id}`)
            .then (res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDesc(res.data.desc);
            })
            .catch(err => console.log(err));
    },[]
    );
    const editProduct = e =>{
        e.preventDefault();
        Axios.put(`http://localhost:8000/api/Products/edit/${props._id}`,{
            _id: props._id, title, price, desc
        })
            .then(res => {
                if(res.data.errors){
                    setErrors(res.data.errors);
                }
                else{
                    navigate(`/product/${props._id}`);
                }
            })
            .catch(err => console.log(err));
    }
    
    return(
        <>
        <nav className= "navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to ="/" className = "navbar-brand">Home</Link>
        </nav>
        <form onSubmit= { editProduct }>
            <div className="form-group">
                <input placeholder = {title} onChange = {e =>setTitle(e.target.value)} className = "form-control"/>
                {
                    errors.title ?
                <p>{errors.title.message}</p> : ""

                }
                <input placeholder = {price} onChange = {e =>setPrice(e.target.value)} className = "form-control"/>
                {
                    errors.price ?
                <p>{errors.price.message}</p> : ""

                }
                <input placeholder = {desc} onChange = {e =>setDesc(e.target.value)} className = "form-control"/>
                {
                    errors.desc ?
                <p>{errors.desc.message}</p> : ""

                }
            </div>
            <input type = "submit" value = "Edit" className = "btn btn-outline-success" />
        </form>
    </>
    )


}

export default Edit;