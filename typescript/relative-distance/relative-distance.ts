export function degreesOfSeparation(
  familyTree: object,
  personA: string,
  personB: string,
): number {
  const tree = familyTree as Record<string, string[]>;
  const graph = new Map<string, Set<string>>();

  const addEdge = (a: string, b: string) => {
    if (!graph.has(a)) graph.set(a, new Set());
    graph.get(a)!.add(b);
  };

  for (const parent in tree) {
    const children = tree[parent];

    for (const child of children) {
      addEdge(parent, child);
      addEdge(child, parent);
    }

    for (let i = 0; i < children.length; i++) {
      for (let j = i + 1; j < children.length; j++) {
        addEdge(children[i], children[j]);
        addEdge(children[j], children[i]);
      }
    }
  }

  if (!graph.has(personA) || !graph.has(personB)) return -1;

  const visited = new Set<string>();
  const queue: Array<[string, number]> = [[personA, 0]];

  while (queue.length > 0) {
    const [current, distance] = queue.shift()!;

    if (current === personB) return distance;

    visited.add(current);

    for (const neighbor of graph.get(current)!) {
      if (!visited.has(neighbor)) {
        queue.push([neighbor, distance + 1]);
      }
    }
  }

  return -1;
}
