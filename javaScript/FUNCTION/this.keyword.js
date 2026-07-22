const student={
    name:"krishna",
    age:22,
    eng:99,
    phy:74,
    math:82,

    getAvg(){
        let avg=(this.eng+this.phy+this.math)/3;
        console.log(avg);
    }
}