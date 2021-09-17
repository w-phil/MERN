import axios from 'axios';
import React from 'react';
import { useHistory} from 'react-router-dom';

const DeleteButton = props => {
    const { id } = props;
    const history = useHistory();

    const onClickHandler = e => {
        axios.delete('http://localhost:8000/api/athletes/' + id)
            .then(response => {
                console.log(response);
                history.push('/');
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <button onClick={onClickHandler}>Delete</button>
    )
}

export default DeleteButton;