function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") return alert("Please enter a task!");

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = taskText;

    const actions = document.createElement("div");
    actions.className = "action-buttons";

    
    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.onclick = () => {
        span.classList.toggle("done");

       
        const gif = document.getElementById("reactionGif");
        gif.style.display = "block";
        setTimeout(() => {
            gif.style.display = "none";
        }, 3000);
    };

   
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = () => {
        const newTask = prompt("Edit your task:", span.textContent);
        if (newTask !== null && newTask.trim() !== "") {
            span.textContent = newTask.trim();
        }
    };

    
    const resetBtn = document.createElement("button");
    resetBtn.textContent = "Reset";
    resetBtn.onclick = () => {
        const newText = prompt("Reset the task to:", "");
        if (newText !== null && newText.trim() !== "") {
            span.textContent = newText.trim();
            span.classList.remove("done");
        }
    };

    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => {
        li.remove();
    };

    actions.append(doneBtn);
    actions.append(editBtn);
    actions.append(resetBtn);
    actions.append(deleteBtn);

    li.append(span);
    li.append(actions);

    document.getElementById("taskList").append(li);
    input.value = "";
}
