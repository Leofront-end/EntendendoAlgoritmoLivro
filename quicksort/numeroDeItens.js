function numero(lista){
    if (lista.length == 0){
        return 0
    } else {
        lista.shift()
        return 1 + numero(lista)
    }
}

console.log(numero([1,2,3,4,5,6,7,8,9]));
