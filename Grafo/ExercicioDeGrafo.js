// Pedi para o chat GPT me da um ex
function pessoa_conserta(nome) {
    return nome.includes("print")
}

const grafo = new Map();
grafo.set("Você", ["Carla","Diego","Bruno"])
grafo.set("Carla", ["Vitor","Joana","lucas"])
grafo.set("Diego", ["printadora"])
grafo.set("Bruno", ["marcos","lucas"])
grafo.set("Vitor",[])
grafo.set("Joana", [])
grafo.set("printadora", [])
grafo.set("marcos",[])
grafo.set("lucas",[])

function pessoa_concerta_empressora(nome){
    let fila = []
    fila.push(...grafo.get(nome))
    let verificador = []
    for (let i = 0; i < fila.length; i++) {
        let pessoa = fila[i]
        
        if (!verificador.includes(pessoa)) {
            if (pessoa_conserta(pessoa)) {
                return `${pessoa} concerta `
            
            } else {
                fila.push(...grafo.get(pessoa))
                verificador.push(pessoa)
            }
        }
    }
}

console.log(pessoa_concerta_empressora("Você"));

