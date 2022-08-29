class Stack{
    constructor(){
        this.array = [];
    }

    push(data){
        this.array.push(data);
    }

    print(){
        console.log(this.array);
    }

    top(){
        console.log(this.array[this.array.length-1]);
    }

    pop(){
        this.array.pop();
    }

    size(){
        console.log(this.array.length);
    }

    printrevese(){
        console.log(this.array.reverse());
    }
}

const myStack = new Stack();
myStack.push(5);
myStack.push(10);
myStack.push(15);


// myStack.top();
// myStack.pop();
// myStack.top();
myStack.printrevese();