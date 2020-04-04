/* Holds all of the express routes allowing us to send 
data to our client side app. 
*/

var express = require('express')
var router = express.Router()

router.get('/api/hello', (req, res) => { 
    res.json("hello world")
})

module.exports = router