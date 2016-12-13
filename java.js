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

// Creat an Java collection
var java = new Language();
java.name = "Java";
java.website = "https://www.java.com/";
java.dateFirtsAppeared = new Date("1995-05-23");
java.inventors.push({
  name: "James Gosling",
  website: "https://www.linkedin.com/in/jamesgosling"
});
java.paradigms = [
  "object-oriented",
  "structured",
  "imperative",
  "generic",
  "reflective",
  "concurrent"
];
java.typingDiscipline.push("static");
java.typingDiscipline.push("strong");
java.typingDiscipline.push("safe");
java.typingDiscipline.push("nominative");
java.typingDiscipline.push("manifest");
java.currentRelease = new Date("2016-10-18");
java.influenceBy.push("C/C++");

java.save()
.then(function(suc) {
  console.log("Got it! ", suc);
})
.catch(function(err) {
  console.log("Somthing is wrong.. ", err.message);
});
