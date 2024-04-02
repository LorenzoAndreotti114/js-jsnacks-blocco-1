let numList = []

let maxNum = 5

for (let x = 1; x <= maxNum; x++) {
    let num = prompt("scrivi qualcosa da aggiungere alla listalul")
    console.log(num);

    numList.push(num)
}

console.log(numList);

document.getElementById("listResult").innerHTML = numList