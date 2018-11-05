var Song = require('../Song');

var song;

beforeEach(function() {
    song = new Song('Paranoid Android', 'OK, Computer', 'Radiohead');
});

describe('The object in action',function(){
    it("Should return the description of the song", function() {
        expect (song.getDescription()).toEqual(`The name of this song is Paranoid Android and it is from the album OK, Computer. It is written by Radiohead`);

    });
    it("Should return the name of the song", function() {
        expect(song.name).toEqual('Paranoid Android');

    });
    it("Should return the album of the song", function() {
        expect(song.album).toEqual('OK, Computer');
    
    });
    it("Should return the author of the song", function() {
        expect(song.author).toEqual('Radiohead');
    
    });

});