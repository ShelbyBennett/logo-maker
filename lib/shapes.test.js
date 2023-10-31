const { Circle, Triangle, Square }=require("./shapes")

test("Rendering the Triangle", ()=>{
    const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
})

test("Rendering the Circle", ()=>{
    const shape = new Circle();
shape.setColor("blue");
expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue"/>');
})

test("Rendering the Square", ()=>{
    const shape = new Square();
shape.setColor("blue");
expect(shape.render()).toEqual(' <rect x="90" y="40"  width="130" height="130"  fill="blue"/>');
})