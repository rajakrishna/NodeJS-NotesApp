const notes = require("./notes.js");
const chalk = require("chalk");
const yargs = require("yargs");
const {
	argv
} = require("yargs");

// Customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
	command: "add",
	describe: "Add a new note",
	builder: {
		title: {
			describe: "Note title",
			demandOption: true,
			type: "string",
		},
		body: {
			describe: "Note body",
			demandOption: true,
			type: "string",
		},
	},
	handler(argv) {
		notes.addNote(argv.title, argv.body);
	},
});

// Create remove command
yargs.command({
	command: "remove",
	describe: "removing note",
	builder: {
		title: {
			describe: "Note title",
			demandOption: true,
			type: "string",
		},
	},
	handler() {
		notes.removeNote(argv.title);
	},
});

// Create list command
yargs.command({
	command: "list",
	describe: "Listing the notes",
	handler() {
		notes.listNotes();
	},
});

// Creating read command
yargs.command({
	command: "read",
	describe: "reading the notes",
	handler() {
		console.log("Reading");
	},
});

yargs.parse();