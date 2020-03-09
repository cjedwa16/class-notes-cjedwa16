// Router for pie requests
const express = require('express');

// Create the router
const router = express.Router()

// cs-linuxlab-40.stlawu.edu:3000/pies/
router.get('/', function(request, response)  {
  response.send(`
    <h1>Pies</h1>
    <ul>
      <li><a href="/pies/vanilla">Apple</a></li>
      <li><a href="/pies/chocolate">Cherry</a></li>
    </ul>
    `);
});

// cs-linuxlab-40.stlawu.edu:3000/pies/id
router.get('/:id', function(request, response, next)  {
  if (request.params.id === 'vanilla')  {  // if you visit the vanilla link then
    response.send('Apple pies');
  } else if(request.params.id === 'chocolate')  {
    response.send('Cherry pies');
  }  else  {
    next();  // Pass on this request
  }
});

module.exports = router;
