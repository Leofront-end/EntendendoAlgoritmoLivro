function pessoa_e_vendedor(nome) {
    return nome.slice(-1) == "m"
}

let grafo = new Map();

grafo.set("Você", ["Alice","Bob","Claire"])
grafo.set("Bob",["Anuj","Peggy"])
grafo.set("Alice",["Peggy"])
grafo.set("Claire",["Thom","Jhonny"])
grafo.set("Anuj",[])
grafo.set("Peggy",[])
grafo.set("Thom",[])
grafo.set("Jhonny",[])


function Pesquisa(nome){
    let filaDePesquisa = []
    filaDePesquisa.push(...grafo.get("Você"))
    let verificadas = []

    for (let i = 0; i < filaDePesquisa.length; i++) {
        let pessoa = filaDePesquisa[i]
        if (!verificadas.includes(pessoa)){
            if (pessoa_e_vendedor(pessoa)){
                console.log(`${pessoa} é vendedor de manga!`);
                return true
            } else {
                filaDePesquisa.push(...grafo.get(pessoa))
                verificadas.push(pessoa)
            }
        }
    }
    return false
}
console.log(Pesquisa("Você"));


