const express = require('express')
const router = express.Router()

const {
    getTasks
} = require('../Controller/task');


// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

router.get('/tasks', getTasks);

module.exports = router;