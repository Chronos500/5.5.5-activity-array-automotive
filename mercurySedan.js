//this includes the vehicle class as a module
const VehicleModule = require("./vehicle.js")


//this shows how to call from this module...


    class Car extends VehicleModule.Vehicle{
        constructor(make, model, year, color, mileage) {
            super(make, model, year, color, mileage);
            this.maxPassengers = 5;
            this.passenger = 0;
            this.numberOfWheels = 4;
            this.maxSpeed = 160;
            this.fuel = 10;
            this.scheduleService = false;
        }

    
        loadPassenger(num) {
            if (this.passenger < this.maxPassengers) {
                if ((num + this.passenger) <= this.maxPassengers) {
                    this.passenger = num;
                    return this.passenger;               
                } else {
                    console.log(this.model + " " + this.make + " not have enough space to take all passengers.");
                }
            } else {
                console.log(this.model + " " + this.make + " is full");
            }
        }
    

    start() {
        if (this.fuel > 0) {            
            console.log("engine has started.");
            return this.started = true
        } else {
            console.log("no fuel");
            return this.started = false;
        }
    }
    checkService() {
        if (this.mileage > 30000) {            
            this.scheduleService = true
            return this.scheduleService;                       
        }

    }}
    let v = new Car("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)