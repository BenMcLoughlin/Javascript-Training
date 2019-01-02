// Retrieve Saved Todos from Storage
const getSavedTodos = function () {
	const todosJSON = localStorage.getItem('todos')
	if (todosJSON !== null) {
		return JSON.parse(todosJSON)
	} else {
		[]
	}
}

//Save Todos
const saveTodos = function (todo) {
	localStorage.setItem("todos", JSON.stringify(todos))
}

// Render todos
const renderTodos = function (todos, filters) {
	let filteredTodos = todos.filter(function (todo) {
		const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
		const hideCompletedMatch = !filters.hideCompleted || !todo.completed
		return searchTextMatch && hideCompletedMatch
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
