const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')

app.use(express.urlencoded())

app.engine('mustache',mustacheExpress())
app.set('views','./views')
app.set('view engine','mustache')

let trips = []

app.get('/triplist',(req,res) => {
    res.render('triplist', {trips:trips})
})

app.get('/submittrip', (req, res) => {
    res.render('submittrip')
})

app.post('/addtrip',(req,res) => {
    let title = req.body.title
    let imageURL = req.body.imageURL
    let leaveDate = req.body.leaveDate
    let returnDate = req.body.returnDate

    let trip = ({title: title, imageURL: imageURL, leaveDate: leaveDate, returnDate: returnDate})
    trips.push(trip)

    res.redirect('/triplist')
})

app.listen(3000,() => {
    console.log('Server has started...')
})

app.post('/deletetrip',(req,res) => {
    let tripName = req.body.tripName
    trips = trips.filter(trip => {
        return trip.title != tripName
    })
    res.redirect('/triplist')
})