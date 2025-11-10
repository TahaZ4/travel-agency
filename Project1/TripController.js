

const createTrip (req,es) => {

    const {
        destinationName,
        location,
        continent,
        language,
        description,
        flightCost,
        accomationCost,
        mealCost,
        visaCost,
        transportationCost,
        currencyCode
    }=req.body;
};
const newTrip={
    id:trips.length+1,
    destinationName,
        location,
        continent,
        language,
        description,
        flightCost,
        accomationCost,
        mealCost,
        visaCost,
        transportationCost,
        currencyCode,
        dailycost:flightCost+accomationCost+mealCost+visaCost+transportationCost
};
NEW//Set cookie 
res.cookie('Tripcreated', destinationName, {
    maxAge: 15 * 60 * 1000, // 15 min
    httpOnly: true
}};
trips.push(newTrip);

const db_access = require('../db.js');
const db = db_access.db;

//Create new trip
const createTrip =(req, res) => {
    const {
 destinationName,
 location,
 continent,
 currencyCode,

    } = req.body;

    if (!destinationName || !location || !continent || !language)
        return res.status(400).json({message: 'Please provide all required'}

        const query =('INSERT INTO TRIP (DESTINATIONNAME, LOCATION, CONTINENT CURRENCYCODE')

