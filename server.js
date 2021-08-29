const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const port = 5000

let coffee_state = "Empty"
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/api/coffee', (req, res) => {
    res.json(coffee_state)
})

app.post('/api/coffee', (req, res) => {
    console.log(req.body)
    if (['Empty', 'Full', 'Brewing'].indexOf(req.body.state) >= 0) {
        coffee_state = req.body.state
        res.json("Success")
    }
    else
    {
        res.json(`Invalid body. Got "${req.body.state}" must be one of: Full, Empty, Brewing`)
    }
})


app.listen(port, () => console.log(`Server started on ${port}`))

