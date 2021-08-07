const graph = {
  A: ["C", "B"],
  B: ["D"],
  C: ["E"],
  D: ["F"],
  E: [],
  F: [],
};

const bfsIterative = (graph, start, fn = console.log) => {
  const queue = [start];
  while(queue.length > 0) {
    const node = queue.shift();
    fn(node);
    graph[node].forEach(node => {
      queue.push(node);
    });
  }
}

bfsIterative(graph, "A");
