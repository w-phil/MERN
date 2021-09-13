import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const AuthorForm = () => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]); 
    const history = useHistory();

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8001/api/authors', {
            name
        })
            .then(res=> {
                console.log(res);
                history.push("/");

            })
            .catch(err => {
                const errorResponse = err.response.data.errors; 
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                }

                setErrors(errorArr);
            })
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <p>Name: </p>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                <button onClick={() => setName("")}>Cancel</button>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default AuthorForm;