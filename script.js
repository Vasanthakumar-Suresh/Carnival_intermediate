let tasks = [];
let idCounter = 1;

function addTask() {
    const title = document.getElementById("title").value;
    const priority = document.getElementById("priority").value;

    if (!title) {
        alert("Title cannot be empty");
        return;
    }

    const task = {
        id: idCounter++,
        title: title,
        priority: priority,
        status: "ACTIVE"
    };

    tasks.push(task);
    renderTasks(tasks);
    document.getElementById("title").value = "";
}

function renderTasks(taskArray) {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    taskArray.forEach(task => {
        const li = document.createElement("li");

        li.innerHTML = `
            <span class="${task.status === "COMPLETED" ? "completed" : ""}">
                ${task.title} - ${task.priority}
            </span>
            <button onclick="toggleStatus(${task.id})">Toggle</button>
            <button onclick="deleteTask(${task.id})">Delete</button>
        `;

        list.appendChild(li);
    });
}

function toggleStatus(id) {
    const task = tasks.find(t => t.id === id);
    task.status = task.status === "ACTIVE" ? "COMPLETED" : "ACTIVE";
    renderTasks(tasks);
}

function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    renderTasks(tasks);
}

/* ❌ INCOMPLETE: Participants must fix filtering */
function applyFilters() {
    const priority = document.getElementById("filterPriority").value;
    const status = document.getElementById("filterStatus").value;

    // WRONG: Currently returns all tasks
    renderTasks(tasks);
}

/* ❌ INCOMPLETE: Participants must implement sorting */
function sortByPriority() {
    // TODO: Implement sorting HIGH > MEDIUM > LOW
    renderTasks(tasks);
}
