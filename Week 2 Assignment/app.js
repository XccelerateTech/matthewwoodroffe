const express = require('express');
const bodyParser = require('body-parser');
let basicAuth = require('express-basic-auth');
const NoteService = require('./services/NoteService');
const hb = require('express-handlebars');
let path = ('path');
let noteRouter = require('./NoteRouter');

let app = express();
app.use(express.static('public'));

app.engine('handlebars', hb({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let noteService = new NoteService('notes.json');

app.get('/', function (req, res) {
    noteService.listNote().then(function(readNotes){
        res.render('index',{notes: readNotes});
    });
});

app.use('/api/notes', (new noteRouter(noteService)).router())

// app.use(basicAuth ({
//     users: {'admin': 'password'},
//     challenge: true
// }))

app.listen(8080);   