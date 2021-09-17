import React, { useState, useEffect }from 'react';
import DeleteButton from '../components/DeleteButton';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const DetailView = () => {
    const { id } = useParams();
    const history = useHistory();
    const [ athlete, setAthlete ] = useState({});
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/athletes/' + id)
            .then(response => {
                console.log(response);
                if (response.data.name === "CastError") {
                    history.push("/");
                }
                setAthlete(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <div>
            <h1>{athlete.firstName} {athlete.lastName}</h1>
            <p>Sport: {athlete.sport}</p>
            <p>Team: {athlete.team}</p>
            <DeleteButton id={athlete._id}/>
        </div>
    )
}

export default DetailView;