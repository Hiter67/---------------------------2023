const taskInput = document.querySelector("#task-input");
const addTaskBtn = document.querySelector("#add-task-btn");
const taskList = document.querySelector("#task-list");
const filterAll = document.querySelector("#filter-all");
const filterActive = document.querySelector("#filter-active");
const filterCompleted = document.querySelector("#filter-completed");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const renderTasks = (taskArray) => {
  taskList.innerHTML = "";
  taskArray.forEach((task, index) => {
    const li = document.createElement("li");
    li.classList.add("task");
    li.innerHTML = `<input type="checkbox" class="task-checkbox" ${task.completed ? "checked" : ""}>
                  <p>${task.text}</p>
                  <button class="delete-task-btn">Удалить</button>`;
    taskList.appendChild(li);
    const taskCheckbox = li.querySelector(".task-checkbox");
    taskCheckbox.addEventListener("change", () => {
      task.completed = !task.completed;
      li.classList.toggle("completed", task.completed);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    });

    const deleteTaskBtn = li.querySelector(".delete-task-btn");
    deleteTaskBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderTasks(tasks);
    });
  });
};

const addTask = () => {
  const taskText = taskInput.value;
  if (taskText === "") return;
  tasks.push({ text: taskText, completed: false });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  taskInput.value = "";
  renderTasks(tasks);
};

const showAll = () => {
  renderTasks(tasks);
};

const showActive = () => {
  const activeTasks = tasks.filter((task) => !task.completed);
  renderTasks(activeTasks);
};

const showCompleted = () => {
  const completedTasks = tasks.filter((task) => task.completed);
  renderTasks(completedTasks);
};

addTaskBtn.addEventListener("click", addTask);
filterAll.addEventListener("click", showAll);
filterActive.addEventListener("click", showActive);
filterCompleted.addEventListener("click", showCompleted);

showAll();