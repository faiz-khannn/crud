document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("crud-form");
  const input = document.getElementById("inputData");
  const dataList = document.getElementById("dataList");

  let data = [];

  // Function to display data
  function displayData() {
    dataList.innerHTML = "";
    data.forEach((item, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${item}
        <button onclick="editData(${index})">Edit</button>
        <button onclick="deleteData(${index})">Delete</button>
      `;
      dataList.appendChild(li);
    });
  }

  // Function to create data
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const newData = input.value.trim();
    if (newData !== "") {
      data.push(newData);
      input.value = "";
      displayData();
    }
  });

  // Function to edit data
  window.editData = function (index) {
    const newData = prompt("Edit data:", data[index]);
    if (newData !== null) {
      data[index] = newData;
      displayData();
    }
  };

  // Function to delete data
  window.deleteData = function (index) {
    data.splice(index, 1);
    displayData();
  };

  // Initial display of data
  displayData();
});
