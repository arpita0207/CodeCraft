document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todo-form');
    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    const todosContainer = document.getElementById('todos');
  
    // Function to add todo
    function addTodo(title, description) {
      const todo = { title: 'title', description: 'description' };
      let todos = JSON.parse(localStorage.getItem('todos')) || [];
      todos.push(todo);
      localStorage.setItem('todos', JSON.stringify(todos));
      displayTodos();
    }
    function displayTodos() {
      todosContainer.innerHTML = '';
      let todos = JSON.parse(localStorage.getItem('todos')) || [];
      todos.forEach(function(todo) {
        const todoElement = document.createElement('div');
        todoElement.classList.add('todo');
        todoElement.innerHTML = `
          <h3>${todo.title}</h3>
          <p>${todo.description}</p>
        `;
        todosContainer.appendChild(todoElement);
      });
    }
    todoForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const title = titleInput.value.trim();
      const description = descriptionInput.value.trim();
      if (title && description) {
        addTodo(title, description);
        titleInput.value = '';
        descriptionInput.value = '';
      } else {
        alert('Please fill in both fields');
      }
    });
    displayTodos();
  });
