import axios from 'axios';
import React , { useState } from 'react';
import Form from '../components/Form';
import { useHistory } from 'react-router-dom';

const CreateView = () => {
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const onSubmitHandler = (e, data) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/athletes', data)
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
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <Form 
                onSubmitHandler={onSubmitHandler}
                initialFirstName=""
                initialLastName=""
                initialSport=""
                initialTeam=""
            />
        </div>
    )
}

export default CreateView;