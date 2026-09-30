export default function Counter(){

    let count=0;

    function incCount(){
        count+=1;
        console.log(count);
    }

    return(
        <div>
            <h1>Count={count}</h1>
            <button onClick={incCount}>Increase Count</button>
        </div>
    )
}