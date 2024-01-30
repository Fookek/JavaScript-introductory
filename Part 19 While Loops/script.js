/*    using Python Logic
let username = "";
while(username == "" || username === null){
    console.log("please enter username");
    username = window.prompt("enter username");
}
*/

//can use Do While loop, no need to define username at start
do{
    username = window.prompt("enter username");
}while(username == "" || username === null);

console.log(`hello ${username}`)

