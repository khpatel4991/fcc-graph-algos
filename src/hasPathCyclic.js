const undirectedGraph = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n'],
]

const buildGraph = (edges) => {
  const adjList = edges.reduce((acc, [n1, n2]) => {
    return {
      ...acc,
      [n1]: [],
      [n2]: [],
    }
  }, {});
  return edges.reduce((acc, [n1, n2]) => {
    acc[n1].push(n2);
    acc[n2].push(n1);
    return acc;
  }, adjList)
}


const hasPathDfs = (g, src, dest, visited = new Set()) => {
  if(src === dest) return true;
  if(visited.has(src)) return false;
  visited.add(src);
  for (const node of g[src]) {
    if(hasPathDfs(g, node, dest, visited)) return true;
  }
  return false;
};

const hasPathBfs = (g, src, dest) => {
  const visited = new Set()
  const queue = [src];
  while(queue.length) {
    const node = queue.shift();
    if (!visited.has(node)) {
      visited.add(node);
      if(node === dest) return true;
      for (const n of g[node]) {
          queue.push(n);
      }
    }
  }
  return false;
};

const graph = buildGraph(undirectedGraph);

console.log("DFS: Has Path from i to k");
console.log(hasPathDfs(graph, 'i', 'k'));
console.log("BFS: Has Path from i to k");
console.log(hasPathBfs(graph, 'i', 'k'));


console.log("DFS: Has Path from i to n");
console.log(hasPathDfs(graph, 'i', 'n'));
console.log("BFS: Has Path from i to n");
console.log(hasPathBfs(graph, 'i', 'n'));
