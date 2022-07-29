const lib = require('country-state-city')
let Country = require('country-state-city').Country;


const express = require('express')
const app = express()
const port = 3000



app.get('/country/cities', (req, res) => {
    const { country_code } = req.query
    return res.json(lib.City.getCitiesOfCountry(country_code))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})