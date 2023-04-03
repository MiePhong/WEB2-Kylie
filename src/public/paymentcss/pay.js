expanded = false;
function cash() {
  if (!expanded) {
    var check = document.getElementById("dot");
    check.style.display = "block";
    expanded = true;
  } else {
    var check = document.getElementById("dot");
    check.style.display = "none";
    expanded = false;
  }
}
function pay() {
  if (!expanded) {
    var model = document.getElementById("display-model");
    model.style.display = "block";
    expanded = true;
  } else {
    var check = document.getElementById("dot1");
    check.style.display = "none";
    expanded = false;
  }
}
function mas() {
  if (!expanded) {
    var model = document.getElementById("display-model1");
    model.style.display = "block";
    expanded = true;
  } else {
    var check = document.getElementById("dot2");
    check.style.display = "none";
    expanded = false;
  }
}
function visa() {
  if (!expanded) {
    var model = document.getElementById("display-model2");
    model.style.display = "block";
    expanded = true;
  } else {
    var check = document.getElementById("dot3");
    check.style.display = "none";
    expanded = false;
  }
}

function displayBtnDelete() {
  if (expanded) {
    var model = document.getElementById("display-model");
    model.style.display = "none";
    expanded = false;
  }
}
function displaydot1() {
  if (expanded) {
    var model = document.getElementById("display-model");
    model.style.display = "none";
    expanded = false;
    var check = document.getElementById("dot1");
    check.style.display = "block";
    expanded = true;
  }
}
function displayBtnDelete1() {
  if (expanded) {
    var model = document.getElementById("display-model1");
    model.style.display = "none";
    expanded = false;
  }
}
function displaydot2() {
  if (expanded) {
    var model = document.getElementById("display-model1");
    model.style.display = "none";
    expanded = false;
    var check = document.getElementById("dot2");
    check.style.display = "block";
    expanded = true;
  }
}
function displayBtnDelete2() {
  if (expanded) {
    var model = document.getElementById("display-model2");
    model.style.display = "none";
    expanded = false;
  }
}
function displaydot3() {
  if (expanded) {
    var model = document.getElementById("display-model2");
    model.style.display = "none";
    expanded = false;
    var check = document.getElementById("dot3");
    check.style.display = "block";
    expanded = true;
  }
}
