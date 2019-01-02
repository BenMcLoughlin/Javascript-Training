//completed 4

const todos = [{
	text: "order Cat food",
	completed: false
}, {
	text: "Clean Kitchen",
	completed: false
},{
	text: "Buy food",
	completed: false
},{
	text: "Do work",
	completed: false
},{
	text: "Exercise",
	completed: true
},]

const filters = {
	searchText: ""
}

const renderTodos = function (todos, filters) {
	const filteredTodos = todos.filter(function (todo) {
		todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
	})
}

const incompleteTodos = todos.filter(function (todo) {
	return !todo.completed
})
const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector("body").appendChild(summary)

todos.forEach(function (todo) {
	const p = document.createElement('p')
	p.textContent = todo.text
	document.querySelector("body").appendChild(p)
})
document.querySelector('#add-todo').addEventListener("click", function (e) {
e.textContent = "New todo"})

document.querySelector('#Add-todo').addEventListener("input", function (e) {
	console.log(e.target.value);
})
