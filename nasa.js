const request = require('request');

const BASE_URL = "https://api.nasa.gov/neo/rest/v1/"
const API_KEY = "gPckZ0GM4F6m2WoA6rrcnlVwHtMCqZDw7yTpLxfr";

getMeteoritos = (handler) => {
    const dates = getRangeDate(7)
    request(`${BASE_URL}/feed?start_date=${dates.start_date}&end_date=${dates.end_date}&api_key=${API_KEY}`, (error, response, body) => {
        handler(JSON.parse(body))
    });

    request(url, callback)
}

getRangeDate = (days) => {
    const now = new Date()
    const last = new Date(now.getTime() - (days * 24 * 60 * 60 * 1000));

    return {
        start_date: getFormatDate(last),
        end_date: getFormatDate(now)
    }
}

getFormatDate = (date) => {
    const day = ("0" + date.getDate()).slice(-2)
    const month = ("0" + (date.getMonth() + 1)).slice(-2)
    const today = `${date.getFullYear()}-${month}-${day}`
    return today
}

getDangerousMeteoritos = () => {
    getMeteoritos((response) => {
        let nearObjects = response.near_earth_objects
        let days = Object.keys(nearObjects);
        let potential_dangerous = days.map((day) => {
            return nearObjects[day].filter((asteroid) => asteroid.is_potentially_hazardous_asteroid)
        });

        var merged = [].concat.apply([], potential_dangerous);

        var namesAsteroids = merged.map((ast) => ast.name)
        console.log(namesAsteroids)
    })
}

module.exports = {
    getMeteoritos,
    getDangerousMeteoritos
}