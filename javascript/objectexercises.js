
// exercise 1
const languages = {subject: 'CS', number: 364};
const web = {subject: 'CS', number: 332};
const sports = {subject: 'SI', number: 200};
const courses = []
courses.push(languages);
courses.push(web);
courses.push(sports);

let max = 0;
for (let i = 0; i< courses.length; i++)  {
  if (courses[i].number > max)  {
    max = courses[i].number;
  }
}
console.log(max);

//----------------------------------------------
// exercise 2
const Book= function(title, authors)  {
  this.title = title;
  this.authors = authors;
}


// Shared method
Book.prototype.check_author = function(author)  {
  for(const a of this.authors){
    if (author == a)  {
      return true;
    }
  }
};

const book1 = new Book('Book1', ['Cameron', 'Edwards']);

console.log(book1.check_author('Cameron'));

//------------------------------------------------
// Exericse 3

const range1 = function(a, b)  {
  if (b=== undefined)  {
    b === a;
    a === 0;
  }
  const arr = [];
  for (let i=a; i<b; i++)  {
    arr.push(i);
  }
  return arr;
}
