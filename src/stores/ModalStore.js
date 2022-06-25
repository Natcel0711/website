import { writable } from  "svelte/store";

export const ModalOpen = writable(false);

/**
 * @param {any} Name
 */
export function ModalInfo(Name){
    console.log(Name);
    switch(Name){
        case "Array":
            name = "Arrays";
            info = "An array is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together. This makes it easier to calculate the position of each element by simply adding an offset to a base value, i.e., the memory location of the first element of the array (generally denoted by the name of the array).";
            break;
        case "Linked List":
            name = "Linked List";
            info = "A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers. In simple words, a linked list consists of nodes where each node contains a data field and a reference(link) to the next node in the list.";
            break;
        case "Stack":
            name = "Stack";
            info = "Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out).\n There are many real-life examples of a stack. Consider an example of plates stacked over one another in the canteen. The plate which is at the top is the first one to be removed, i.e. the plate which has been placed at the bottommost position remains in the stack for the longest period of time. So, it can be simply seen to follow LIFO(Last In First Out)/FILO(First In Last Out) order.";
            break;
        case "Queue":
            name = "Queue";
            info = "A Queue is a linear structure which follows a particular order in which the operations are performed. The order is First In First Out (FIFO). A good example of a queue is any queue of consumers for a resource where the consumer that came first is served first. The difference between stacks and queues is in removing. In a stack we remove the item the most recently added; in a queue, we remove the item the least recently added.";
            break;
        case "Binary Tree":
            name = "Binary Tree";
            info = "A tree whose elements have at most 2 children is called a binary tree. Since each element in a binary tree can have only 2 children, we typically name them the left and right child. \n A Binary Tree node contains the following parts. \n 1. Data \n 2. Pointer to left child \n 3. Pointer to right child";
            break;
        case "Binary Search Tree":
            name = "Binary Search Tree";
            info = "Binary Search Tree is a node-based binary tree data structure which has the following properties: \n - The left subtree of a node contains only nodes with keys lesser than the node’s key. \n - The right subtree of a node contains only nodes with keys greater than the node’s key. \n - The left and right subtree each must also be a binary search tree.";
            break;
        case "Heap":
            name = "Heap";
            info = "A Heap is a special Tree-based data structure in which the tree is a complete binary tree. Generally, Heaps can be of two types: \n 1. Max-Heap: In a Max-Heap the key present at the root node must be greatest among the keys present at all of it’s children. The same property must be recursively true for all sub-trees in that Binary Tree. \n 2. Min-Heap: In a Min-Heap the key present at the root node must be minimum among the keys present at all of it’s children. The same property must be recursively true for all sub-trees in that Binary Tree.";
            break;
        case "Hashing":
            name = "Hashing";
            info = "Hashing is a technique or process of mapping keys, and values into the hash table by using a hash function. It is done for faster access to elements. The efficiency of mapping depends on the efficiency of the hash function used. \n Let a hash function H(x) maps the value x at the index x%10 in an Array. For example if the list of values is [11,12,13,14,15] it will be stored at positions {1,2,3,4,5} in the array or Hash table respectively.";
            break;
        case "Graph":
            name = "Graph";
            info = "A Graph is a non-linear data structure consisting of nodes and edges. The nodes are sometimes also referred to as vertices and the edges are lines or arcs that connect any two nodes in the graph. More formally a Graph can be defined as, \n A Graph consists of a finite set of vertices(or nodes) and set of Edges which connect a pair of nodes. \n Graphs are used to solve many real-life problems. Graphs are used to represent networks. The networks may include paths in a city or telephone network or circuit network. Graphs are also used in social networks like linkedIn, Facebook. For example, in Facebook, each person is represented with a vertex(or node). Each node is a structure and contains information like person id, name, gender, locale etc.";
            break;
        case "Matrix":
            name = "Matrix";
            info = "A matrix represents a collection of numbers arranged in an order of rows and columns. It is necessary to enclose the elements of a matrix in parentheses or brackets.";
            break;
        case "BubbleSort":
            name = "Bubble Sort";
            info = "Bubble sort, sometimes referred to as bubble sort or sinking sort, is a simple sorting algorithm that works by repeatedly swapping adjacent elements if they are in wrong order. The algorithm is named after the way smaller or larger elements float to the top of the list.";
            break;
        case "SelectionSort":
            name = "Selection Sort";
            info = "Selection sort is a sorting algorithm that works by iterating through the list of items and swapping the adjacent items if they are in the wrong order. The algorithm is named after the way smaller or larger elements are selected.";
            break;
        case "InsertionSort":
            name = "Insertion Sort";
            info = "Insertion sort is a sorting algorithm that works by iterating through the list of items and swapping the adjacent items if they are in the wrong order. The algorithm is named after the way smaller or larger elements are selected.";
            break;
        case "MergeSort":
            name = "Merge Sort";
            info = "Merge sort is a sorting algorithm that works by iterating through the list of items and swapping the adjacent items if they are in the wrong order. The algorithm is named after the way smaller or larger elements are selected.";
            break;
        case "QuickSort":
            name = "Quick Sort";
            info = "Quick sort is a sorting algorithm that works by iterating through the list of items and swapping the adjacent items if they are in the wrong order. The algorithm is named after the way smaller or larger elements are selected.";
            break;
        case "HeapSort":
            name = "Heap Sort";
            info = "Heap sort is a sorting algorithm that works by iterating through the list of items and swapping the adjacent items if they are in the wrong order. The algorithm is named after the way smaller or larger elements are selected.";
            break;
        case "BucketSort":
            name = "Bucket Sort";
            info = "Bucket sort is a sorting algorithm that works by iterating through the list of items and swapping the adjacent items if they are in the wrong order. The algorithm is named after the way smaller or larger elements are selected.";
            break;
        case "CountingSort":
            name = "Counting Sort";
            info = "Counting sort is a sorting algorithm that works by iterating through the list of items and swapping the adjacent items if they are in the wrong order. The algorithm is named after the way smaller or larger elements are selected.";
            break;
        case "LinearSearch":
            name = "Linear Search";
            info = "Linear search is a search algorithm that sequentially checks each element of a list to determine if it contains a specified value. The algorithm is named after the way smaller or larger elements are selected.";
            break;
        case "JumpSearch":
            name = "Jump Search";
            info = "Jump search is a search algorithm that sequentially checks each element of a list to determine if it contains a specified value. The algorithm is named after the way smaller or larger elements are selected.";
            break;
        case "InterpolationSearch":
            name = "Interpolation Search";
            info = "Interpolation search is a search algorithm that sequentially checks each element of a list to determine if it contains a specified value. The algorithm is named after the way smaller or larger elements are selected.";
            break;
        case "BinarySearch":
            name = "Binary Search";
            info = "Binary search is a search algorithm that sequentially checks each element of a list to determine if it contains a specified value. The algorithm is named after the way smaller or larger elements are selected.";
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