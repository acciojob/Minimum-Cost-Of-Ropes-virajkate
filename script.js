function calculateMinCost() {
  //your code here
	 // Initialize a min-heap priority queue with the given rope lengths.
  const pq = new MinPriorityQueue({ priority: (rope) => rope });
  arr.forEach(rope => pq.enqueue(rope));

  // Repeat until there is only one rope left in the queue.
  let cost = 0;
  while (pq.size() > 1) {
    // Extract the two shortest ropes from the queue.
    const rope1 = pq.dequeue().element;
    const rope2 = pq.dequeue().element;

    // Connect the two ropes and add the cost to the total cost.
    const newRope = rope1 + rope2;
    cost += newRope;

    // Add the new rope back into the queue.
    pq.enqueue(newRope);
  }

  // Return the total cost of connecting all the ropes.
  return cost;
  
  
  
}  
