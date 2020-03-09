// Router for pie requests
const express = require('express');

// Create the router
const router = express.Router()

// Pretend database collection
const pies = [
  {id: 'apple', flavor: 'Apple'},
  {id: 'cherry', flavor: 'Cherry'}
];

// cs-linuxlab-40.stlawu.edu:3000/pies/
router.get('/', function(request, response)  {
  response.render('pies/index', {pies: pies});
});

// cs-linuxlab-40.stlawu.edu:3000/pies/id
router.get('/:id', function(request, response, next)  {

    // Pretend database lookup
    const pies = pies.find(pie => pies.id === request.params.id);

    if (!pie) {
      next(); // Pass on this request
    } else {
      response.render('pies/detail', {pie: pie});
    }
});

module.exports = router;
