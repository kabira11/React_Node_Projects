const fs = require('fs');
const color = require('chalk')

const getNotes = function(message) {
    return (message)
}

const addNotes =  (title , body) => {
    const notes = loadNotes()

    //filter method works as when conditions is true then element added in new array and return new array.
    // const duplicateNotes = notes.filter( (note) => {
    //     return note.title === title
    // })

    debugger
    const duplicateNote = notes.find( (note) => {
        return note.title === title
    })

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(color.green.inverse("New Notes Added"))
    } else {
        console.log(color.red.inverse("Note title taken"))
    }

}

const saveNotes =  (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const removeNote =  (title) => {
    const notes = loadNotes()
    const noteToKeep = notes.filter((note) => {
        return note.title !== title
    })

    if(notes.length > noteToKeep.length){
        console.log(color.green.inverse("Note Removed Succesfully"))
        saveNotes(noteToKeep)
    } else {
        console.log(color.red.inverse("Note Not Found"))
    }

}

const listNotes = () => {
const notes = loadNotes()

    console.log(color.inverse("Your notes"))

    notes.forEach(note => {
        console.log(note.title)
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if(note){
        console.log(color.inverse(note.title))
        console.log((note.body))

    } else {
        console.log(color.red.inverse("Note Not Found"))

    }
}

const loadNotes =  () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return []
    }

}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}