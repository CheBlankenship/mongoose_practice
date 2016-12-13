// Creat an instance of Language

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
    name: {type: String, required: true},
    website: String
  }],
  paradigms: [String],
  typingDiscipline: [String],
  currentRelease: Date,
  influenceBy: [String]
});




var HTML = new Language();
HTML.name = 'HTML';
HTML.website = 'www.HTML.org';
HTML.dateFirtsAppeared = new Date('1991-02-20');
HTML.inventors.push({
  name: 'Guido van Rossum',
  website: 'gvanrossum.github.io'
});
HTML.paradigms = [
  'object-oriented',
  'imperative',
  'functional',
  'procedual',
  'reflective'
];
HTML.typingDiscipline.push('duck');
HTML.typingDiscipline.push('dynamic');
HTML.typingDiscipline.push('strong');
HTML.typingDiscipline.push('gradual');
HTML.currentRelease = new Date('2016-12-04');
HTML.influenceBy.push('C');
HTML.influenceBy.push('Java');

HTML.save()
.then(function(result) {
  console.log("Saved", result);
})
.catch(function(err) {
  console.log("Error", err.message);
});
