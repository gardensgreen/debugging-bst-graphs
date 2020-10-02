function maxValue(node, visited = new Set()) {
    if (visited.has(node)) return -Infinity;

    visited.add(node);
    let neighborMaxes = node.neighbors.map((neighbor) =>
        maxValue(neighbor, visited)
    );
    return Math.max(node.val, ...neighborMaxes);
}

// example

const { GraphNode } = require("./graph_node");

let five = new GraphNode(5);
let three = new GraphNode(3);
let two = new GraphNode(2);
let four = new GraphNode(4);
let ten = new GraphNode(10);
let seven = new GraphNode(7);
let six = new GraphNode(6);
five.neighbors = [three, two, four];
two.neighbors = [seven, ten];
four.neighbors = [six];

console.log(maxValue(five)); // should equal 9

module.exports = { maxValue };
