
let button = document.getElementById("btn");

button.addEventListener("click", function() {

    console.log("start");

    const maxNumber = 10

    let totNumber = 0

    for (let x = 1; x <= maxNumber; x++) { 
        
        let ask = parseInt(prompt())
        console.log(ask, typeof ask)
        totNumber += ask 
        
    };

    console.log(totNumber);

    alert(`il totale dei numeri è: ${totNumber}`)
    
    document.getElementById("numberShow").innerHTML += totNumber

});

