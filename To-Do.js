document.addEventListener('DOMContentLoaded', 
    function() {
      const form = document.getElementById('todo-form');
      const input = document.getElementById('todo-input');
      const todoList = document.getElementById('todo-list');
    
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskText = input.value.trim();
        if (taskText !== '') {
          addTask(taskText);
          input.value = '';
        }
      });
    
      function addTask(taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
          <span>${taskText}</span>
          <button class="edit-btn">Edit</button>
          <button class="done-btn">Done</button>
          <button class="delete-btn">Delete</button>
        `;
        todoList.appendChild(li);
    
        const deleteButton = li.querySelector('.delete-btn');
        deleteButton.addEventListener('click', function() {
          li.remove();
        });
    
        const doneButton = li.querySelector('.done-btn');
        doneButton.addEventListener('click', function() {
          li.classList.toggle('done');
        });
    
        const editButton = li.querySelector('.edit-btn');
        editButton.addEventListener('click', function() {
          const span = li.querySelector('span');
          const newText = prompt('Edit task:', span.textContent);
          if (newText !== null && newText.trim() !== '') {
            span.textContent = newText.trim();
          }
        });
      }
    });