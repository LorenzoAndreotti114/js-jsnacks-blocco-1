let whiteList = ["pippo", "pluto", "paperino"]

let name = prompt("Scrivi il tuo nome e saprai se puoi partecipare alla mia bellissima festa")
console.log(name);

if (whiteList.includes(name)) {
    console.log("yess");
    document.getElementById("msg").innerHTML = (name) + (" PUO' PARTECIPARE!!")
}
else {
    console.log("nope");
    document.getElementById("msg").innerHTML = (name) + (" NON PUO' PARTECIPARE!!")

}

