import React, { useState, useEffect }  from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

import PlayerList from '../components/PlayerList';

const Main = () => {
    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8003/api/players')
            .then(res => {
                setPlayers(res.data);
                setLoaded(true);
            })
    }, [])

    const removeFromDom = playerId => {
        setPlayers(players.filter(player => player._id != playerId))
    }

    return (
        <div>
            <h1><Link to="/players/list"><span>List</span></Link> | <Link to="/players/addplayer"><span>Add Player</span></Link></h1>
            {loaded && <PlayerList players={players} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main;