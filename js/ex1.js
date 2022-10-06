class Square {
    constructor(side){
        this.side = side
        this.perimeter = side * 4
        this.area = side * side
        this.diagonal = Math.sqrt((2* (side * side)));
        this.rounded = this.diagonal.toFixed(3)
    }
    describe() {
        return `Square with a side ${this.side} has a perimeter of ${this.perimeter}, area of ${this.area}, and diagonal of ${this.rounded}`
    }
}
const square1 = new Square(2);
const square2 = new Square(4);
const square3 = new Square(6);
console.log(square1.describe())
console.log(square2.describe())
console.log(square3.describe())