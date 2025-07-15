let grafo = {}

grafo["inicio"] = {}
grafo["inicio"]["a"] = 6
grafo["inicio"]["b"] = 2

grafo["a"] = {}
grafo["a"]["fim"] = 1

grafo["b"] = {}
grafo["b"]["a"] = 3
grafo["b"]["fim"] = 5

grafo["fim"] = {}

console.log("ANTES");

let custos = {}
custos["a"] = 6
custos["b"] = 2
custos["fim"] = Infinity

console.log(custos);

let pais = {}
pais["a"] = "Inicio"
pais["b"] = "Inicio"
pais["fim"]

console.log(pais);


let processados = []

function ache_no_custo_mais_barato(custos) {
    let custo_mais_barato = Infinity
    let nodo_custa_mais_barato = null
    for (let nodo in custos) {
        let custo = custos[nodo]
        if (custo < custo_mais_barato && !processados.includes(nodo)) {
            custo_mais_barato = custo
            nodo_custa_mais_barato = nodo
        } 
    }

    return nodo_custa_mais_barato
}

let nodo = ache_no_custo_mais_barato(custos)
while (nodo != null) {
    let custo = custos[nodo]
    let vizinhos = grafo[nodo]
    for (let n in vizinhos) {
        let novo_custo = custo + vizinhos[n]
        if (custos[n] > novo_custo) {
            custos[n] = novo_custo
            pais[n] = nodo
        }
    }
    processados.push(nodo)
    nodo = ache_no_custo_mais_barato(custos)   
}

console.log("DEPOIS");

console.log(custos);
console.log(pais);


