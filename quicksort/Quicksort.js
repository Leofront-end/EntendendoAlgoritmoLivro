function quicksort(array){
    if (array.length < 2) {
        return array
    } else {
        let pivo = array[0]
        let menores = []
        let maiores = []
        for (let index = 1; index < array.length; index++) {
            const element = array[index];
            if (element <= pivo) {
                menores.push(element)
            } else {
                maiores.push(element)
            }
            
        }
        return [...quicksort(menores), pivo, ...quicksort(maiores)]
        // return [].concat(quicksort(menores) , [pivo], quicksort(maiores))
    }
}

let array1 = [10,5,2,3]
let array2 = [97,5,6,75,101]

console.log(quicksort(array1));
