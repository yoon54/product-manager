import React, {useState} from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


const Create = props => {

    const [title,setTitle] = useState("");
    const [price,setPrice] = useState(0);
    const [desc,setDesc] = useState("");
    const [errors,setErrors] = useState({});

    const createProduct = e => {
        e.preventDefault();
        Axios.post("http://localhost:8000/api/Products", {title, price, desc})
            .then(res => {
                if(res.data.errors){
                    setErrors(res.data.errors);
                    }
                    else{
                        window.location.reload(false);
                    }
            })
            .catch(err => console.log(err));
    }

    return(
        <form onSubmit= { createProduct }>
            <div className="form-group">
                <input placeholder = "Product Name" onChange = {e =>setTitle(e.target.value)} className = "form-control"/>
                {
                    errors.title ?
                <p>{errors.title.message}</p> : ""

                }
                <input placeholder = "price" onChange = {e =>setPrice(e.target.value)} className = "form-control"/>
                {
                    errors.price ?
                <p>{errors.price.message}</p> : ""

                }
                <input placeholder = "desc" onChange = {e =>setDesc(e.target.value)} className = "form-control"/>
                {
                    errors.desc ?
                <p>{errors.desc.message}</p> : ""

                }
            </div>
            <input type = "submit" value = "Create" className = "btn btn-outline-success" />
        </form>
    )
}

export default Create;