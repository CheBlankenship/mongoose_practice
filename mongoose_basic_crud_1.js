//1, Construct a Mongoose model for a programming language that contains a name, website, date it first appeared, programming paradigms, typing discipline, inventors, the date of the current release, and the names of other languages it was influenced by.
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/languages_db_13");
var bluebird = require("bluebird");
mongoose.Promise = bluebird;

// Data base Schema
var Language = mongoose.model('Language', {
  name: String,
  website: String,
  dateFirstAppeared: Date,
  inventors: [{
    name: String,
    website: String
  }],
  paradigms: [String],
  typingDiscipline: [String],
  currentRelease: Date,
  influenceBy: [String]
});



// Creat an instance of Language
// var python = new Language();
// python.name = 'Python';
// python.website = 'www.python.org';
// python.dateFirtsAppeared = new Date('1991-02-20');
// python.inventors.push({
//   name: 'Guido van Rossum',
//   website: 'gvanrossum.github.io'
// });
// python.paradigms = [
//   'object-oriented',
//   'imperative',
//   'functional',
//   'procedual',
//   'reflective'
// ];
// python.typingDiscipline.push('duck');
// python.typingDiscipline.push('dynamic');
// python.typingDiscipline.push('strong');
// python.typingDiscipline.push('gradual');
// python.currentRelease = new Date('2016-12-04');
// python.influenceBy.push('C');
// python.influenceBy.push('Java');
//
// python.save()
// .then(function(result) {
//   console.log("Saved", result);
// })
// .catch(function(err) {
//   console.log("Error", err.message);
// });


Language.find({name: 'Python'})
.then(function(docs) {
  console.log("Results", docs);
})
.catch(function(err) {
  console.log("Somthing is wrong here..." , err.message);
});
