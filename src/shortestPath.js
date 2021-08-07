const edgeList = [
  ["w", "x"],
  ["y", "x"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

const edgeList2 = [
  ['a', 'c'],
  ['a', 'b'],
  ['c', 'b'],
  ['c', 'd'],
  ['b', 'd'],
  ['e', 'd'],
  ['g', 'f'],
];

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

const shortestPath = (graph, src, dest) => {
  const visited = new Set();
  const q = [{n: src, d: 0}];

  while(q.length) {
    const { n, d } = q.shift();
    if(n === dest) return d;

    visited.add(n);
    for (const neighbour of graph[n]) {
      if(!visited.has(neighbour)) {
        q.push({ n: neighbour, d: d + 1 }); 
      }
    }
  }
  return -1;
}

const graph = buildGraph(edgeList);
const graph2 = buildGraph(edgeList2);

console.log(shortestPath(graph, "w", "z"));
console.log(shortestPath(graph2, 'b', 'g'))