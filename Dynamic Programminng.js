// Dynamic Programming Is a method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once and storing their solutions
// Obtimal substructure can be have if an optimal solution can be constructed from optimal solution of it's subproblems

// fibonacci sequence using recursive solution, Big O(2^n)

const fib = (n) => {
    if (n <= 2) return 1
    return fib(n-1) + fib(n-2)
}