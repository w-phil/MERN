import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


import AuthorList from '../components/AuthorList';

const Main = () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8001/api/authors')
            .then(res => {
                setAuthors(res.data);
                setLoaded(true);
            });
    }, [])

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id != authorId))
    }

    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to="/new">Add an author</Link>
            <h3>We have quotes by:</h3>
            {loaded && <AuthorList authors={authors} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main;