import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const Game = (props) => {
    const { id } = useParams();
    const [tab, setTab] = useState(props.tabs[id - 1]);
    const [status1, setStatus1] = useState("");
    const [status2, setStatus2] = useState("");
    const [status3, setStatus3] = useState("");
    const history = useHistory();

    const onClickHandler = (value) => {
        setTab(value);
        if (value === "Game 1") {
            history.push('/game/status/1');
        } else if (value === "Game 2") {
            history.push('/game/status/2');
        } else if (value === "Game 3") {
            history.push('/game/status/3');
        }
    }

    const updateStatus1 = e => {
        axios.put('http://localhost:8003/api/players/' + e, {
            status1
        })
            .then(res => console.log(res))
            .catch(err=>console.log(err))
    }

    const updateStatus2 = e => {
        axios.put('http://localhost:8003/api/players/' + e, {
            status2
        })
            .then(res => console.log(res))
            .catch(err=>console.log(err))
    }

    const updateStatus3 = e => {
        axios.put('http://localhost:8003/api/players/' + e, {
            status3
        })
            .then(res => console.log(res))
            .catch(err=>console.log(err))
    }



    return (
        <div id="status">
            <h1>Player Status - {tab}</h1>
            <button onClick = { (e) => onClickHandler(props.tabs[0])}>{props.tabs[0]}</button>
            <button onClick = { (e) => onClickHandler(props.tabs[1])}>{props.tabs[1]}</button>
            <button onClick = { (e) => onClickHandler(props.tabs[2])}>{props.tabs[2]}</button>
            <table>
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {props.players.map((player, idx)=>{
                    return <tr key={idx}>
                            <td>{player.name}</td>
                            {tab === "Game 1"?
                            <td>
                                {player.status1 === "Playing"?
                                <button style={{backgroundColor: 'green'}} onClick={() => {
                                    setStatus1("Playing")
                                    updateStatus1(player._id)
                                }}>Playing</button> :
                                <button style={{backgroundColor: 'grey'}} onClick={() => {
                                    setStatus1("Playing")
                                    updateStatus1(player._id)
                                }}>Playing</button> }
                                {player.status1 === "Not Playing"?
                                <button style={{backgroundColor: 'red'}} onClick={() => {
                                    setStatus1("Not Playing")
                                    updateStatus1(player._id)
                                }}>Not Playing</button> :
                                <button style={{backgroundColor: 'grey'}} onClick={() => {
                                    setStatus1("Not Playing")
                                    updateStatus1(player._id)
                                }}>Not Playing</button> }
                                {player.status1 === "Undecided"?
                                <button style={{backgroundColor: 'yellow'}} onClick={() => {
                                    setStatus1("Undecided")
                                    updateStatus1(player._id)
                                }}>Undecided</button> :
                                <button style={{backgroundColor: 'grey'}} onClick={() => {
                                    setStatus1("Undecided")
                                    updateStatus1(player._id)
                                }}>Undecided</button>  }
                            </td> : tab === "Game 2"?
                            <td>
                                {player.status2 === "Playing"?
                                <button style={{backgroundColor: 'green'}} onClick={() => {
                                    setStatus2("Playing")
                                    updateStatus2(player._id)
                                }}>Playing</button> :
                                <button style={{backgroundColor: 'grey'}} onClick={() => {
                                    setStatus2("Playing")
                                    updateStatus2(player._id)
                                }}>Playing</button> }
                                {player.status2 === "Not Playing"?
                                <button style={{backgroundColor: 'red'}} onClick={() => {
                                    setStatus2("Not Playing")
                                    updateStatus2(player._id)
                                }}>Not Playing</button> :
                                <button style={{backgroundColor: 'grey'}} onClick={() => {
                                    setStatus2("Not Playing")
                                    updateStatus2(player._id)
                                }}>Not Playing</button> }
                                {player.status2 === "Undecided"?
                                <button style={{backgroundColor: 'yellow'}} onClick={() => {
                                    setStatus2("Undecided")
                                    updateStatus2(player._id)
                                }}>Undecided</button> :
                                <button style={{backgroundColor: 'grey'}} onClick={() => {
                                    setStatus2("Undecided")
                                    updateStatus2(player._id)
                                }}>Undecided</button>  } 
                                </td> :
                                tab === "Game 3"?
                                <td>
                                {player.status3 === "Playing"?
                                <button style={{backgroundColor: 'green'}} onClick={() => {
                                    setStatus3("Playing")
                                    updateStatus3(player._id)
                                }}>Playing</button> :
                                <button style={{backgroundColor: 'grey'}} onClick={() => {
                                    setStatus3("Playing")
                                    updateStatus3(player._id)
                                }}>Playing</button> }
                                {player.status3 === "Not Playing"?
                                <button style={{backgroundColor: 'red'}} onClick={() => {
                                    setStatus3("Not Playing")
                                    updateStatus3(player._id)
                                }}>Not Playing</button> :
                                <button style={{backgroundColor: 'grey'}} onClick={() => {
                                    setStatus3("Not Playing")
                                    updateStatus3(player._id)
                                }}>Not Playing</button> }
                                {player.status3 === "Undecided"?
                                <button style={{backgroundColor: 'yellow'}} onClick={() => {
                                    setStatus3("Undecided")
                                    updateStatus3(player._id)
                                }}>Undecided</button> :
                                <button style={{backgroundColor: 'grey'}} onClick={() => {
                                    setStatus3("Undecided")
                                    updateStatus3(player._id)
                                }}>Undecided</button>  } 
                                </td> :
                                ""
                            }
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    )
}

export default Game;