import React, { useState, useEffect }  from 'react';
import axios from "axios";

import Game from '../components/Game';

const Status = () => {
    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const tabs = ["Game 1", "Game 2", "Game 3"];

    useEffect(() => {
        axios.get('http://localhost:8003/api/players')
            .then(res => {
                setPlayers(res.data);
                setLoaded(true);
            })
    })

    return (
        <div>
           {loaded && <Game players={players} tabs={tabs} /> }
        </div>
    )
}

export default Status;