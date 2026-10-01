import {useState} from "react";

export default function Counter(){


    let [Count , setCount]=useState(0);

    function incCount(){
        setCount(Count+1);
        // console.log(count);
    }

    return(
        <div>
            <h1>Count={Count}</h1>
            <button onClick={incCount}>Increase Count</button>
        </div>
    )
}