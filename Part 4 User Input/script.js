let username;

//username = window.prompt(`wut ur username`);

document.getElementById("submit").onclick = function log(){
    username = document.getElementById("mytext").value
    console.log(username);
    document.getElementById(`head`).textContent = `hello ${username}`;
}
