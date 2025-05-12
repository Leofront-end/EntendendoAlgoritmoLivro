function PesquisaBinaria(lista, target) {
    let alto = lista.length - 1
    let baixo = 0
    let meio
    while (baixo <= alto) {
        meio = Math.floor((baixo + alto) / 2)
        let chute = lista[meio]
        if (chute == target) {
            return meio
        }
        if (chute > target) {
            alto = meio -1 
        }else {
            baixo = meio + 1
        } 

    }
    return meio + 1
}


let target = 7
const lista = [1, 3, 5, 6]
console.log(PesquisaBinaria(lista, target))