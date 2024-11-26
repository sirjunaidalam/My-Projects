var arr = [];
var editIndex = null;

var renderList = () => {
  document.getElementById("orderList").innerHTML = "";
  arr.forEach((value, index) => {
    document.getElementById("orderList").innerHTML += `
      <tr>
      <td class = "td-value">${value}</td>
        <td class="td-button"><button class="deleteButton" onclick="deleteTask(${index})">Delete</button></td>
        <td class="td-button"><button class="editButton" onclick="editTask(${index})">Edit</button></td>
      </tr>`;
  });
};

var addToDoItem = () => {
  var toDoInput = document.getElementById("toDoInput").value;
  if (!toDoInput) return;
  arr.unshift(toDoInput);
  document.getElementById("toDoInput").value = "";
  renderList();
};

var deleteTask = (index) => {
  arr.splice(index, 1);
  renderList();
};

var editTask = (index) => {
  document.getElementById("toDoInput").value = arr[index];
  document.getElementById("addButton").style.display = "none";
  document.getElementById("updateButton").style.display = "inline";
  editIndex = index;
  console.log(index);
};

var UpdateToDoItem = () => {
  var toDoInput = document.getElementById("toDoInput").value;
  if (!toDoInput) return;
  arr[editIndex] = toDoInput;
  document.getElementById("toDoInput").value = "";
  document.getElementById("addButton").style.display = "inline";
  document.getElementById("updateButton").style.display = "none";
  renderList();
  console.log(arr);
};

toDoInput.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    document.getElementById("addButton").click();
  }
});