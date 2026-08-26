const figlet= require("figlet");

figlet("Anshu", function(err, data){
    if(err){
        console.log("Something went wrong...");
        return;
    }
    console.log(data);
    
})