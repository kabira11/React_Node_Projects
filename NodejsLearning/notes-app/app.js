
const notes = require('./notes')
const color = require('chalk')
const yargs = require('yargs')

// const command = process.argv[2];

// if(command === 'add'){
//     console.log('Adding Notes..')
// }else if (command === 'remove'){
//     console.log('Removing Notes..')
// }

// console.log(color.blue.inverse("Success"))
// yargs.version('1.1.0')
// Create add command
//---- demandOption: true means user have to give title with command --> node app.js add --title="shopping list" 
//command for adding body node app.js add --title="shopping list" --body="Buying tshirt"
yargs.command({
    command:'add',
    describe: 'Add a new note',
    builder: {
        title : {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNotes(argv.title , argv.body);
        // console.log('Title: ',argv.title)
        // console.log('Body: ',argv.body)
    }
})


// Create read command
yargs.command({
    command:'read',
    describe: 'Read a note',
    builder: {
        title : {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.readNote(argv.title)
    }
})

// Create List command
yargs.command({
    command:'list',
    describe: 'List your notes',
    handler: function(){
        notes.listNotes()
    }
})


// Create delete command
yargs.command({
    command:'remove',
    describe: 'Removing note',
    builder: {
        title : {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title);
    }
})

//argv stands for argument vector
// console.log(process.argv)
// console.log(yargs.argv)

yargs.parse();

