let maxNum = 1000

let multi = 2

for (let x = 0; multi < maxNum; x++) {

    multi = 2**x
    console.log(multi)

    document.getElementById("list").innerHTML += `<li> ${multi} </li>`

}
