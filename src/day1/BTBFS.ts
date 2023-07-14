import Queue from "./Queue";

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    // const q: (BinaryNode<number> | null)[] = [head];
    const q = new Queue<BinaryNode<number> | null>();
    q.enqueue(head);
    while (q.length) {
        const curr = q.deque() as BinaryNode<number>;

        if (!curr) {
            continue;
        }

        if (curr.value === needle) {
            return true;
        }

        q.enqueue(curr.left);
        q.enqueue(curr.right);
    }
    return false;
}
