const input = document.querySelector("#input");
const submitBtn = document.querySelector("#add_item");
const itemContainer = document.querySelector("#to_do_list");

function addToDoList() {
  if (input.value === "") {
    alert("Please insert data");
    return;
  }
  const newDiv = document.createElement("div");
  newDiv.classList.add("item");

  const dateToDoList = new Date();
  console.log(dateToDoList);
  const month = dateToDoList.getMonth();
  const year = dateToDoList.getFullYear();
  const date = dateToDoList.getDate();
  const hour = dateToDoList.getHours();
  const minutes = dateToDoList.getMinutes();

  newDiv.innerHTML = `${input.value} - ${hour < 10 ? "0" + hour : hour} : ${
    minutes < 10 ? "0" + minutes : minutes
  } ${date}/${month + 1}/${year}`;
  itemContainer.appendChild(newDiv);
  const iDiv = document.createElement("div");
  const squareI = document.createElement("i");
  const trashI = document.createElement("i");
  newDiv.appendChild(iDiv);
  squareI.setAttribute("class", "fas fa-check-square square");
  squareI.setAttribute("style", "color:lightgray");
  trashI.setAttribute("class", "fas fa-trash trash");
  trashI.setAttribute("style", "color:darkgray");
  iDiv.appendChild(squareI);
  iDiv.appendChild(trashI);

  const trashs = document.querySelectorAll(".trash");
  trashs.forEach(function (trs) {
    trs.addEventListener("click", function () {
      this.parentNode.parentNode.remove();
    });
  });

  const squares = document.querySelectorAll(".square");
  squares.forEach(function (sqr) {
    sqr.addEventListener("click", function (e) {
      if (this.style.color === "lightgray") {
        this.style.color = "limegreen";
        this.parentNode.parentNode.style.color = "limegreen";
      } else {
        this.style.color = "lightgray";
        this.parentNode.parentNode.style.color = "black";
      }
    });
  });
  input.value = "";
}

submitBtn.addEventListener("click", addToDoList);
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addToDoList();
  }
});
