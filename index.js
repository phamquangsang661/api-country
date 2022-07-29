const lib = require('country-state-city')
let state = require('country-state-city').State;


const express = require('express')
const app = express()
const port = 3000



app.get('/country/cities', (req, res) => {
    const { country_code } = req.query
    return res.json(lib.City.getCitiesOfCountry(country_code))
})

app.get('/country/state', (req, res) => {
    const { country_code } = req.query
    return res.json(state.getStatesOfCountry(country_code))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})