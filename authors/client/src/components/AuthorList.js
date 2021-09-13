import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AuthorList = (props) => {
    const {removeFromDom } = props;

    const deleteAuthor = (authorId) => {
        axios.delete(`http://localhost:8001/api/authors/${authorId}`)
            .then(res => {
                removeFromDom(authorId)
            })
            .catch(err => console.error(err));
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                {props.authors.map((author, idx)=>{
                    return <tr key={idx}>
                            <td>{author.name}</td>
                            <td>
                                <Link to={"/" + author._id + "/edit"}><button>Edit</button></Link>
                                <button onClick={(e) => { deleteAuthor(author._id) }}>
                                    Delete
                                </ button>
                        </td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    )
}

export default AuthorList;