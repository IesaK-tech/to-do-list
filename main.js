console.log("Javascript is working")

// This is for the input field
const input = document.getElementById("todo-input");
// This adds the "add" button that the user can click
const addButton = document.getElementById("AddUpdateClick");
//This will allow the user to have a list of their tasks
const list = document.getElementById("list-items");
// notification area
const notification = document.getElementById("notification");

addButton.addEventListener("click", addTask);

function addTask() {
    const taskText = input.value;

    console.log("taskText: ", taskText);

    if (taskText === "") {
        notification.innerText = "Add a task!";
        return;
    }

    notification.innerText = "";

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("task-checkbox");

    const taskSpan = document.createElement("span");
    taskSpan.innerText = taskText;
    taskSpan.style.flex ="1"

    const editImg = document.createElement("img");
    editImg.src = "https://cdn-icons-png.flaticon.com/512/1827/1827933.png";
    editImg.alt = "Edit";
    editImg.classList.add("todo-controls");

    const deleteImg = document.createElement("img");
    deleteImg.src = "https://cdn-icons-png.flaticon.com/512/1214/1214428.png";
    deleteImg.alt = "Delete";
    deleteImg.classList.add("todo-controls");

    li.appendChild(checkbox);
    li.appendChild(taskSpan);
    li.appendChild(editImg);
    li.appendChild(deleteImg);

    list.appendChild(li);
    input.value = "";




    deleteImg.addEventListener("click", function () {
        list.removeChild(li);
    });


    editImg.addEventListener("click", function () {
        if (editImg.alt === "Edit") {
            input.value = taskSpan.innerText;
            input.focus();
            editImg.alt = "Save";
        } else {
            taskSpan.innerText = input.value;
            input.value = "";
            editImg.alt = "Edit";
        }

        checkbox.addEventListener("change", function () {
            if (this.checked) {
                taskSpan.style.textDecoration = "line-through";
                taskSpan.style.color = "#888";
            } else {
                taskSpan.style.textDecoration = "none";
                taskSpan.style.color = "black";
            }
        })
    });

}