const NoteService = require('../NoteService');
const fs = require('fs');

describe('Testing NoteService', function() {

    beforeEach(function() {
        if(fs.existsSync('test.json')) {
        fs.unlinkSync('test.json');
        }
        fs.writeFileSync('test.json', '[]');
    })

    it('list our notes using listNotes()', function(done) {
        const noteService = new NoteService('test.json');
        noteService.listNote().then((result) => {
            expect(result).toEqual([]);
            done();
        }).catch((err) => {
            console.log(err);
        })
    })

    it('add a note using addNote()', function(done) {
        const noteService = new NoteService('test.json');
        noteService.addNote('test').then(() => {
            return noteService.listNote();
        }).then((result) => {
            expect(result).toEqual(['test']);
            done();
        }).catch((err) => {
            done.fail(err);
        });
    })

    it('Should be able to add more than one note using addnote()', function(done) {
        const noteService = new NoteService('test.json');
        noteService.addNote('test2').then(() => {
            return noteService.addNote('tes2').then(() => {
            return noteService.listNote();
        }).then((result) => {
            expect(result).toEqual(['test2', 'tes2']);
            done();
        }).catch((err) => {
            done.fail(err);
        });
        })        
        //create a new noteService instance
        //add one note
        //then, add another note
        //then list the notes, here we expect two notes.
    })

    it('add note before listing notes, while having the previous notes', function(done) {
        const noteService = new NoteService('test.json');
        noteService.addNote('test').then(() => {
            const noteService2 = new NoteService('test.json')
            return noteService2.addNote('test2').then(() => {
                return noteService2.listNote();
            }).then((result) => {
                expect(result).toEqual(['test', 'test2'])
                done();
            }).catch((err) => {
                done.fail(err);
            }).catch((err) => {
                done.fail(err)
            })
        })
    })

})