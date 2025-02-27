parola = prompt("inserire parola")
function isPalindrome(parola){
    parola = parola.toLowerCase()
    let parolaArray = []
    let parolaContrario = [] 
    // prendo ogni lettera della parola e la metto in un array
    for (let i = 0; i < parola.length;i++ ){
        parolaContrario.unshift(parola[i])
        parolaArray.push(parola[i])
    } 
    // controllo se la parola è uguale per entrambi gli array
    if (parolaArray.join('') === parolaContrario.join('')){
        console.log("true")
    }
    else{
        console.log("false")
        
    }
}
isPalindrome(parola)


