var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var countries = ["France", "Canada", "Japan"];
var otherCountry = "Brazil"
function addElementToBeginningOfArray(countries, otherCountry) {
  
  var moreCountries = [otherCountry, ...countries]
  return moreCountries
}

function destructivelyAddElementToBeginningOfArray(countries, otherCountry) {
  var countries = ["France", "Canada", "Japan"];
  var otherCountry = "Brazil"
}

var cities = ["London", "Paris", "Tokyo"]
var otherCity = ["Boston"]
function addElementToEndOfArray(cities, otherCity) {
  var moreCities = [cities, ...otherCity]
  return moreCities
}


function destructivelyAddElementToEndOfArray() {
  
}

function accessElementInArray(vehicles, index) {
  vehicles = ["car", "truck", "bus", "motorcycle"]
  index = "2"
  return vehicles[parseInt(index)]
}

