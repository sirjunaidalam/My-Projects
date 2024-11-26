var toDoInput = document.getElementById("toDoInput");
var orderToDoList = document.getElementById("orderList");

function addToDoItem() {
  var toDoInputValue = toDoInput.value;
  if (!toDoInputValue) return;
  toDoInput.value = "";

  var listItems = document.createElement("li");
  listItems.className = "toDoItems";
  listItems.innerHTML = toDoInputValue;

  var deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.className = "deleteButton";
  deleteButton.onclick = function () {
    deleteTask(listItems);
  };
  listItems.appendChild(deleteButton);
  orderList.appendChild(listItems);
}

function deleteTask(listItems) {
  orderToDoList.removeChild(listItems);
}
