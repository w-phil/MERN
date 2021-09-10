import React from 'react';
import axios from 'axios';

export default props => {
    return (
        <div>
            {props.products.map((product, idx)=>{
                return <a href={"/" + product._id}><p key={idx}>{product.title}</p></a>
            })}
        </div>
    )
}