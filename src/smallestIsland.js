const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

const isLand = (c) => c === "L";
const k = (i, j) => `${i}:${j}`;

const exploreSize = (graph, i, j, visited) => {
  if(i < 0) return 0;  
  if(j < 0) return 0;  
  if(i >= graph.length) return 0;  
  if(j >= graph[i].length) return 0;
  if(visited.has(k(i, j))) return 0;
  if(!isLand(graph[i][j])) return 0;
  
  visited.add(k(i, j));
  return exploreSize(graph, i - 1, j, visited) +
    exploreSize(graph, i + 1, j, visited) +
    exploreSize(graph, i, j - 1, visited) +
    exploreSize(graph, i, j + 1, visited) + 1;
}

const smallestIsland = (graph) => {
  const visited = new Set();
  let min = Number.POSITIVE_INFINITY;
  for (let i = 0; i < graph.length; i++) {
    const row = graph[i];
    for (let j = 0; j < row.length; j++) {
      const cell = row[j];
      if(!visited.has(k(i, j)) && isLand(cell)) {
        const s = exploreSize(graph, i, j, visited);
        min = Math.min(min, s);
      }
    }
  }
  return min;
}

console.log(smallestIsland(grid));