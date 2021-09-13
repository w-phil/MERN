import React from 'react';
import { Link } from 'react-router-dom';

import AuthorForm from '../components/AuthorForm';

const New = () => {
    return (
        <div>]
            <h1>Favorite authors</h1>
            <Link to="/">Home</Link>
            <h3>Add a new author:</h3>
            <AuthorForm />
        </div>
    )
}

export default New;