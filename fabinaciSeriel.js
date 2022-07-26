//fabinaci series
function fabinaciSeriel(n) {
    let fabinaci = [1, 1]
    for (let i = 2; i < n; i++) {
        fabinaci.push(fabinaci[i - 1] + fabinaci[i - 2])
    }
    return fabinaci
}
console.log(fabinaciSeriel(10))