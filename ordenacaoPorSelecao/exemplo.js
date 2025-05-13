function buscaMenor(array) {
    let menor = array[0]
    let menorIndice = 0
    for (let i = 0;i < array.length; i++) {
        if (array[i] < menor){
            menor = array[i]
            menorIndice = i
        }
    } 
    return menorIndice
}

function ordenarporSelecao(array) {
    novoArray = []
    let size = array.length
    for (let i = 0;i < size; i++){
        menor = buscaMenor(array)
        novoArray.push(array.splice(menor,1))
    }
    return novoArray
}

console.log(ordenarporSelecao([5, 3, 6, 2, 10]))