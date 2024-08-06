// Declaration Syntax:
class Rectangle {
    constructor(width, height) {
        this.height = width;
        this.width = height;
    }
}

const square = new Rectangle(10, 10);
console.log(square.height); // 10


// Expression Syntax:
const Square = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

const Square1 = new Square(15, 25);
console.log(Square1.height);


//Named Class Expression:
const circle = class Oval {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

const circle1 = new circle(29, 40);
console.log(circle1.width)


