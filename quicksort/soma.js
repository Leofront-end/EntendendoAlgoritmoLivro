
function soma(lista){
    let x = lista[0]
    if (lista.length == 0){
        return 0
    } else {
        lista.shift()
        return x + soma(lista)
    }
}
console.log(soma([5,6,7]));

