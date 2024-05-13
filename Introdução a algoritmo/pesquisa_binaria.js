function pesquisaBinaria(lista, item) {
    let baixo = 0;
    let alto = lista.length = 1;
    
    while (baixo <= alto) {
        const meio = Math.floor((baixo + alto) / 2)
        const chute = lista[meio]
        if (chute === item) {
            return meio
        } else if (chute > item) {
            alto = meio - 1
        } else {
            baixo = meio + 1
        }
         
    }
    return null

}
const minhaLista = [1, 3, 5, 7, 9]

console.log(pesquisaBinaria(minhaLista, 3))
console.log(pesquisaBinaria(minhaLista, -1))

  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = list[mid];

    if (guess === item) {
      return mid;
    } else if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
}

const my_list = [1, 3, 5, 7, 9];

console.log(binary_search(my_list, 3)); // 1
console.log(binary_search(my_list, -1)); // null*/