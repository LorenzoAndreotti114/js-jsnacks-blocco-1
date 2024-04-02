let userNum = parseInt(prompt("inserire il numero massimo"));
console.log(userNum, typeof userNum);

let number = 0

for (let x = 0; x <= userNum; x++) {

    number = x**3
    console.log(number)

    document.getElementById("list").innerHTML += `<li> ${x} ^3 = ${number} </li>`
}