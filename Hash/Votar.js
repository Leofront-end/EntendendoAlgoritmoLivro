let votar = new Map();

function verificar_eleitor(nome) {
    if (votar.get(nome)) {
        console.log("Manda embora");
    } else {
        votar.set(nome,nome)
        console.log("Deixe votar"); 
    }
}

verificar_eleitor("Tom")
verificar_eleitor("Mike")
verificar_eleitor("Mike")