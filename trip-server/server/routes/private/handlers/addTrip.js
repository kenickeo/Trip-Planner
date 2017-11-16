const Trip = require('../../../models/tripPlanner')

function addTrip (req, res) {
  const { tripName, tripPathName, tripDays, tripPassword } = req.body
  const newTrip = new Trip({
    title: tripName,
    path: tripPathName,
    days: +tripDays,
    password: tripPassword
  })
  newTrip.save()
    .then(response =>
      res.status(200).json({msg: `Trip ${tripName} added properly`})
    )
    .catch(error =>
      res.statur(500).json({msg: error})
    )
}

module.exports = addTrip
