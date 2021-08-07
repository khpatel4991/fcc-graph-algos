const graph = {
  0: ["8", "1", "5"],
  1: ["0"],
  5: ["0", "8"],
  8: ["0", "5"],
  2: ["3", "4"],
  3: ["2", "4"],
  4: ["3", "2"],
}

const exploreSize = (graph, node, visited) => {
  if(visited.has(node)) return 0;
  visited.add(node);
  let max = 1;
  for (const neighbour of graph[node]) {
    max += exploreSize(graph, neighbour, visited);
  }
  return max;
}

const largestComponentSize = (graph) => {
  let max = 0;
  const visited = new Set();
  for (const node in graph) {
    if(!visited.has(node)) {
      const d = exploreSize(graph, node, visited, 0);
      max = Math.max(max, d);
    }
  }
  return max;
}

console.log(largestComponentSize(graph));