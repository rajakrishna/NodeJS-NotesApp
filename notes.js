const {
    parse
} = require("yargs")
const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return "Your notes..."
}

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(notes)
    } else {
        console.log("note title taken")
    }


}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
// {"title":"Name","body":"ANdrew"}
const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title != title)
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found'))
    }

    console.log(notes)

}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    } catch (e) {
        return []
    }
}

const listNotes = () => {
    console.log(chalk.white.inverse('Your Notes'))
    const notes = loadNotes()
    // const noteTitle = notes.filter((note) => console.log(note.title))
    notes.forEach(note => {
        console.log(note.title)
    });

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}