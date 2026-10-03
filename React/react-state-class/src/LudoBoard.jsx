import {useState} from "react";
import "./LudoBoard.css";

export default function LudoBoard(){
    let [moves, setMoves]=useState({blue:0, red:0, yellow:0 , green: 0});

    let updateBlue= ()=>{
        setMoves({...moves , blue : moves.blue + 1 } );
    };

    let updateYellow= ()=>{
        setMoves({...moves , yellow : moves.yellow + 1 } );
    };

    let updateGreen= ()=>{
        setMoves({...moves , green : moves.green + 1 } );
    };

    let updateRed= ()=>{
        setMoves({...moves , red : moves.red + 1 } );
    };

    return(
        <div>
            <p>Game begins</p>
            <div className="board">
                <p>Blue Moves={moves.blue}</p>
                <button style={{background: "blue"}} onClick={updateBlue}>+1</button>
                <p>Red Moves={moves.red}</p>
                <button style={{background: "red"}} onClick={updateRed} >+1</button>
                <p>Blue Moves={moves.yellow}</p>
                <button style={{background: "yellow", color:"black"}} onClick={updateYellow} >+1</button>
                <p>Blue Moves={moves.green}</p>
                <button style={{background: "green"}} onClick={updateGreen} >+1</button>
            </div>
        </div>
    )
}