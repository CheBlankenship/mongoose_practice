
// Creat an instance of Language
var python = new Language();
python.name = 'Python';
python.website = 'www.python.org';
python.dateFirtsAppeared = new Date('1991-02-20');
python.inventors.push({
  name: 'Guido van Rossum',
  website: 'gvanrossum.github.io'
});
python.paradigms = [
  'object-oriented',
  'imperative',
  'functional',
  'procedual',
  'reflective'
];
python.typingDiscipline.push('duck');
python.typingDiscipline.push('dynamic');
python.typingDiscipline.push('strong');
python.typingDiscipline.push('gradual');
python.currentRelease = new Date('2016-12-04');
python.influenceBy.push('C');
python.influenceBy.push('Java');

python.save()
.then(function(result) {
  console.log("Saved", result);
})
.catch(function() {
  console.log("Error");
});
