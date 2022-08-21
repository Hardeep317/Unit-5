// push 
// pop
// shift
// unShift
// isEmpty 
// first element
// last element
// forEach
// map
// reduce



class myarray {
    constructor () {
        this.arr = [];
        this.length = 0;
    }

    pushs(ele){
        this.arr[this.length] = ele
        this.length = this.length + 1
    }

    pops(){
        this.length = this.length - 1
    }

    shifts(ele){
        this.arr[0] = ele
        this.length--
    }

    unShifts(ele){
        this.arr.push(0)
        this.length++
        for(var i = this.length - 1; i >= 1; i--){
            this.arr[i] = this.arr[i-1]
        }
        this.arr[0] = ele
    }

    isEmptys(){
        return this.length == 0
    }

    firstEle(){
        return this.arr[0]
    }

    lastEle(){
        return this.arr[this.length-1]
    }

    forEachs(callback){
        for(var i = 0; i < this.length; i++){
            callback(this.arr[i],i,this.arr)
        }
    }

    maps(callback){
        var maped = []
        for(var i = 0; i < this.length; i++ ){
            var r = callback(this.arr[i],i,this.arr)
            maped.push(r)
        }
        return maped;
    }
    
    filters(callback){
        var filtered = []
        for(var i = 0; i < this.length; i++){
            var r = callback(this.arr[i],i,this.arr)
            if(r == true){
                filtered.push(this.arr[i])
            }
        }
        return filtered
    }

    reduces(callback,ac){
        if(ac){
            ac = ac
        } else if(typeof (this.arr[0]) == "string"){
            ac = ""
        } else{
            ac = 0
        }
        for(var i = 0; i < this.length; i++){
            ac = callback(ac,this.arr[i],i,this.arr)
        }
        return ac
    }

    includes(ele){
        for(var i = 0; i < this.length; i++){
            if(this.arr[i] == ele){
                return true
            }
        }
        return false
    }

    everys(callback){
        for(var i = 0; i < this.length; i++){
            if(this.arr[i] == true){
                var a = callback(this.arr[i],i)
                return a
            }
        }
        return false;
    }


    somes(callback){
        for(var i = 0; i < this.length; i++){
            var a = callback(this.arr[i],i)
            if(a == true){
                return true
            }
        }
        return false;
    }


    concats(e1,e2){

    }

    sorts(){
        for(var i = 0; i < this.length; i++){
            var min = i
            for(var j = i+1; j < this.length; j++){
                if(this.arr[min] < this.arr[j]){
                    min = j
                }
            }
            var temp = this.arr[min]
            this.arr[min] = this.arr[j]
            this.arr[j] = temp
        }
    }

    
}

var arr1 = new myarray()    // Number
var arr2 = new myarray()    // String

arr1.pushs(12)
arr1.pushs(3)
arr1.pushs(1)
arr1.pushs(4)
// console.log(arr1)
// arr1.pops()
// console.log(arr1)

arr2.pushs("mon")
arr2.pushs("tue")
arr2.pushs("wed")
arr2.pushs("thr")
// console.log(arr2)


// arr1.shifts()
// console.log(arr1)


// arr1.unShifts("sun")
// console.log(arr1)


// arr1.pops()
// console.log(arr1)


// console.log(arr1.isEmptys())


// console.log(arr1.firstEle())


// console.log(arr1.lastEle())


// arr1.forEachs(function(ele,i){
//     console.log(i,ele)
// })


// var mapp = arr2.maps(function(ele,i,arr){
//     return i + " - " + ele + "day"
// })
// console.log(mapp)


// var filteredd = arr2.filters(function(ele){
//     return ele[0] == "t"
// })
// console.log(filteredd)


// var red = arr1.reduces(function(prev,ele){
//     return prev + ele
//   })
//   console.log(red)


// var b = arr2.includes("tue")
// console.log(b)



// console.log(arr1.everys(function(ele,i){
//     return ele < 1
// }))


// console.log(arr1.somes(function(ele){
//     return ele > 2
// }))



