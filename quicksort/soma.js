function soma(lista){
    if (lista.length == 0){
        return 0
    } else {
        let x = lista.shift()     
        return x + soma(lista)
    }
}
console.log(soma([5,6,7]));

