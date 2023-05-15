var tasks = [];

function addTask() {
  var input = document.getElementById("taskInput");
  if (input.value === "") {
    alert("Please enter a task.");
    return;
  }
  tasks.push({
    id: tasks.length + 1,
    name: input.value,
    completed: false
  });
  displayTasks();
  input.value = "";
}

function displayTasks() {
  var ul = document.getElementById("taskList");
  ul.innerHTML = "";
  for (var i = 0; i < tasks.length; i++) {
    var li = document.createElement("li");
    li.setAttribute("data-id", tasks[i].id);
    li.innerHTML = tasks[i].name;
    if (tasks[i].completed) {
      li.classList.add("completed");
    }
    li.addEventListener("click", toggleTask);
    var button = document.createElement("button");
    button.innerHTML = "Delete";
    button.addEventListener("click", deleteTask);
    li.appendChild(button);
    ul.appendChild(li);
  }
}

function toggleTask(event) {
  var li = event.target;
  var taskId = li.getAttribute("data-id");
  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].id == taskId) {
      tasks[i].completed = !tasks[i].completed;
      break;
    }
  }
  displayTasks();
}

function deleteTask(event) {
  var li = event.target.parentNode;
  var taskId = li.getAttribute("data-id");
  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].id == taskId) {
      tasks.splice(i, 1);
      break;
    }
  }
  displayTasks();
}

function showAll() {
  var lis = document.getElementsByTagName("li");
  for (var i = 0; i < lis.length; i++) {
    lis[i].style.display = "block";
  }
}

function showActive() {
  var lis = document.getElementsByTagName("li");
  for (var i = 0; i < lis.length; i++) {
    var taskId = lis[i].getAttribute("data-id");
    var task = tasks.find(function(task) {
      return task.id == taskId;
    });
    if (task.completed) {
      lis[i].style.display = "none";
    } else {
      lis[i].style.display = "block";
    }
  }
}

function showCompleted() {
  var lis = document.getElementsByTagName("li");
  for (var i = 0; i < lis.length; i++) {
    var taskId = lis[i].getAttribute("data-id");
    var task = tasks.find(function(task) {
      return task.id == taskId;
    });
    if (task.completed) {
      lis[i].style.display = "block";
    } else {
      lis[i].style.display = "none";
    }
  }
}

displayTasks();