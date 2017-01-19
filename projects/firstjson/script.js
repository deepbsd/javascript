var springColors = [ "AF7575", "EFD8A1", "BCD693", "AFD7DB", "3D9CA8" ];
var temperatures = [ 47.5, 63.2, 56.7, 53, 51.2 ];

function Pet(type, name, weight, likes){
  this.type = type;
  this.name = name;
  this.weight = weight;
  this.likes = likes;
}


window.onload = init;
function init() {
var pickles = new Pet("cat", "Pickles", 7, ["sleeping","purring","eating butter"]);
var picklesJSON = JSON.stringify(pickles);
var pickles2 = JSON.parse(picklesJSON);
console.log(pickles2);


var tilla = new Pet("dog","Tilla",25,["sleeping","eating","walking"]);
console.log(tilla);

var petsArray = [ pickles, tilla];
var petsArrayJSON = JSON.stringify(petsArray);
var petsarr1 = JSON.parse(petsArrayJSON);
console.log(petsarr1[1].name);

}
