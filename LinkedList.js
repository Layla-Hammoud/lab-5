class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    add(value){
        let node = new Node(value);
        if(this.head == null){
            this.head  = node;
        }
        else{
            let current = this.head;
            while(current.next){
               current = current.next
            }
            current.next = node;
        }
        this.size++
    }
    print(){
        if(this.size == 0){
            console.log("Empty linked list add values to it")
        }
        else{
            let linkedlistValues = "";
            let current = this.head;
            while(current){
                linkedlistValues += `${current.value} `
                current = current.next
            }
            console.log(linkedlistValues)
        }
    }
    search(value){
        if(this.size == 0){
            console.log("Empty linked list add values to it")
        }
        else{
            let current = this.head;
            while(current){
                if(current.value == value){
                    return current.value;
                }
                current = current.next
            }
            return null         
        }       
    }
}

let myLinkedList = new LinkedList();
myLinkedList.add(1);
myLinkedList.add(2);
myLinkedList.add(3);
myLinkedList.print();
console.log(myLinkedList.search(1));
console.log(myLinkedList.search(100))