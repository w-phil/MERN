import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Update = (props) => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [orgName, setOrgName] = useState("");
    const [errors, setErrors] = useState([]); 

    useEffect(() => {
        axios.get(`http://localhost:8001/api/authors/${id}`)
            .then(res => {
                console.log(id);
                setName(res.data.name);
                setOrgName(res.data.name);
            })
    }, [])

    const updateAuthor = e => {
        e.preventDefault();
        axios.put('http://localhost:8001/api/authors/' + id, {
            name
        })
            .then(res => console.log(res))
            .catch(err => {
                const errorResponse = err.response.data.errors; 
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                }

                setErrors(errorArr);
            });
    }

    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to="/">Home</Link>
            <h3>Edit this author</h3>
            <div>
                <form onSubmit={updateAuthor}>
                    {errors.map((err, index) => <p key={index}>{err}</p>)}
                    <p>Name: </p>
                    <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                    <button onClick={() => setName(orgName)}>Cancel</button>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    )
}

export default Update;