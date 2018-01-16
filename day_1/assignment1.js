function Musician(name) {
		this.name  = name;
}
 
 Musician.prototype.play = function(piece){
 		console.log(this.name + " is now playing " +piece)
 }
 
let Violinist = new Musician("Harold");
let Pianist = new Musician("Kumar");
 
Violinist.play("Violin");
Pianist.play("Piano");
