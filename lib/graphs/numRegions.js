// function numRegions(graph) {
//     const visited = new Set();
//     let regions = 0;
//     for (node in graph) {
//         if (dfs(node, graph, visited)) regions++;
//     }
//     return regions;
// }

// function dfs(node, graph, visited) {
//     if (visited.has(node)) return false;
//     visited.add(node);
//     graph[node].forEach((neighbor) => dfs(neighbor, graph, visited));
//     return true;
// }

function numRegions(graph) {
    const set = new Set();
    let regions = 0;
    for (key in graph) {
        if (!set.has(key)) {
            regions += 1;
        }
        graph[key].forEach((neighbor) => set.add(neighbor));
        set.add(key);
    }
    return regions;
}

// example

let graph1 = { a: [b, c], b: [d], d: [e] };
console.log(numRegions(graph1)); // should equal 2zz

module.exports = { numRegions };
