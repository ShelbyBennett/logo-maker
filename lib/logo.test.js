const Logo= require("./logo")
const { Triangle }=require("./shapes")

test("It renders a 300 by 200 svg Logo", ()=>{
    const logo= new Logo()
    expect(logo.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>')
})

test("Should set both text and color", ()=>{
    const result='<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="Black">BVS</text></svg>'
    const logo= new Logo()
    logo.setText("BVS", "Black")
    expect(logo.render()).toEqual(result)
})

test("Should accept shape", ()=>{
    const result= '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="Orange" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="Black">BVS</text></svg>'
    const logo= new Logo()
    logo.setText("BVS", "Black")
    const triangle= new Triangle()
    triangle.setColor("Orange")
    logo.setShape(triangle)
    expect(logo.render()).toEqual(result)
})

test("Should throw an error if the text is more than 3 characters", ()=>{
    const logo= new Logo()
    expect(()=>logo.setText("BEVS", "Black")).toThrow("The text cannot exceed 3 characters")
})