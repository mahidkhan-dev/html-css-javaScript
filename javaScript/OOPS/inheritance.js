class vehicle {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;

    }

}
let vehicle1 = new vehicle("Nisssan", "Black")
console.log(vehicle1);

// using INHERITANCE 

class Bike extends vehicle {
    constructor(brand,color,tyres){
        super(brand,color)
        this.tyres = tyres
    }
    

}
let bike1 = new Bike("Hayabusa", "Black", "panther")
console.log(bike1);