function printHello(){
    console.log("Hello");
}

function printBye(){
    console.log("bye");
}

export default function Button(){
    return(
        <div>
            <button onClick={printHello}>Click Me For Hello</button>
            <p onClick={printBye}>Click For BYE</p>
        </div>
    )
}