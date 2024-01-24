
var number1 =""
var number2 =""
var isnumber1Ready =false;

function formNumber(n){
    if (isnumber1Ready==false){
        if (number1.length<=18){
        number1 +=n
        document.getElementById("screen").textContent =number1
        }

    
    }
    else{
        if (number2.length<=18){
        number2 +=n
        document.getElementById("screen").textContent =number2
        }
    }
}

function sum(a, b){
    return a +b
}
function sub(a, b){
    return a-b
}
function mul(a, b){
    return a *b
}
function div(a, b){
    return a/b
}
function clear_all(){
    number1 =""
    number2 =""
    isnumber1Ready =false
    console.log(number1, number2)
    document.getElementById("screen").textContent ='0'

}
function onSum(){
    number1 =Number(number1)
    isnumber1Ready =true
    document.getElementById("equal").setAttribute("onclick", "cal(number1, number2, sum)")
}
function onSub(){
    number1 =Number(number1)
    isnumber1Ready =true
    document.getElementById("equal").setAttribute("onclick", "cal(number1, number2, sub)")
}
function onMul(){
    number1 =Number(number1)
    isnumber1Ready =true
    document.getElementById("equal").setAttribute("onclick", "cal(number1, number2, mul)")
}
function onDiv(){
    number1 =Number(number1)
    isnumber1Ready =true
    document.getElementById("equal").setAttribute("onclick", "cal(number1, number2, div)")
}
function cal(numb1, numb2, op){
    number2 =Number(numb2)
    result =op(number1, number2)
    number1 =result
    number2 =""
    
    document.getElementById("screen").textContent =result

}
