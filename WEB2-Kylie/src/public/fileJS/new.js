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
var wrapperContentSort = document.querySelector(".wrapper_content_sort");

btnFirstSort.onclick = function () {
  sortList.style.display = "block";
  wrapperContentSort.style.borderBottomRightRadius = "0px";
  wrapperContentSort.style.borderBottomLeftRadius = "0px";
  wrapperContentSort.style.borderBottom = "0px";
};
function closeSortList() {
  sortList.removeAttribute("style");
  wrapperContentSort.removeAttribute("style");
}

btnFirstSort.parentElement.onblur = function () {
  closeSortList();
};

for (let i = 0; i < sortListItem.length; i++) {
  sortListItem[i].onclick = function () {
    closeSortList();
    textSort.innerText = sortListItem[i].innerText;
  };
}
