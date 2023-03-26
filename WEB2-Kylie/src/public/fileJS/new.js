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

var btnFirstSort = document.querySelector(
  ".wrapper_sortBtn button:first-child span"
);

var sortList = document.querySelector(".sort_list");
var sortListItem = document.querySelectorAll(".sort_list_item");
var textSort = document.querySelector("#text_sort");

btnFirstSort.onclick = function () {
  sortList.style.display = "block";
  document.querySelector(
    ".wrapper_sortBtn button:first-child"
  ).style.borderBottomRightRadius = "0px";
  document.querySelector(
    ".wrapper_sortBtn button:first-child"
  ).style.borderBottomLeftRadius = "0px";
};

// btnFirstSort.onblur = function () {
//   sortList.style.display = "none";
//   btnFirstSort.style.borderBottomRightRadius = "4px";
//   btnFirstSort.style.borderBottomLeftRadius = "4px";
//   console.log(1);
// };

for (let i = 0; i < sortListItem.length; i++) {
  sortListItem[i].onclick = function () {
    sortList.style.display = "none";
    document.querySelector(
      ".wrapper_sortBtn button:first-child"
    ).style.borderBottomRightRadius = "4px";
    document.querySelector(
      ".wrapper_sortBtn button:first-child"
    ).style.borderBottomLeftRadius = "4px";
    textSort.innerText = sortListItem[i].innerText;
  };
}
