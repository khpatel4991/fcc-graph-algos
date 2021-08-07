const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
]

// Basically count connect components.

const isLand = (c) => c === "L";
const k = (i, j) => `${i}:${j}`;

const dfs = (graph, i, j, visited) => {
  if(i < 0) return;
  if(j < 0) return;
  if(i >= graph.length) return;
  if(j >= graph[i].length) return;
  if(visited.has(k(i, j))) return;
  if(!isLand(graph[i][j])) return;
  
  visited.add(k(i, j));

  dfs(graph, i, j + 1, visited);
  dfs(graph, i, j - 1, visited);
  dfs(graph, i + 1, j, visited);
  dfs(graph, i - 1, j, visited);
}

const islandCount = (graph) => {
  let count = 0;
  const visited = new Set();
  for (let i = 0; i < graph.length; i++) {
    const row = graph[i];
    for (let j = 0; j < row.length; j++) {
      const cell = row[j];
      if(!visited.has(k(i, j)) && isLand(cell)) {
        dfs(graph, i, j, visited);
        count += 1;
      }
    }
  }
  return count;
}

console.log(islandCount(grid));