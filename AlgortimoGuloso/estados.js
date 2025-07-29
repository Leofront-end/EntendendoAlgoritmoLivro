let estados_abranger = new Set(["mt","wa","or","id","nv","ut","ca","az"])

let estacoes = {}

estacoes["kum"] = new Set(["id","nv","ut"])
estacoes["kdois"] = new Set(["wa","id","mt"])
estacoes["ktres"] = new Set(["or","nv","ca"])
estacoes["kquatro"] = new Set(["nv","ut"])
estacoes["kcinco"] = new Set(["ca","az"])
// console.log(estacoes);

let estacoesFinais = new Set()

while (estados_abranger.size) {
    let melhorEstacao = null
    let estadosCoberto = new Set()

    for (let estacao in estacoes) {
        const estadosPorEstacao = estacoes[estacao]
        
        const cobertos = new Set([...estados_abranger].filter(x => estadosPorEstacao.has(x)))
        
        if (cobertos.size > estadosCoberto.size) {
            melhorEstacao = estacao
            estadosCoberto = cobertos
        }
    }
    estados_abranger = new Set([...estados_abranger].filter(x => !estadosCoberto.has(x)))
    estacoesFinais.add(melhorEstacao)
}

console.log(estacoesFinais);
