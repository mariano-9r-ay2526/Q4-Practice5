function makePassword(){
    
let password = "";

do {
    password = prompt("Enter a password longer than 4 characters", "");
} while (password.length < 5);

window.alert("Entered password: ", password);
}