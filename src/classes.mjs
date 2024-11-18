 class Node{
    constructor(value= null){
        this.value = value;
        this.next = null;
    }
}

 export default class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    #size = 1;

    append(value){

        
        const newNode = new Node(value);

        //if list hasn't been initiated with an head
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        this.tail.next = newNode;
        this.tail = newNode;
        this.#size += 1;
    }

    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.#size += 1        
    }

    size(){
        return this.#size;
    }

    head(){
        return this.head;
    }

    tail(){
        return this.tail;
    }

    at(index){
        let currNode = this.head;
        for(let i = 0; i < index ; i++){
            if(currNode.next){
                currNode = currNode.next;
            } else{
                console.log("eror: index is too big");
            }
        }
        return currNode;
    }

    pop(){
        if(this.size === 1){
            console.log("a list needs its head!")
        }
        const penultimateNode = this.at(this.#size - 2);
        penultimateNode.next = null;
    }

    contains(value){
        let currNode = this.head;

        while(currNode){
            if(currNode.value === value){
                return true;
            }else{
                currNode = currNode.next;
            };
        }   
        return false;
    }
    
    find(value){
        let currNode = this.head;
        let index = 0 ;
        while(currNode){
            if(currNode.value === value){
                return index;
            }else{
                currNode = currNode.next;
                index += 1;
            };
        }
        return null;  
    }
    
    toString(){
        let currNode = this.head;
        let listString = "";
        while(currNode){
            const valueString = String(currNode.value);
            listString = `${listString} -> ${valueString}`
            currNode = currNode.next;
        }
        return `${listString} -> null`;
    }
}
