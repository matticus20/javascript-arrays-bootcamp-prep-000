var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var countries = ["France", "Canada", "Japan"];
var otherCountry = "Brazil"
function addElementToBeginningOfArray(countries, otherCountry) {
  var moreCountries = [otherCountry, ...countries]
  return moreCountries
}

function destructivelyAddElementToBeginningOfArray(countries, otherCountry) {
  countries.unshift(otherCountry)
  return countries
}

var cities = ["London", "Paris", "Tokyo"]
var otherCity = "Boston"
function addElementToEndOfArray(cities, otherCity) {
  var moreCities = [...cities, otherCity]
  return moreCities
}

function destructivelyAddElementToEndOfArray(cities, otherCity) {
  cities.push(otherCity)
  return cities
}

function accessElementInArray(array, index) {
  return array(index)
}

var days = ["Monday", "Tuesday", "Wednesday"]
function destructivelyRemoveElementFromBeginningOfArray(days) {
  days.shift()
  return days
}

function removeElementFromBeginningofArray(days) {
  var newDays = days.slice(1)
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