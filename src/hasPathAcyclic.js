const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: [],
};


const hasPathDfs = (g, src, dest) => {
  if(src === dest) return true;
  for (const node of g[src]) {
    if(hasPathDfs(g, node, dest)) return true;
  }
  return false;
};

const hasPathBfs = (g, src, dest) => {
  const queue = [src];
  while(queue.length) {
    const node = queue.shift();
    if(node === dest) return true;
    for (const n of g[node]) {
      queue.push(n);
    }
  }
  return false;
};

console.log("DFS: Has Path from f to k");
console.log(hasPathDfs(graph, 'f', 'k'));
console.log("BFS: Has Path from f to k");
console.log(hasPathBfs(graph, 'f', 'k'));
