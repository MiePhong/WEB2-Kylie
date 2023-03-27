var carculator = function (e, check) {
  let parent = e.parentElement;
  let number = Number(parent.querySelector(".counter").innerText);
  let price = Number(
    parent.parentElement.parentElement.querySelector(".cost").innerText
  );
  if (check == 1) {
    if (number > 1) {
      number -= 1;
      price *= number;
    }
    if (number == 1) {
      parent.querySelector(".decrease").style.opacity = "0.2";
    }
  } else {
    number += 1;
    price *= number;
    if (number != 0) {
      parent.querySelector(".decrease").style.opacity = "1";
    }
  }
  parent.querySelector(".counter").innerText = number.toString();
  parent.parentElement.querySelector(".price").innerText = price.toString();
};
