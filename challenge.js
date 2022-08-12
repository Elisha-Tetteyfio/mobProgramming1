function staircase(n) {
    // Write your code here
    for (let j=n-1; j>=0; j--){
        console.log(" ".repeat(j) + "#".repeat(n-j))
    }
}
