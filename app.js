const input = document.getElementById("todo");
const form = document.getElementById("form");
const ul = document.getElementById("todos");
// const circle = document.querySelector("span.circle");
let change = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

function addTodo() {
  if (input.value == "") {
    return;
  } else {
    const li = document.createElement("li");
    li.classList.add("added");
    li.classList.add("uncompleted");

    const circle = document.createElement("span");
    circle.classList.toggle("circle");

    li.innerHTML = input.value;

    delBtn = document.createElement("span");
    delBtn.innerHTML = `<img src="./images/icon-cross.svg" alt="" class="cross">`;

    if (change == 1) {
      li.classList.add("changed");
      li.classList.add("color-changed");
    }

    ul.appendChild(li);
    li.appendChild(delBtn);
    li.appendChild(circle);

    delBtn.addEventListener("click", () => {
      delBtn.classList.toggle("create-img");
    });

    // COMPLETED
    // COMPLETED
    // COMPLETED
    li.addEventListener("click", () => {
      li.classList.toggle("completed");
      li.classList.toggle("uncompleted");
      circle.classList.toggle("create-img");
      circle.classList.toggle("pink");

      const clearCompleted = document.getElementById("clear-compl");
      clearCompleted.addEventListener("click", () => {
        document.querySelector(".completed").remove();
        left();
      });
    });

    // removal

    delBtn.addEventListener("click", (e) => {
      e.preventDefault();
      li.remove();
      left();
      input.value = "";
    });
  }
  input.value = "";

  left();
}

// blue active buttons
// blue active buttons
// blue active buttons
const tablica = [];

const allBtn = document.querySelector(".all-li");
const activeBtn = document.querySelector(".active-li");
const completedBtn = document.querySelector(".completed-li");

function allFun() {
  allBtn.style.color = "hsl(220, 98%, 61%)";
  activeBtn.style.color = "";
  completedBtn.style.color = "";

  const completed_li = document.querySelectorAll("li.completed");
  const uncompleted_li = document.querySelectorAll("li.uncompleted");

  uncompleted_li.forEach((li) => {
    li.style.display = "block";
  });
  completed_li.forEach((li) => {
    li.style.display = "block";
  });
  left();
}

let color = 1;

function activeFun() {
  activeBtn.style.color = "hsl(220, 98%, 61%)";
  allBtn.style.color = "";
  completedBtn.style.color = "";

  const completed_li = document.querySelectorAll("li.completed");
  const uncompleted_li = document.querySelectorAll("li.uncompleted");

  completed_li.forEach((li) => {
    li.style.display = "none";
  });

  uncompleted_li.forEach((li) => {
    li.style.display = "block";
  });
  color = 0;
  if (color == 0) {
    allBtn.classList.remove("start");
  }

  const arr = Array.from(uncompleted_li);
  itemsLeft.textContent = arr.length + " items left";
}

function completedFun() {
  completedBtn.style.color = "hsl(220, 98%, 61%)";
  allBtn.style.color = "";
  activeBtn.style.color = "";

  const completed_li = document.querySelectorAll("li.completed");
  const uncompleted_li = document.querySelectorAll("li.uncompleted");
  color = 0;

  uncompleted_li.forEach((li) => {
    li.style.display = "none";
  });

  completed_li.forEach((li) => {
    li.style.display = "block";
  });
  if (color == 0) {
    allBtn.classList.remove("start");
  }

  const arr = Array.from(completed_li);
  itemsLeft.textContent = arr.length + " items left";
}

//
//
//

const itemsLeft = document.getElementById("items-left");

function left() {
  itemsLeft.textContent = ul.childElementCount - 1 + " items left";
}

// THEME CHANGE
// THEME CHANGE
// THEME CHANGE

const sunBtn = document.querySelector("img.sun");
const moonBtn = document.querySelector("img.moon");
const wrap = document.querySelector(".wrap");

sunBtn.addEventListener("click", () => {
  change = 1;
  wrap.classList.toggle("changed");

  input.classList.toggle("changed");
  input.classList.toggle("color-changed");
  document.body.classList.toggle("changed");
  document.querySelector(".stic").classList.toggle("changed");
  document.querySelector(".options").classList.toggle("changed");

  moonBtn.classList.add("on");
  sunBtn.classList.remove("on");
  sunBtn.classList.add("off");
  document.querySelectorAll(".added").forEach((li) => {
    li.classList.add("changed");
    li.classList.add("color-changed");
  });
  document.getElementById("clear-compl").classList.toggle("changed");
});

moonBtn.addEventListener("click", () => {
  change = 0;

  wrap.classList.toggle("changed");

  input.classList.toggle("changed");
  input.classList.toggle("color-changed");
  document.body.classList.toggle("changed");
  document.querySelector(".stic").classList.toggle("changed");
  document.querySelector(".options").classList.toggle("changed");

  moonBtn.classList.remove("on");
  sunBtn.classList.add("on");
  document.querySelectorAll(".added").forEach((li) => {
    li.classList.remove("changed");
    li.classList.remove("color-changed");
  });
  document.querySelectorAll(".options p").forEach((p) => {
    p.classList.toggle("changed");
  });
  document.getElementById("clear-compl").classList.toggle("changed");
});

// const liCompleted = document.querySelector("li.completed");
