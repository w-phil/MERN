import React, { useState, useEffect } from 'react';
import Form from '../components/Form';
import DeleteButton from '../components/DeleteButton';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';


const EditView = () => {
    const { id } = useParams();
    const history = useHistory();
    const [athlete, setAthlete] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/athletes/' + id)
            .then(response => {
                console.log(response);
                if (response.data.name === "CastError") {
                    history.push("/");
                }
                setAthlete(response.data);
                setLoaded(true);
            })
            .catch(err => {
                console.log(err)
            });
    }, [])

    const onSubmitHandler = (e, data) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/athletes/' + id, data)
            .then(response => {
                console.log(response);
                history.push("/");
            })
            .catch((err) => {
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
            <h1>Edit {athlete.firstName} {athlete.lastName}</h1>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            {loaded &&
                <Form 
                    onSubmitHandler={onSubmitHandler}
                    initialFirstName={athlete.firstName}
                    initialLastName={athlete.lastName}
                    initialSport={athlete.sport}
                    initialTeam={athlete.team}
                />
            }
            <DeleteButton id={athlete._id}/>
        </div>
    )
}

export default EditView;