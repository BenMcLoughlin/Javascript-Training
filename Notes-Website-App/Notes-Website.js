notes = [{
	title: "my next trip",
	body: "I would like to go to Spain"
}, {
	title: "Habits to work on",
	body: "Exercise. Eating a bit better"
}, {
	title: "Office Modification",
	body: "get a new seat"
}]

const filters = {
	searchText: ""
}

const renderNotes = function (notes, filters) {
	const filteredNotes = notes.filter(function (note) {
		return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
	})

	document.querySelector('#notes-div').innerHTML = "";

	filteredNotes.forEach(function (note) {
		const noteEl = document.createElement("p")
		noteEl.textContent = note.title
		document.querySelector('#notes-div').appendChild(noteEl)
	})
}

renderNotes(notes, filters)

document.querySelector("#create-note").addEventListener("click", function (e) {
e.target.textContent = "the button was clicked"
})
document.querySelector("#remove-all").addEventListener('click', function () {
	document.querySelectorAll(".notes").forEach(function (note) {
		note.remove()
	})
})
document.querySelector('#search-text').addEventListener("input", function (e) {
	filters.searchText = e.target.value
	renderNotes (notes, filters)
})
