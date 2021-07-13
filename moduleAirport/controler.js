const Person = require('./person');
const Seat = require ('./seat');
const Passenger = require ('./passenger');
const Flight = require('./flight');



function createFlight(relation, date) {
    return new Flight(relation, date)
    }
    
function createPassenger(firstName, lastName, seatNumber, category) {
    let person = new Person(firstName, lastName);
    let seat = new Seat(seatNumber, category);
    return new Passenger(person, seat);
    }

module.exports = {createFlight, createPassenger};    