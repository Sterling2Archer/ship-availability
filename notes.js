function Ship(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function() {
        return this.rooms - this.booked;
    }
};

var norShip = new Ship('Norwegian Epic', 1912, 850);
var royalShip = new Ship('Royal Caribe', 2000, 1200);

var details1 = norShip.name + ' rooms: ';
    details1 += norShip.checkAvailability();
var elShip1 = document.getElementById('ship1');
elShip1.textContent = details1;

var details2 = royalShip.name + ' rooms: ';
    details2 += royalShip.checkAvailability();
var elShip2 = document.getElementById('ship2');
elShip2.textContent = details2;