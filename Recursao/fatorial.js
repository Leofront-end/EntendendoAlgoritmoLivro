function fatorial(n) {
    if (n == 0){
        // Caso Base
        return 1
    } else {
        // Caso Recursivo
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5));