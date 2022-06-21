import { writable } from  "svelte/store";

export const ModalOpen = writable(false);

/**
 * @param {any} Name
 */
export function ModalInfo(Name){
    switch(Name){
        case "Array":
            name = "Arrays";
            info = "Arrays are cool";
            break;
        case "Linked List":
            name = "Linked List";
            info = "Linked List are cool";
            break;
        case "Stack":
            name = "Stack";
            info = "Stack are cool";
            break;
        case "Queue":
            name = "Queue";
            info = "Queue are cool";
            break;
        case "Binary Tree":
            name = "Binary Tree";
            info = "Binary Tree are cool";
            break;
        case "Binary Search Tree":
            name = "Binary Search Tree";
            info = "Binary Search Tree are cool";
            break;
        case "Heap":
            name = "Heap";
            info = "Heap are cool";
            break;
        case "Hashing":
            name = "Hashing";
            info = "Hashing are cool";
            break;
        case "Graph":
            name = "Graph";
            info = "Graph are cool";
            break;
        case "Matrix":
            name = "Matrix";
            info = "Matrix are cool";
            break;
    }
    ModalOpen.set(true);
}

/**
 * @type {string}
 */
export let name;
/**
 * @type {string}
 */
export let info;