import React from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

export default props => {
    const {removeFromDom } = props;

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            {props.products.map((product, idx)=>{
                return <p key={idx}> 
                    <Link to={"/" + product._id}> 
                        {product.title} 
                    </Link>
                    |
                    <button onClick={(e) => { deleteProduct(product._id) }}>
                        Delete
                    </ button>
                </p>
            })}
        </div>
    )
}

