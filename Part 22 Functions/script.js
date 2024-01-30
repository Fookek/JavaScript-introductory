function song(name){
    console.log("nago nago nago!")
    console.log("nago nago nago!")
    console.log(`nago is here for ${name}`)
    console.log("nago nago nago!")
}

song("killian");

function validemail(email){
    if(email.includes("@")){
        return true;
    }
    else{
        return false
    }
}
console.log(validemail(String("DBarkova@marlboroughcollege.my")));
