import React from 'react';
import axios from 'axios';

const PlayerList = (props) => {
    const {removeFromDom } = props;

    const deletePlayer = (playerId) => {
        axios.delete(`http://localhost:8003/api/players/${playerId}`)
            .then(res => {
                removeFromDom(playerId)
            })
            .catch(err => console.error(err));
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>Position</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {props.players.map((player, idx)=>{
                    return <tr key={idx}>
                            <td>{player.name}</td>
                            <td>{player.position}</td>
                            <td>
                                <button onClick={(e) => { deletePlayer(player._id) }}>
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

export default PlayerList;