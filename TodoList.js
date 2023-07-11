// Get HTML elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Add task to the list
function addTask() {
  const taskText = taskInput.value;

  if (taskText.trim() === '') {
    alert('Please enter a task!');
    return;
  }

  const taskItem = document.createElement('li');
  taskItem.className = 'taskItem';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';

  taskItem.appendChild(checkbox);
  taskItem.appendChild(taskSpan);
  taskItem.appendChild(editButton);
  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);

  taskInput.value = '';
}

// Remove task from the list
function removeTask(event) {
  const taskItem = event.target.parentElement;
  taskList.removeChild(taskItem);
}

// Edit task
function editTask(event) {
  const taskItem = event.target.parentElement;
  const taskSpan = taskItem.querySelector('span');
  const currentTaskText = taskSpan.textContent;
  const newTaskText = prompt('Edit the task:', currentTaskText);

  if (newTaskText !== null) {
    if (newTaskText.trim() === '') {
      alert('Please enter a task!');
      return;
    }

    taskSpan.textContent = newTaskText;
  }
}

// Event listeners
addTaskButton.addEventListener('click', addTask);
taskList.addEventListener('click', function(event) {
  if (event.target.textContent === 'Delete') {
    removeTask(event);
  } else if (event.target.textContent === 'Edit') {
    editTask(event);
  }
});
