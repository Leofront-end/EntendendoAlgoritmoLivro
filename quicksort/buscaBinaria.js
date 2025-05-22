function buscaBinaria(lista, numeroProcurado) {
    let baixo = 0
    let alto = lista.length - 1
    const meio = Math.floor((baixo + alto)/2)
    const chute = lista[meio]
    
    if(chute === numeroProcurado){
        return meio
    } else if (chute > numeroProcurado){
        lista.splice(meio, lista.length)
        return baixo + buscaBinaria(lista,numeroProcurado)
    } else{
        lista.splice(0,meio+1)
        return meio + 1 + buscaBinaria(lista,numeroProcurado)
    }

    return null  
}

console.log(buscaBinaria([1,2,3,4,5,6,7,8,9],5))