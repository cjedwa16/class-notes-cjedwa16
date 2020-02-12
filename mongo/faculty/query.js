// Query the faculty Database

const mongoose = require('mongoose');
const connect = require('./db');  // connect the db file
const Professor = require('./schema');

connect(); // To the database

/*// What documents are in the collection?
const query = Professor.find();
query.exec(function(error, professors)  {
  if (error) console.error(error.stack);
  console.log(professors);

});*/

const queries = [

// What are names in alphabetical order?
Professor.find().sort('name'),

// Who started most recently? // sort started in reverse order (most recent)
Professor.find().sort('-started').limit(1),

// Who started in 2003?
Professor.find().where('started').equals(2003),

// Who teaches 362?
Professor.find().where('courses').in(362),

// What are all the ranks?
Professor.distinct('rank')
];

// Professor.find().sort('name')
queries[0].exec(function(error, professors)  {
  if (error) console.error(error.stack);

  const names = professors.map(p => p.name)
  console.log('Names in order: ', names);
});
