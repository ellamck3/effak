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
  
    if(req.body.state == 'Brewing')
    {
      coffee_state = 'Brewing'
      setTimeout(() => {
          coffee_state = 'Full'
      },5000)
      res.json(`Success`)
    }
    else if (req.body.state == 'Full')
    {
      coffee_state = 'Full'
      res.json(`Success`)
    }
    else if (req.body.state == 'Empty')
    {
      coffee_state = 'Empty'
      res.json(`Success`)
    }
    else
    {
      res.json(`Invalid body. Got "${req.body}" must be one of: Full, Empty, Brewing`)
    }
  })


app.listen(port, () => console.log(`Server started on ${port}`))

