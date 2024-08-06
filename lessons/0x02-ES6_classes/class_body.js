// Example: Method Definitions
// Public Instance Method:

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    // public instance method
    calculateArea () {
        const area = this.width * this.height;
        return area;
    }
}


const Rectangle1 = new Rectangle(10, 30);
console.log(Rectangle1.height)
console.log(Rectangle1.calculateArea())


// Public Instance Getter and Setter:

class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    // public instance getter 
    get radius () {
        return this._radius;
    }

    // public instance setter 
    set radius(value) {
        this._radius = value;
    }
}

const circle = new Circle(10);
console.log(circle.radius) // 10
circle.radius = 20;

console.log(circle.radius) // 20


