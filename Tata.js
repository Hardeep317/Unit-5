function parts( n , c , col , top_s){
    this.name = n
    this.category = c
    this.color = col
    this.topSpeed = top_s
}

var bike = new parts("Ninja" , "2 Wheeler" , "Navy-blue" , "180kmph")
var car = new parts("Nexon" , "4 Wheeler" , "white" , "220kmph")

console.log(bike)