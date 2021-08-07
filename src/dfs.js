const graph = {
  A: ["C", "B"],
  B: ["D"],
  C: ["E"],
  D: ["F"],
  E: [],
  F: [],
};

const dfsIterative = (graph, src, fn = console.log) => {
  const stack = [src];

  while(stack.length > 0) {
    const node = stack.pop();
    fn(node);
    graph[node].forEach(child => {
      stack.push(child);
    });
  }
}

const dfsRecursive = (graph, src, fn = console.log) => {
  fn(src);

  graph[src].forEach(child => {
    dfsRecursive(graph, child, fn);
  });
}

console.log("DFS Iterative: ");
dfsIterative(graph, "A");
console.log("DFS Recursive: ");
dfsRecursive(graph, "A");