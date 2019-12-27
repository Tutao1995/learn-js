var Plane = function(){
    this.blood = 100;
    this.attackLevel = 1;
    this.defenseLevel = 1;
}
var plane = new Plane();
plane.blood = 500;
plane.attackLevel = 2;
plane.defenseLevel = 2;
var clonePlane = Object.create(plane);
console.log(clonePlane)