let todo=[];

let task=prompt("enter the operation to Todo");

while(true){

    if(task=="quit"){
       console.log("quiting todo....")
       break;
    }

    else if(task=="list"){
            for(let i=0;i<todo.length;i++){
                console.log(i , todo[i]);
            }
        
    }
    else if(task=="add"){
        let req=prompt("enter the todo to add");
        todo.push(req);
        console.log("task added");
    }
    else if(task=="delete"){
        let idx=prompt("enter the index to delete");
        todo.splice(idx,1);
        console.log("deleted");
    }
    else{
        console.log("you entered wrong input");
    }
    task=prompt("enter the todo task");
}