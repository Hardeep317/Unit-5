class queue{
    constructor(){
        this.array = [];
    }

    enqueue(data){
        this.array.push(data);
    }

    dequeue(){
        this.array.shift();
    }

    enqueueThree(data1, data2, data3){
        this.array.push(data1 , data2, data3 );
    }

    dequeueThree(){
        this.array.shift();
        this.array.shift();
        this.array.shift();
    }

    length(){
        console.log(this.array.length);
    }
}

const myqueue = new queue();
myqueue.enqueue(5)
myqueue.enqueue(15)
myqueue.enqueue(25)
myqueue.enqueue(35)
myqueue.enqueueThree(45, 55, 75)

// myqueue.dequeueThree()
console.log(myqueue)
myqueue.length()