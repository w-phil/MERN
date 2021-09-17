import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import IndexDeleteButton from '../components/IndexDeleteButton';

const IndexView = () => {
    const [athletes, setAthletes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/athletes')
            .then((response) => {
                console.log(response);

                response.data.sort(function (a, b) {
                    return a.firstName.localeCompare(b.firstName);
                });

                setAthletes(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const removeFromDom = athleteId => {
        setAthletes(athletes.filter(athlete => athlete._id !== athleteId))
    }

    return (
        <div>
            <h1>Athletes</h1>
            <Link to="/create">Add Athlete</Link>
            <ul>
                {athletes.map((athlete, index) => {
                    return (
                        <li key={index}> <Link to={"/" + athlete._id}> {athlete.firstName} {athlete.lastName} </Link> | <Link to={"/" + athlete._id + "/edit"}>Edit</Link> <IndexDeleteButton id={athlete._id} removeFromDom={removeFromDom} /></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default IndexView;