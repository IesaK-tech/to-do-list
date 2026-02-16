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

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addTask();
    }
})

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




    editImg.addEventListener("click", function () {

        if (editImg.alt === "Edit") {
            // this switches to edit mode when I press the edit button
            editImg.alt = "Save";
            editImg.src = "https://icon-library.com/images/2018/1740647_tick-mark-check-icon-transparent-png.png";

            // Adds an input field so that i can text and edit
            const editInput = document.createElement("input");
            editInput.type = "text";
            editInput.value = taskSpan.innerText;
            editInput.classList.add("inline-edit-input"); //can style this in css

            editInput.addEventListener("keydown", function (event) {
                if (event.key === "Enter") {
                    event.preventDefault();
                    editImg.click(); //this code is letting me press enter and it will save instead of me having to press the save button.
                }
            })

            li.replaceChild(editInput, taskSpan);
            editInput.focus();
        } else {
            const editInput = li.querySelector(".inline-edit-input");
            const updatedText = editInput.value.trim();

            if (updatedText !== "") {
                taskSpan.innerText = updatedText;
                li.replaceChild(taskSpan, editInput);

                editImg.alt = "Edit";
                editImg.src = "https://cdn-icons-png.flaticon.com/512/1827/1827933.png"; //switch back to the edit icon
            } else {
                notification.innerText = "Task cannot be empty!";
            }
        }
    })}