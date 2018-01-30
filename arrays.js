var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var countries = ["France", "Canada", "Japan"];
var otherCountry = "Brazil"
function addElementToBeginningOfArray(countries, otherCountry) {
  var moreCountries = [otherCountry, ...countries]
  return moreCountries
}

function destructivelyAddElementToBeginningOfArray(countries, otherCountry) {
  return countries.unshift(otherCountry)
}

var cities = ["London", "Paris", "Tokyo"]
var otherCity = ["Boston"]
function addElementToEndOfArray(cities, otherCity) {
  var moreCities = [cities, ...otherCity]
  return moreCities
}

function destructivelyAddElementToEndOfArray(cities, otherCity) {
  return cities.push(otherCity)
}

function accessElementInArray(vehicles, index) {
  vehicles = ["car", "truck", "bus", "motorcycle"]
  index = "2"
  return vehicles[parseInt(index)]
}

var days = ["Monday", "Tuesday", "Wednesday"]
function destructivelyRemoveElementFromBeginningOfArray(days) {
  return days.shift(0)
}

function removeElementFromBeginningofArray(days) {
  var newDays = days.slice(0)
  return newDays
}

var iceCreams = ["chocolate", "vanilla", "raspberry"]
function destructivelyRemoveElementFromEndOfArray(iceCreams) {
  return iceCreams.pop(2)
}

function removeElementFromEndOfArray() {
  var newIceCreams = iceCreams.slice(0, iceCreams.length - 1)
  return newIceCreams
}