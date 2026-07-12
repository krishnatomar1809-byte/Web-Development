// let num=prompt("enter the number: ");
// for(let i=1;i<=10;i++){
//     console.log(num*i);
    
// }

// let num=prompt("enter the number: ");
// for(let i=num;i<=num*10;i=i+num){
//     console.log(i);
    
// }

let favmovie="avatar";
let guess=prompt("Enter the movie");
while((guess != favmovie) && (guess != "quit")){
    
    guess=prompt("you r wring . please try again");

}

if(guess==favmovie){
    console.log("congrats");
}else{
    console.log("you quit");
}