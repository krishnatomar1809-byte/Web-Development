const max=prompt("enter the max range of the number");

const num=Math.floor(Math.random()*max)+1;
let guess=prompt("Guess the number");
while(true){

    if(guess=="quit"){
        console.log("quiting game");
        break;
    }

  
    if(guess==num){
        console.log("you have entered the correct number",num);
        break;
    }
    else if(guess>num){
        guess=prompt("your guess is higher than number. please try again");

    }
    else{
        guess=prompt("your guess is smaller than th number.please try again");
    }
}