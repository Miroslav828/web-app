const Passenger = require ('./passenger')


function Flight (relation, date){
    if (!relation || !date){
        throw new Error ('invlid input');
    }
    this.relation = relation;
    this.date = new Date (date);
    this.listOfPassengers = [];
    this.addPassenger = function (passenger){
        if(!passenger || !(passenger instanceof Passenger)){
            throw new Error ('invalid input')
        }
        this.listOfPassengers.push (passenger);
    }
    this.getData = function (){
        let year = this.date.getFullYear();
        let month = this.date.getMonth() + 1;
        let day = this.date.getDate();
        let result = `
          ${day}.${month}.${year},${this.relation}`;
        this.listOfPassengers.forEach(function(passenger){
            result += `
                    ${passenger.getData()}`  
        }); 
        return result;
    }
}

module.exports = Flight;