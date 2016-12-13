// 2, Construct a Mongoose model for an album that looks like this:

// {
//   name: 'Lush Life',
//   artist: 'John Coltrane',
//   released: new Date('1961-01-01'),
//   tracks: [
//     {
//       name: 'Like Someone in Love',
//       songWriters: ['Jimmy Van Heusen'],
//       duration: 300
//     },
//     {
//       name: 'I Love You',
//       songWriters: ['Cole Porter'],
//       duration: 333
//     },
//     {
//       name: 'Trane\'s Slo Blues,
//       songWriters: ['John Coltrane'],
//       duration: 365
//     },
//     {
//       name: 'Lush Life',
//       songWriters: ['Billy Strayhorn'],
//       duration: 840
//     },
//     {
//       name: 'I Hear a Rhapsody',
//       songWriters: ['Jack Baker', 'George Fragos', 'Dick Gasparre'],
//       duration: 361
//     }
//   ],
//   personnel: [
//     {
//       name: 'John Coltrane',
//       instrument: 'Tenor saxophone'
//     },
//     {
//       name: 'Art Taylor',
//       instrument: 'Drums'
//     },
//     {
//       name: 'Paul Chambers',
//       instrument: 'Bass'
//     },
//     {
//       name: 'Donald Byrd',
//       instrument: 'Trumpet'
//     }
//   ]
// }

var mongoose = require("mongoose");
mongoose.connect = ("mongodb://localhost/album_db_13");

// Data base Schema
const Album = mongoose.model("Album", {
  name: String,
  artist: String,
  released: Date,
  trackes: [{
    name: String,
    songWriters: [String],
    duaration: Number
  }],
  personnel: [{
    name: String,
    instrument: String
  }]
});
