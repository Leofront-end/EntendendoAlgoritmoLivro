function TempoLinear(lista) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] != i) {
            console.log(`The smallest missing element is ${i}`)
            return
        }
    }
    console.log(`The smallest missing element is ${lista.length}`)
}

num = [0, 1, 2, 6, 9, 11, 15]
num2 = [1, 2, 3, 4, 6, 9, 11, 15]
num3 = [0, 1, 2, 3, 4, 5, 6]

TempoLinear(num)
TempoLinear(num2)
TempoLinear(num3)