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


Language.update(
  {name: 'Python'},
  {
    $set: {
      website: 'https://www.ruby-lang.org/en/'
    }
  }
)
.then(function(suc) {
  console.log("Got it!", suc);
})
.catch(function(err) {
  console.log("Something is wrong..", err.message);
});
