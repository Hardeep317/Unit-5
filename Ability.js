function Obj (n , t, c) {
    this.name = n
    this.talent = t
    this.city = c
}

var Amar = new Obj("Amar" , "chef" , "Goa");
var Akbar = new Obj("Akbar" , "Magician" , "Mumbai");
var Anthony = new Obj("Anthony" , "singer" , "Kashmir");

console.log(Amar);
console.log(Akbar);
console.log(Anthony);