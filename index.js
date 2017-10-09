function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, name){
  return drivers.filter(driver => driver.toLowerCase().slice(0,2) == name.toLowerCase())
}

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name)
}
