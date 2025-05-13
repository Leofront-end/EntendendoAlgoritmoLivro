function regresiva(i) {
    console.log(i)
    if (i <= 1) return
    regresiva(i-1)
}

regresiva(10)