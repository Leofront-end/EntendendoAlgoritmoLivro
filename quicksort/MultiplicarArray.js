function multiplicar(array, multiplicador){
    const arrayMultiplicado = []
    for (let numero of array) {
        arrayMultiplicado.push(numero*multiplicador)
    }   
    return arrayMultiplicado
}

const array = [2,3,7,8,10]
const arrayVezes2 = multiplicar(array,2)
const arrayVezes3 = multiplicar(arrayVezes2,3)
const arrayVezes7 = multiplicar(arrayVezes3,7)

console.log(arrayVezes2);
console.log(arrayVezes3);
console.log(arrayVezes7);

