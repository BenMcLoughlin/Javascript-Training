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

document.querySelector("#create-note").addEventListener("click", function (e) {
e.target.textContent = "the button was clicked"
})
document.querySelector("#remove-all").addEventListener('click', function () {
	document.querySelectorAll(".notes").forEach(function (note) {
		note.remove()
	})
})
document.querySelector('#search-text').addEventListener("input", function (e) {
	console.log(e.target.value);
})
