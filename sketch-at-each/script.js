const gridContainer = document.querySelector(".grid-container");
const wide = document.querySelector(".wide");

//* set the initial grid size
gridContainer.setAttribute("id", "wide16");
createBoxes(16);


let mouseover = false;
let isMouseDown = false;

function createBoxes(size) {
  for (let i = 0; i < size ** 2; i++) {
    const boxes = document.createElement("div");
    boxes.setAttribute("class", "boxes");
    boxes.setAttribute("id", `${i}`);
    gridContainer.appendChild(boxes);
  }
}

function getWide(size) {
  if (size === 32) {
    gridContainer.setAttribute("id", "wide32");
  } else {
    gridContainer.setAttribute("id", "wide16");
  }
  createBoxes(size);
}

function checkEvents(e) {
  if (isMouseDown && mouseover) {
    let targetBox = e.target;
    if (targetBox.className === "boxes") {
      targetBox.style.backgroundColor = "red";
      mouseover = false;
    }
  }
}

wide.addEventListener("change", function (e) {
  gridContainer.innerHTML = "";
  switch (wide.value) {
    case "1":
      getWide(16);
      break;
    case "2":
      getWide(32);
      break;
  }
});

gridContainer.addEventListener("mouseover", function (e) {
  mouseover = true;
  checkEvents(e);
});

gridContainer.addEventListener("mousedown", function (e) {
  e.preventDefault();
  isMouseDown = true;
  checkEvents(e);
});

gridContainer.addEventListener("mouseup", function () {
  isMouseDown = false;
});

addEventListener("DOMContentLoaded", function () {
  wide.selectedIndex = 0;
});
