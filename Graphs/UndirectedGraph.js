/*
* Graphs: Nodes + connections
Usage:

1. Vertex
2. Edges
3. UnDirectional
4. Directional
5. Weighted
6. Unweighted

7. UnDirectional Unweighted
8. UnDirectional Weighted

9. Directional Unweighted
10. Directional Weighted

*******************************************************************
Storage for Graphs:
1. Adjaceny Matrix (connections + edges )
2. Adjaceny List 
    -> Arrays([ 0:[1,4], 1:[1,2] ]) Edges inside nested array
    -> May handle using has as well
        {  A:[1,2], B:[3,4] }
       
 | V | => number of vertices
 | E | => number of edges      

Operation     Adjaceny List     Adjaceny Matrix

Add Vertex      O(1)            O(|V ^ 2|)
Add Edges       O(1)            O(1)
Remove Vertex   O(|V|+|E|)      O(|V ^ 2|)
Remove Edges    O(|E|)          O(1)
Query           O(|V|+|E|)      O(1)
Storage         O(|V|+|E|)      O(|V ^ 2|)
********************************************************************
Adjaceny List                    VS         Adjaceny Matrix
-Can take up less space                Take up more space
(in sparse:(connected) graph)          (in sparse:(connected) graph)         

-Faster to iterate                      Slower to iterate 
 over all edges                         over all edges

-Can be slower to lookup                Faster to lookup 
specific edges                          specific edges

Going with Adjaceny List: Since real world use this more
NOte: work on Adjaceny Matrix on too
*/

//UndirectedGraph
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  //Adding vertex
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  //Adding edges
  addEdge(vertex1, vertex2) {
    if (vertex1 !== vertex2) {
      this.addEdgeByVertex(vertex1, vertex2);
      this.addEdgeByVertex(vertex2, vertex1);
      return true;
    }
    return 'Vertex to be Unique';
  }

  //Remove Edges
  removeEdge(vertex1, vertex2) {
    this.removeEdgeByVertex(vertex1, vertex2);
    this.removeEdgeByVertex(vertex2, vertex1);
    return true;
  }

  //Remove All Vertex
  removeVertex(vertex) {
    var allEdges = this.adjacencyList[vertex];
    for (var i = 0; i < allEdges.length; i++) {
      this.removeEdgeByVertex(allEdges[i], vertex);
    }
    delete this.adjacencyList[vertex];
  }

  addEdgeByVertex(vertex, value) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [value];

    if (!this.containsEdge(vertex, value))
      this.adjacencyList[vertex].push(value);
  }

  containsEdge(vertex, value) {
    return this.adjacencyList[vertex].includes(value);
  }

  removeEdgeByVertex(vertex, value) {
    if (this.adjacencyList[vertex] && this.adjacencyList[vertex].length > 0) {
      this.adjacencyList[vertex] = this.adjacencyList[vertex].filter(
        (v) => v !== value
      );
    }
  }
}

var undirectedGraph = new Graph();
