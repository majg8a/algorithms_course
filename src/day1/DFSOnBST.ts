function search(curr: BinaryNode<number> | null, needle: number): boolean {
    if (!curr) {
        return false;
    }
    if (needle === curr.value) {
        return true;
    }

    if (needle < curr.value) {
        return search(curr.left, needle);
    } else {
        return search(curr.right, needle);
    }
}
export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return search(head, needle);
}
