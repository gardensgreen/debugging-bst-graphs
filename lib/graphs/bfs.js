function breadthFirstSearch(startingNode, targetVal) {
    // uncomment below
    const queue = [startingNode];
    const visited = new Set();

    while (queue.length) {
        let curr = queue.shift();
        if (curr.val === targetVal) return curr;
        if (!visited.has(curr.val)) {
            visited.add(curr.val);
            queue.push(...curr.neighbors);
        }
    }
    return null;
}

module.exports = {
    breadthFirstSearch,
};

// example (uncomment below)

// const { GraphNode } = require('./graph_node');

// let a = new GraphNode('a');
// let b = new GraphNode('b');
// let c = new GraphNode('c');
// a.neighbors = [b, c];
// console.log(breadthFirstSearch(a, 'c').val) // should equal 'c'

// let s = new GraphNode('s');
// let t = new GraphNode('t');
// s.neighbors = [t];
// t.neighbors = [s];
// console.log(breadthFirstSearch(s, 'q')) // should return null
