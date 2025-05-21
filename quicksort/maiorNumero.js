function maiorNumero (lista) {
    let valor = lista.shift()

    if (lista.length == 0 ){
        return 0
    } 
    const maiorvalor = maiorNumero(lista)
    return valor > maiorvalor ? valor : maiorvalor
    
}


console.log(maiorNumero([0,9,5,6,4,2]));
