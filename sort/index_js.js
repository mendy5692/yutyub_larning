/*document.getElementById("btm").onclick = function () {
    let value1 = document.getElementById("inp1").value;
    let value2 = document.getElementById("inp2").value;
    let value3 = document.getElementById("inp3").value;

    let sum = parseInt(value1) + parseInt(value2);
    let output = sum === parseInt(value3);

    document.getElementById("prg").innerHTML = output
}
*/

/*document.getElementById("btm").onclick = function () {
    let value1 = document.getElementById("inp1").value;
    let value2 = document.getElementById("inp2").value;
    let value3 = document.getElementById("inp3").value;

    let num1 = parseInt(value1);
    let num2 = parseInt(value2);

    let output = (17 < num1 && num1 < 27) ||
                (num2 > num1 * 10) ||
                (value3 === "mendy");

    document.getElementById("prg").innerHTML = output
}
*/

/*
let x = prompt("Enter a number: ")
document.getElementById("prg").innerHTML = x
*/

document.getElementById("btm").onclick = function () {
    let value1 = parseInt(document.getElementById("inp1").value);
    let value2 = parseInt(document.getElementById("inp2").value);
    let value3 = document.getElementById("inp3").value;

    if (value3 === "+")
        output = value1 + value2;
    else if (value3 === "-")
        output = value1 - value2;
    else if (value3 === "*")
        output = value1 * value2;
    else if (value3 === "/")
        output = value1 / value2;
    else
        output = "invalid"


    document.getElementById("prg").innerHTML = output
}





