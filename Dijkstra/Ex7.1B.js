let grafo = {}

grafo["inicio"] = {}
grafo["inicio"]["a"] = 10

grafo["a"] = {}
grafo["a"]["b"] = 20

grafo["b"] = {}
grafo["b"]["c"] = 1
grafo["b"]["fim"] = 30

grafo["c"] = {}
grafo["c"]["a"] = 1

grafo["fim"] = {}

console.log("ANTES");

let custos = {}
custos["a"] = 10
custos["b"] = Infinity
custos["c"] = Infinity
custos["fim"] = Infinity

console.log(custos);

let pais = {}
pais["a"] = "Inicio"
pais["b"] = null
pais["c"] = null
pais["fim"] = null

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


