type Node<T> = {
    value: T;
    prev?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        this.length++;
        const node = { value: item } as Node<T>;

        if (this.length === 1) {
            this.head = node;
            return;
        }

        const head = this.head;
        node.prev = head;
        this.head = node;
    }

    pop(): T | undefined {
        if (this.length === 0) return;
        this.length--;

        const head = this.head;
        this.head = head?.prev;

        return head?.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
