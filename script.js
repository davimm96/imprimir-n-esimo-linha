var num = document.getElementById("numero").value
var numN = parseInt(document.getElementById("numero").value)
var res = document.getElementById("resposta")
function calcular(){
    var num = document.getElementById("numero").value
        numN = parseInt(document.getElementById("numero").value),
        res = document.getElementById("resposta")

    if(numN > 9000 || numN < 1 || num.length == 0){
        alert("digite um número de 1 até 9000")
    }else{
        res.innerHTML = ""//Reseta
            //Impede de clicar novamente no botão
        document.querySelector("span").style.display = "block"
        document.querySelector("button").style.display = "none"
        //Calcula...
        setTimeout(function(){
        function contae(min,max) {
            res.innerHTML += `${num} `
                if(min<max){
                    contae(++min, max)
                }
            }
            contae(1,numN)
            document.querySelector("span").style.display = "none"
            document.querySelector("button").style.display = "block"

            //Icone no final
            setTimeout(function(){
                res.innerHTML += " \u{1F3C1}"
            },1) 
        
        },5)
        
    }   
}