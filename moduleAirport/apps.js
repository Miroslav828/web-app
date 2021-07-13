const Airport = require ('./airport');
const {createFlight, createPassenger} = require( './controler');



function createFlightsOnAirport(){

    let nikolaTesla = new Airport();
    let belgradeParis = createFlight("Belgrade - Paris", "Oct 25 2017");
    let barcelonaBelgrade = createFlight("Barcelona - Belgrade", "Nov 11 2017")
    let passenger1 = createPassenger("Petar", "Petrovic", 1, "e")
    let passenger2 = createPassenger("Nikola", "Nikolic" )
    let passenger3 = createPassenger("Jovan", "Jovanovic", 55, "b")
    let passenger4 = createPassenger("Ivan", "Ivanovic", 11)



    belgradeParis.addPassenger(passenger1);
    belgradeParis.addPassenger(passenger2);
    barcelonaBelgrade.addPassenger(passenger3);
    barcelonaBelgrade.addPassenger(passenger4);

    nikolaTesla.addFlight(belgradeParis);
    nikolaTesla.addFlight(barcelonaBelgrade);

    console.log(nikolaTesla.getData());

}

(function() {
    try {
      createFlightsOnAirport();
    } catch (e) {
      console.log(`Error: ${e.message}`);
    }
  })();
