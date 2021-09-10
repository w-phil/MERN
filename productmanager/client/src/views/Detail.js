import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link, navigate } from '@reach/router'; 

export default props => {
    const [product, setProduct] = useState({});
    const {removeFromDom } = props;
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => setProduct(res.data))
    }, [])

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then(res => {
                navigate('/');
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
    }

    return (
            <div>
                <p>Title: {product.title}</p>
                <p>Price: {product.price}</p>
                <p>Description: {product.description}</p>
                
                <Link to={"/" + props.id + "/edit"}>
                    Edit
                </Link>
                <button onClick={(e) => { deleteProduct(props.id) }}>
                    Delete
                </ button>
            
            </div> 
    )
}