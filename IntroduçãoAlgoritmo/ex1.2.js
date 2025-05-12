let alto = 128*2
console.log(alto)

let contagem = 0

do {
    alto /= 2
    console.log(alto) 
    contagem++   

} while (alto > 1);

console.log(`Foram realizados ${contagem} etapas`)