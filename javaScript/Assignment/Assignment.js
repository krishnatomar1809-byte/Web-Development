let str="abcdabcdefgggh";

function unquieStr(str){
    let ans="";
    for(let i=0;i<str.length;i++){
        let currstr=str[i];
        if(ans.indexOf(currstr)==-1){
            ans += currstr;
        }
    }
    return ans;
}

console.log(unquieStr(str));

