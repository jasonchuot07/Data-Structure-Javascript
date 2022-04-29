// Types of graphs
// Vertex
// Edge


// Adjacency List vs Adjacency Matrix

// List: Take up less space (in sparse graphs), faster to iterate  over all edges, but slower to lookup specific edge
// Matrix: Takes up more space, slower to iterate over all edges, but faster to lookup specific edge

class Graph {
    constructor() {
        this.adjacencyList = {}
    } 
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
        }
    }
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }
    removeEdge(v1,v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2)
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1)
    }
    removeVertex(vertex) {
        while(this.adjacencyList[vertex].length) {
            const adjacencyVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, adjacencyVertex)
         }
         delete this.adjacencyList[vertex]
    }
    DFSRecursive(start) {
        const visited = []
        const results = []
        const adjacencyList = this.adjacencyList
        (
            function DFS(vertex) {
                if (!vertex) {
                    return null
                } 
                visited[vertex] = true
                results.push(vertex)
                adjacencyList[vertex].forEach(neighbor => {
                    if(!visited[neighbor]) {
                        return DFS(neighbor)
                    }
                })
            }
        )(start)
        return results
    }
    DFSIterative(start) {
        const stack = [start]
        const visited = []
        const results = []
        visited[start] = true
        while(stack.length) {
            let currentVertex = stack.pop()
            results.push(currentVertex)
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true
                    stack.push(neighbor)
                }
            })
        }
        return results
    }
}

