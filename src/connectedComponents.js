const graph = {
  1: ["2"],
  2: ["1"],
  3: [],
  4: ["6"],
  5: ["6"],
  6: ["4", "5", "7", "8"],
  7: ["6"],
  8: ["6"],
};

const graph2 = {
  0: ["8", "1", "5"],
  1: ["0"],
  5: ["0", "8"],
  8: ["0", "5"],
  2: ["3", "4"],
  3: ["2", "4"],
  4: ["3", "2"],
}

const dfs = (graph, node, visited) => {
  if(visited.has(node)) return;
  visited.add(node);
  for (const neighbour of graph[node]) {
    dfs(graph, neighbour, visited);
  }
}

const connectedComponents = (graph) => {
  const visited = new Set();
  let count = 0;
  for (const node in graph) {
    if(!visited.has(node)) {
      dfs(graph, node, visited);
      count += 1;
    }
  }
  return count;
}

console.log(connectedComponents(graph));
console.log(connectedComponents(graph2));