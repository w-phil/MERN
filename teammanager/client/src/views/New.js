import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const New = () => {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    //const [status1, setStatus1] = useState("Undecided");
    //const [status2, setStatus2] = useState("Undecided");
    //const [status3, setStatus3] = useState("Undecided");
    const [errors, setErrors] = useState([]); 
    const history = useHistory();

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8002/api/players', {
            name,
            position,
            //status1,
            //status2,
            //status3
        })
            .then(res=> {
                console.log(res);
                history.push("/players/list");

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
                <p>Player Name: </p>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                <p>Preferred Position: </p>
                <input type="text" onChange={(e)=>setPosition(e.target.value)} value={position}/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default New;