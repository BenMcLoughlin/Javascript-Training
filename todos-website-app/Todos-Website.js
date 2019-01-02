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
		return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
	})

	const incompleteTodos = filteredTodos.filter(function (todo) {
		return !todo.completed
	})

	document.querySelector('#Todos-div').innerHTML = "";

	const summary = document.createElement('h2')
	summary.textContent = `You have ${incompleteTodos.length} todos left`
	document.querySelector("#Todos-div").appendChild(summary)

	filteredTodos.forEach(function (todo) {
		const p = document.createElement('p')
		p.textContent = todo.text
		document.querySelector("#Todos-div").appendChild(p)
	})
}

renderTodos(todos, filters)

document.querySelector('#add-todo').addEventListener("click", function (e) {
e.textContent = "New todo"})

document.querySelector('#Add-todo').addEventListener("input", function (e) {
	console.log(e.target.value);
})
document.querySelector('#search-Text').addEventListener("input", function (e) {
	filters.searchText = e.target.value
	renderTodos(todos, filters)
})
document.querySelector('#new-todo').addEventListener("submit", function (e) {
	e.preventDefault()
	todos.push ({
		text: e.target.elements.addTodo.value,
		completed: false
	})
	renderTodos(todos, filters)
	e.target.elements.addTodo.value = ""
})
