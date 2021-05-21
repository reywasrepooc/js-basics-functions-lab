// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    const hq = 42
    if (location >= hq) {
        return (location - hq)
    }
    else if (location < hq) {
        return (hq - location)
    }
}
function distanceFromHqInFeet(location) {
   const distFeet = (distanceFromHqInBlocks(location) * 264)
   return (distFeet)
}
function distanceTravelledInFeet(start, stop) {
   const feetTravelled = (Math.abs(stop - start) * 264)
   return (feetTravelled)
}

function calculatesFarePrice(start, stop) {
    const feetTravelled = (Math.abs(stop - start) * 264)
    if (feetTravelled < 400) {
        return 0
    } else if (feetTravelled >= 400 && feetTravelled <= 2000) {
        return ((feetTravelled - 400) * .02)
    } else if (feetTravelled > 2000 && feetTravelled <= 2500) {
        return 25
    } else if ( feetTravelled > 2500) {
        return 'cannot travel that far'
    }
}