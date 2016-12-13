var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/languages_db_13");
var bluebird = require("bluebird");
mongoose.Promise = bluebird;

// Data base Schema
var Language = mongoose.model('Language', {
  name: {type: String, required: true},
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
var javascript = new Language();
javascript.name = 'JavaScript';
javascript.website = 'www.javascript.org';
javascript.dateFirtsAppeared = new Date('1991-02-20');
javascript.inventors.push({
  name: 'Guido van Rossum',
  website: 'gvanrossum.github.io'
});
javascript.paradigms = [
  'object-oriented',
  'imperative',
  'functional',
  'procedual',
  'reflective'
];
javascript.typingDiscipline.push('duck');
javascript.typingDiscipline.push('dynamic');
javascript.typingDiscipline.push('strong');
javascript.typingDiscipline.push('gradual');
javascript.currentRelease = new Date('2016-12-04');
javascript.influenceBy.push('C');
javascript.influenceBy.push('Java');

javascript.save()
.then(function(result) {
  console.log("Saved", result);
})
.catch(function(err) {
  console.log("Error", err.message);
});
