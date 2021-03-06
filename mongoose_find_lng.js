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


Language.find({name: 'Python'})
.then(function(docs) {
  console.log("Results", docs);
})
.catch(function(err) {
  console.log("Somthing is wrong here..." , err.message);
});
