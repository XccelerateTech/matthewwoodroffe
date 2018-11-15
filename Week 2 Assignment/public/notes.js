// const NoteService = require('./services/NoteService');
// let noteService = new NoteService('notes.json');

$(()=>{
    $('input[value="Add"]').submit(function(e) {
        e.preventDefault();
        alert('alerted')
        userInputVal = $('input[name="note"]').val();
        console.log(userInputVal);

        // $.get( "/", function( data ) {
        //     noteService.addNote(userInputVal).append();
        //     alert( "Load was performed." );
   
        //   });


             var notesTemplate = Handlebars.compile(`
{{#each notes}}
<div class="note">
    <span class="input"><textarea data-id="{{ @index }}">{{ this }}</textarea></span>
    <button class="remove btn btn-xs" data-id="{{ @index }}"><i class="fa fa-trash" aria-hidden="true"></i></button>
</div>
{{/each}}
`);

function reloadNotes(notes) {
    $('#notes').html(notesTemplate({notes: notes}));
} 
})
})
