let a = [1, 2, 3, 4, 5, 6, 7, 7, 3, 2, 1]
let b = []
for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
        if (a[i] == a[j] && i != j) {
            b.push(a[j])
        }
    }
}
console.log(b)