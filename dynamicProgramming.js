// function fibMemo(n, memo = []) {
//     if (memo[n] !== undefined) return memo[n]
//     if (n <= 2) return 1
//     let result =  fib(n-2, memo) + fib(n-1, memo)
//     memo[n] = result
//     return result
// }

function fibTable(n) {
    if (n <= 2) return 1
    let fibNums = [0,1,1]
    for (let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i-2]
    }
    return fibNums[n]
}

console.log(fibTable(8))
