// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor(length, height, width) {
        this.length = length;
        this.width = width; 
        this.height = height; 
        }
        volume() {
            return this.length * this.width * this.height;
        }
        surfaceArea() {
            return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
        } 
    
}

const cuboid = new CuboidMaker(4,5,5);


// function GameObject(attributes){ // function GameObject(name, dimensions) {
//     this.createdAt = new Date(); //I'm assuming some sort of time method goes here
//     this.name = attributes.name; 
//     this.dimensions = attributes.dimensions;
//     this.destroy = function() {
//       return `${this.name} was removed from the game.` // string template
//     };
//   }



// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.