const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const journeyStartLocation = this.journeys.map((locations) => {
    return locations.startLocation;
  });
  return journeyStartLocation;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const journeyEndLocation =
   this.journeys.map((locations) => {
    return locations.endLocation;
  });
  return journeyEndLocation;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
   return this.journeys.filter((journey) => {
      return journey.transport  === transport;
    });
  };

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
    return this.journeys.filter((journey) => {
      return journey.distance >= minDistance;
  });
};


Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((runningTotal , journey) => {
    return runningTotal += journey.distance;
  }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
return this.transport.filter((uniqueModesOfTransport) => {
  return transport.uniqueModesOfTransport !== transport;
});
};


module.exports = Traveller;
