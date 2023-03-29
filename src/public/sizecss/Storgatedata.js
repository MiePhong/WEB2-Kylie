expanded = false;
function addthickness(thin) {
  var displayOption = document.getElementById("box");
  if (!expanded) {
    displayOption.style.display = "block";
    expanded = true;
    var inHTML = thin.innerHTML;
    var valueThin = inHTML
      .split('">')[0]
      .replace("<p>", "")
      .replace("</p>", "")
      .replace('<img src="img/thin-curst.png" alt="', "");
    var thickesscake = localStorage.getItem("sizecake");
    if (thickesscake == null || thickesscake == undefined) {
      thickesscake = [valueThin];
    } else {
      thickesscake = JSON.parse(thickesscake);
      if (thickesscake.indexOf(valueThin) == -1) {
        thickesscake.push(valueThin);
      }
    }
    localStorage.setItem("sizecake", JSON.stringify(thickesscake));
  } else {
    displayOption.style.display = "none";
    expanded = false;
    var thickesscake = localStorage.getItem("sizecake");
    thickesscake = JSON.parse(thickesscake);
    var name = "Thin Crust";
    var newthickesscake = thickesscake.filter((item) => item !== name);
    thickesscake = newthickesscake;
    localStorage.setItem("sizecake", JSON.stringify(thickesscake));
  }
}
function addthickness2(thin) {
  var add2 = document.getElementById("box2");
  if (!expanded) {
    add2.style.display = "block";
    expanded = true;
    var inHTML = thin.innerHTML;
    var valueThin = inHTML
      .split('">')[0]
      .replace('<img src="img/new-york-crust.png" alt="', "")
      .replace("<p>", "")
      .replace("</p>", "");
    var thickesscake = localStorage.getItem("sizecake");
    if (thickesscake == null || thickesscake == undefined) {
      thickesscake = [valueThin];
    } else {
      thickesscake = JSON.parse(thickesscake);
      if (thickesscake.indexOf(valueThin) == -1) {
        thickesscake.push(valueThin);
      }
    }
    localStorage.setItem("sizecake", JSON.stringify(thickesscake));
  } else {
    add2.style.display = "none";
    expanded = false;
    var thickesscake = localStorage.getItem("sizecake");
    thickesscake = JSON.parse(thickesscake);
    var name = "New York Crust";
    var newthickesscake = thickesscake.filter((item) => item !== name);
    thickesscake = newthickesscake;
    localStorage.setItem("sizecake", JSON.stringify(thickesscake));
  }
}

function addthickness3(thin) {
  var add3 = document.getElementById("box3");
  if (!expanded) {
    add3.style.display = "inline-block";
    expanded = true;
    var inHTML = thin.innerHTML;
    var valueThin = inHTML
      .split('">')[0]
      .replace('<img src="img/handtossed.png" alt="', "")
      .replace("<p>", "")
      .replace("</p>", "");
    var thickesscake = localStorage.getItem("sizecake");
    if (thickesscake == null || thickesscake == undefined) {
      thickesscake = [valueThin];
    } else {
      thickesscake = JSON.parse(thickesscake);
      if (thickesscake.indexOf(valueThin) == -1) {
        thickesscake.push(valueThin);
      }
    }
    localStorage.setItem("sizecake", JSON.stringify(thickesscake));
  } else {
    add3.style.display = "none";
    expanded = false;
    var thickesscake = localStorage.getItem("sizecake");
    thickesscake = JSON.parse(thickesscake);
    var name = "Handtossed";
    var newthickesscake = thickesscake.filter((item) => item !== name);
    thickesscake = newthickesscake;
    localStorage.setItem("sizecake", JSON.stringify(thickesscake));
  }
}

function dropdown() {
  var more = document.getElementById("menu");
  if (!expanded) {
    more.style.display = "block";
    expanded = true;
  } else {
    more.style.display = "none";
    expanded = false;
  }
}

function getValueSizeCake(t) {
  var inHTML = t.innerHTML;
  var valueSize = inHTML.split('">')[2].replace("</h2>", "").split(":")[0];
  var valuePrice = inHTML
    .split('">')[2]
    .replace("</h2>", "")
    .split(":")[1]
    .replace("$", "");
  var size = localStorage.getItem("sizecake");

  if (size == null || size == undefined) {
    size = [valueSize];
  } else {
    size = JSON.parse(size);
    if (size.indexOf(valueSize) == -1) {
      size.push(valueSize);
    }
  }
  localStorage.setItem("sizecake", JSON.stringify(size));

  var price = localStorage.getItem("price");
  if (price == null || price == undefined) {
    price = [valuePrice];
  } else {
    price = JSON.parse(price);
    if (price.indexOf(valuePrice) == -1) {
      price.push(valuePrice);
    }
  }
  localStorage.setItem("price", JSON.stringify(price));
  setTimeout(() => {
    location.href = "chosethickness.ejs";
  }, 300);
}
function getValueThickness(thin) {
  var inHTML = thin.innerHTML;
  var valueThin = inHTML.split("=")[0];
  var valuePrice = inHTML.split("=")[1].replace("$", "");
  var ValueThickness = localStorage.getItem("sizecake");
  if (ValueThickness == null || ValueThickness == undefined) {
    ValueThickness = [valueThin];
  } else {
    ValueThickness = JSON.parse(ValueThickness);
    if (ValueThickness.indexOf(valueThin) == -1) {
      ValueThickness.push(valueThin);
    }
  }
  localStorage.setItem("sizecake", JSON.stringify(ValueThickness));

  var price = localStorage.getItem("price");
  if (price == null || price == undefined) {
    price = [valuePrice];
  } else {
    price = JSON.parse(price);
    if (price.indexOf(valuePrice) == -1) {
      price.push(valuePrice);
    }
  }
  localStorage.setItem("price", JSON.stringify(price));
  setTimeout(() => {
    location.href = "chosetopining.ejs";
  }, 300);
}

function returnlistorder() {
  var order = [];
  order.push({
    imgOrder: JSON.parse(localStorage.getItem("image")),
    nameOrder: JSON.parse(localStorage.getItem("toppingcake")),
    subOrder: JSON.parse(localStorage.getItem("sizecake")),
    priceOrder: JSON.parse(localStorage.getItem("price")),
  });
  let content = `<div id="order-detail dis" >
                        <div id="img-product"></div>
                        <div>
                            <p id="topping-name"></p>
                            <p id="subname"></p> 
                            <p id="price"></p>
                        </div>
                        <button class="del-btn"></button>
                    </div>`;
  let total = `<div class="Total-detail">
                    <div class="Price">
                        <p>Subtotal: (1 item)</p><p>500</p>
                    </div>
                    <div class="Shipping">
                        <p>Shipping:</p><p>1.2</p>
                    </div>
                </div>
                <div class="line"></div>
                <div class="Total">
                    <div>
                        <p>Total:</p>
                    </div>
                    <a href ="Success.ejs"><button class="btn btn1">Order</button></a>
                </div>`;
  order.forEach((or, index) => {
    var size = Number(or.priceOrder[0]);
    var cheese = Number(or.priceOrder[1]);
    var topping = Number(or.priceOrder[2]);
    console.log(size);
    console.log(cheese);
    console.log(topping);
    var sum = 0;
    sum = size + cheese + topping * 2;
    var To = sum + 1.2;
    console.log(sum);
    index++;
    content += `<div id="order-detail"
                        <div id="img-product"><img src="img/pizza-cake.png" alt="">
                            <div id="img-product1"><img src="${or.imgOrder[0]}" alt=""></div>
                            <div id="img-product2"><img src="${or.imgOrder[1]}" alt=""></div>
                            <div id="img-product3"><img src="${or.imgOrder[2]}" alt=""></div>
                            <div id="img-product4"><img src="${or.imgOrder[3]}" alt=""></div>
                            <div id="img-product5"><img src="${or.imgOrder[4]}" alt=""></div>
                            <div id="img-product6"><img src="${or.imgOrder[5]}" alt=""></div>
                            <div id="img-product7"><img src="${or.imgOrder[6]}" alt=""></div>
                            <div id="img-product8"><img src="${or.imgOrder[7]}" alt=""></div>
                            <div id="img-product9"><img src="${or.imgOrder[8]}" alt=""></div>
                            <div id="img-product10"><img src="${or.imgOrder[9]}" alt=""></div>
                            <div id="img-product11"><img src="${or.imgOrder[10]}" alt=""></div>
                            <div class="infor">
                                <p id="topping-name">${or.nameOrder}</p>
                                <p id="subname">${or.subOrder}</p> 
                                <p id="price">$ ${sum} </p>    
                            </div>
                            <button class="del-btn" onclick = 'deleteOrder()'>x</button>
                        </div>
                    </div>`;
    total = `<div class="Total-detail">
                    <div class="Price">
                        <p>Subtotal: (1 item)</p><p>$ ${sum}</p>
                    </div>
                    <div class="Shipping">
                        <p>Shipping:</p><p>$ 1.2</p>
                    </div>
                </div>
                <div class="line"></div>
                <div class="Total">
                    <div>
                        <p>Total: $ ${To}</p>
                    </div>
                    <a href ="success.ejs"><button class="btn btn1">Order</button></a>
                </div>`;
  });
  document.getElementById("list-order").innerHTML = content;
  document.getElementById("inHTLM").innerHTML = total;
}
