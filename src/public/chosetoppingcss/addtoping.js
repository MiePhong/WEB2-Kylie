var Pineapple = document.getElementById("check_1");
var Eggplant = document.getElementById("check_2");
var BellPepper = document.getElementById("check_3");
var Mushroom = document.getElementById("check_4");
var Onion = document.getElementById("check_5");
var Olive = document.getElementById("check_6");
var Ham = document.getElementById("check_7");
var Pepperoni = document.getElementById("check_8");
var Bacon = document.getElementById("check_9");
var Sausage = document.getElementById("check_10");
var Anchovy = document.getElementById("check_11");
function getValuePrice(valuePrice) {
  var price = localStorage.getItem("price");
  if (price == null || price == undefined) {
    price = [valuePrice];
  } else {
    price = JSON.parse(price);
    if (price.indexOf(valuePrice) == -1) {
      price.push(valuePrice + 1);
    }
  }
  localStorage.setItem("price", JSON.stringify(price));
}

function addPineapple() {
  if (Pineapple.checked == true) {
    let holder = document.getElementById("topping-add1");
    holder.innerHTML = '<img src ="img/Pineapple-pizza.png">';
    holder.style.display = "block";

    var inHTML = document.getElementById("text1").innerHTML;
    var valueTopping = inHTML
      .split('">')[0]
      .replace("<p>", "")
      .replace("</p><p>", "")
      .replace("</p>", "")
      .replace('<label for="check_1" class="additem', "")
      .replace("$2", "");
    var topping = localStorage.getItem("toppingcake");
    if (topping == null || topping == undefined) {
      topping = [valueTopping];
    } else {
      topping = JSON.parse(topping);
      if (topping.indexOf(valueTopping) == -1) {
        topping.push(valueTopping);
      }
    }
    localStorage.setItem("toppingcake", JSON.stringify(topping));

    var img = "img/Pineapple-topping.png";
    var Img = localStorage.getItem("image");
    if (Img == null || Img == undefined) {
      Img = [img];
    } else {
      Img = JSON.parse(Img);
      if (Img.indexOf(img) == -1) {
        Img.push(img);
      }
    }
    localStorage.setItem("image", JSON.stringify(Img));
  } else {
    let holder = document.getElementById("topping-add1");
    holder.innerHTML = '<img src ="img/Pineapple-pizza.png">';
    holder.style.display = "none";

    var topping = localStorage.getItem("toppingcake");
    topping = JSON.parse(topping);
    var name = "Pineapple";
    var newtopping = topping.filter((item) => item !== name);
    topping = newtopping;
    localStorage.setItem("toppingcake", JSON.stringify(topping));

    var Img = localStorage.getItem("image");
    Img = JSON.parse(Img);
    valueImg = "img/Pineapple-topping.png";
    var newimg = Img.filter((item) => item !== valueImg);
    Img = newimg;
    localStorage.setItem("image", JSON.stringify(Img));
  }
}
function addEggplant() {
  if (Eggplant.checked == true) {
    let holder = document.getElementById("topping-add2");
    holder.innerHTML = '<img src ="img/Eggplant-pizza.png">';
    holder.style.display = "block";

    var inHTML = document.getElementById("text2").innerHTML;
    var valueTopping = inHTML
      .split('">')[0]
      .replace("$2", "")
      .replace("<p>", "")
      .replace("</p><p>", "")
      .replace("</p>", "")
      .replace('<label for="check_2" class="additem', "");
    console.log(valueTopping);
    var topping = localStorage.getItem("toppingcake");
    if (topping == null || topping == undefined) {
      topping = [topping];
    } else {
      topping = JSON.parse(topping);
      if (topping.indexOf(valueTopping) == -1) {
        topping.push(valueTopping);
      }
    }
    localStorage.setItem("toppingcake", JSON.stringify(topping));

    var img = "img/Eggplant-topping.png";
    var Img = localStorage.getItem("image");
    if (Img == null || Img == undefined) {
      Img = [img];
    } else {
      Img = JSON.parse(Img);
      if (Img.indexOf(img) == -1) {
        Img.push(img);
      }
    }
    localStorage.setItem("image", JSON.stringify(Img));
  } else {
    let holder = document.getElementById("topping-add2");
    holder.innerHTML = '<img src ="img/Eggplant-pizza.png">';
    holder.style.display = "none";

    var topping = localStorage.getItem("toppingcake");
    topping = JSON.parse(topping);
    var name = "Eggplant";
    var newtopping = topping.filter((item) => item !== name);
    topping = newtopping;
    localStorage.setItem("toppingcake", JSON.stringify(topping));

    var Img = localStorage.getItem("image");
    Img = JSON.parse(Img);
    valueImg = "img/Eggplant-topping.png";
    var newimg = Img.filter((item) => item !== valueImg);
    Img = newimg;
    localStorage.setItem("image", JSON.stringify(Img));
  }
}
function addBellPepper() {
  if (BellPepper.checked == true) {
    let holder = document.getElementById("topping-add3");
    holder.innerHTML = '<img src ="img/Bell-Pepper-pizza.png">';
    holder.style.display = "block";

    var inHTML = document.getElementById("text3").innerHTML;
    var valueTopping = inHTML
      .split('">')[0]
      .replace("$2", "")
      .replace("<p>", "")
      .replace("</p><p>", "")
      .replace("</p>", "")
      .replace('<label for="check_3" class="additem', "");
    var topping = localStorage.getItem("toppingcake");
    if (topping == null || topping == undefined) {
      topping = [valueTopping];
    } else {
      topping = JSON.parse(topping);
      if (topping.indexOf(valueTopping) == -1) {
        topping.push(valueTopping);
      }
    }
    localStorage.setItem("toppingcake", JSON.stringify(topping));

    var img = "img/Bell-Pepper-topping.png";
    var Img = localStorage.getItem("image");
    if (Img == null || Img == undefined) {
      Img = [img];
    } else {
      Img = JSON.parse(Img);
      if (Img.indexOf(img) == -1) {
        Img.push(img);
      }
    }
    localStorage.setItem("image", JSON.stringify(Img));
  } else {
    let holder = document.getElementById("topping-add3");
    holder.innerHTML = '<img src ="img/Bell-Pepper-pizza.png">';
    holder.style.display = "none";
    var topping = localStorage.getItem("toppingcake");
    topping = JSON.parse(topping);
    var name = "Bell Pepper";
    var newtopping = topping.filter((item) => item !== name);
    topping = newtopping;
    localStorage.setItem("toppingcake", JSON.stringify(topping));

    var Img = localStorage.getItem("image");
    Img = JSON.parse(Img);
    valueImg = "img/Bell-Pepper-topping.png";
    var newimg = Img.filter((item) => item !== valueImg);
    Img = newimg;
    localStorage.setItem("image", JSON.stringify(Img));
  }
}
function addMushroom() {
  if (Mushroom.checked == true) {
    let holder = document.getElementById("topping-add4");
    holder.innerHTML = '<img src ="img/Mushroom-pizza.png">';
    holder.style.display = "block";

    var inHTML = document.getElementById("text4").innerHTML;
    var valueTopping = inHTML
      .split('">')[0]
      .replace("$2", "")
      .replace("<p>", "")
      .replace("</p><p>", "")
      .replace("</p>", "")
      .replace('<label for="check_4" class="additem', "");
    console.log(valueTopping);
    var topping = localStorage.getItem("toppingcake");
    if (topping == null || topping == undefined) {
      topping = [valueTopping];
    } else {
      topping = JSON.parse(topping);
      if (topping.indexOf(valueTopping) == -1) {
        topping.push(valueTopping);
      }
    }
    localStorage.setItem("toppingcake", JSON.stringify(topping));

    var img = "img/Mushroom-topping1.png";
    var Img = localStorage.getItem("image");
    if (Img == null || Img == undefined) {
      Img = [img];
    } else {
      Img = JSON.parse(Img);
      if (Img.indexOf(img) == -1) {
        Img.push(img);
      }
    }
    localStorage.setItem("image", JSON.stringify(Img));
  } else {
    let holder = document.getElementById("topping-add4");
    holder.innerHTML = '<img src ="img/Mushroom-pizza.png">';
    holder.style.display = "none";

    var topping = localStorage.getItem("toppingcake");
    topping = JSON.parse(topping);
    var name = "Mushroom";
    var newtopping = topping.filter((item) => item !== name);
    topping = newtopping;
    localStorage.setItem("toppingcake", JSON.stringify(topping));

    var Img = localStorage.getItem("image");
    Img = JSON.parse(Img);
    valueImg = "img/Mushroom-topping1.png";
    var newimg = Img.filter((item) => item !== valueImg);
    Img = newimg;
    localStorage.setItem("image", JSON.stringify(Img));
  }
}
function addOnion() {
  if (Onion.checked == true) {
    let holder = document.getElementById("topping-add5");
    holder.innerHTML = '<img src ="img/Onion-pizza.png">';
    holder.style.display = "block";

    var inHTML = document.getElementById("text5").innerHTML;
    var valueTopping = inHTML
      .split('">')[0]
      .replace("$2", "")
      .replace("<p>", "")
      .replace("</p><p>", "")
      .replace("</p>", "")
      .replace('<label for="check_5" class="additem', "");
    console.log(valueTopping);
    var topping = localStorage.getItem("toppingcake");
    if (topping == null || topping == undefined) {
      topping = [valueTopping];
    } else {
      topping = JSON.parse(topping);
      if (topping.indexOf(valueTopping) == -1) {
        topping.push(valueTopping);
      }
    }
    localStorage.setItem("toppingcake", JSON.stringify(topping));

    var img = "img/Onion-topping.png";
    var Img = localStorage.getItem("image");
    if (Img == null || Img == undefined) {
      Img = [img];
    } else {
      Img = JSON.parse(Img);
      if (Img.indexOf(img) == -1) {
        Img.push(img);
      }
    }
    localStorage.setItem("image", JSON.stringify(Img));
  } else {
    let holder = document.getElementById("topping-add5");
    holder.innerHTML = '<img src ="img/Onion-pizza.png">';
    holder.style.display = "none";

    var topping = localStorage.getItem("toppingcake");
    topping = JSON.parse(topping);
    var name = "Onion";
    var newtopping = topping.filter((item) => item !== name);
    topping = newtopping;
    localStorage.setItem("toppingcake", JSON.stringify(topping));

    var Img = localStorage.getItem("image");
    Img = JSON.parse(Img);
    valueImg = "img/Onion-topping.png";
    var newimg = Img.filter((item) => item !== valueImg);
    Img = newimg;
    localStorage.setItem("image", JSON.stringify(Img));
  }
}
function addOlive() {
  if (Olive.checked == true) {
    let holder = document.getElementById("topping-add6");
    holder.innerHTML = '<img src ="img/Olive-pizza.png">';
    holder.style.display = "block";

    var inHTML = document.getElementById("text6").innerHTML;
    var valueTopping = inHTML
      .split('">')[0]
      .replace("$2", "")
      .replace("<p>", "")
      .replace("</p><p>", "")
      .replace("</p>", "")
      .replace('<label for="check_6" class="additem', "");
    console.log(valueTopping);
    var topping = localStorage.getItem("toppingcake");
    if (topping == null || topping == undefined) {
      topping = [valueTopping];
    } else {
      topping = JSON.parse(topping);
      if (topping.indexOf(valueTopping) == -1) {
        topping.push(valueTopping);
      }
    }
    localStorage.setItem("toppingcake", JSON.stringify(topping));

    var img = "img/Olive-topping1.png";
    var Img = localStorage.getItem("image");
    if (Img == null || Img == undefined) {
      Img = [img];
    } else {
      Img = JSON.parse(Img);
      if (Img.indexOf(img) == -1) {
        Img.push(img);
      }
    }
    localStorage.setItem("image", JSON.stringify(Img));
  } else {
    let holder = document.getElementById("topping-add6");
    holder.innerHTML = '<img src ="img/Olive-pizza.png">';
    holder.style.display = "none";

    var topping = localStorage.getItem("toppingcake");
    topping = JSON.parse(topping);
    var name = "Olive";
    var newtopping = topping.filter((item) => item !== name);
    topping = newtopping;
    localStorage.setItem("toppingcake", JSON.stringify(topping));

    var Img = localStorage.getItem("image");
    Img = JSON.parse(Img);
    valueImg = "img/Olive-topping1.png";
    var newimg = Img.filter((item) => item !== valueImg);
    Img = newimg;
    localStorage.setItem("image", JSON.stringify(Img));
  }
}
function addHam() {
  if (Ham.checked == true) {
    let holder = document.getElementById("topping-add7");
    holder.innerHTML = '<img src ="img/ham-pizza.png">';
    holder.style.display = "block";

    var inHTML = document.getElementById("text7").innerHTML;
    var valueTopping = inHTML
      .split('">')[0]
      .replace("$2", "")
      .replace("<p>", "")
      .replace("</p><p>", "")
      .replace("</p>", "")
      .replace('<label for="check_7" class="additem', "");
    console.log(valueTopping);
    var topping = localStorage.getItem("toppingcake");
    if (topping == null || topping == undefined) {
      topping = [valueTopping];
    } else {
      topping = JSON.parse(topping);
      if (topping.indexOf(valueTopping) == -1) {
        topping.push(valueTopping);
      }
    }
    localStorage.setItem("toppingcake", JSON.stringify(topping));

    var img = "img/ham-topping.png";
    var Img = localStorage.getItem("image");
    if (Img == null || Img == undefined) {
      Img = [img];
    } else {
      Img = JSON.parse(Img);
      if (Img.indexOf(img) == -1) {
        Img.push(img);
      }
    }
    localStorage.setItem("image", JSON.stringify(Img));
  } else {
    let holder = document.getElementById("topping-add7");
    holder.innerHTML = '<img src ="img/ham-pizza.png">';
    holder.style.display = "none";

    var topping = localStorage.getItem("toppingcake");
    topping = JSON.parse(topping);
    var name = "Ham";
    var newtopping = topping.filter((item) => item !== name);
    topping = newtopping;
    localStorage.setItem("toppingcake", JSON.stringify(topping));

    var Img = localStorage.getItem("image");
    Img = JSON.parse(Img);
    valueImg = "img/ham-topping.png";
    var newimg = Img.filter((item) => item !== valueImg);
    Img = newimg;
    localStorage.setItem("image", JSON.stringify(Img));
  }
}
function addPepperoni() {
  if (Pepperoni.checked == true) {
    let holder = document.getElementById("topping-add8");
    holder.innerHTML = '<img src ="img/Pepperori-pizza.png">';
    holder.style.display = "block";

    var inHTML = document.getElementById("text8").innerHTML;
    var valueTopping = inHTML
      .split('">')[0]
      .replace("$2", "")
      .replace("<p>", "")
      .replace("</p><p>", "")
      .replace("</p>", "")
      .replace('<label for="check_8" class="additem', "");
    console.log(valueTopping);
    var topping = localStorage.getItem("toppingcake");
    if (topping == null || topping == undefined) {
      topping = [valueTopping];
    } else {
      topping = JSON.parse(topping);
      if (topping.indexOf(valueTopping) == -1) {
        topping.push(valueTopping);
      }
    }
    localStorage.setItem("toppingcake", JSON.stringify(topping));

    var img = "img/Pepperori-topping.png";
    var Img = localStorage.getItem("image");
    if (Img == null || Img == undefined) {
      Img = [img];
    } else {
      Img = JSON.parse(Img);
      if (Img.indexOf(img) == -1) {
        Img.push(img);
      }
    }
    localStorage.setItem("image", JSON.stringify(Img));
  } else {
    let holder = document.getElementById("topping-add8");
    holder.innerHTML = '<img src ="img/Pepperori-pizza.png">';
    holder.style.display = "none";

    var topping = localStorage.getItem("toppingcake");
    topping = JSON.parse(topping);
    var name = "Pepperoni";
    var newtopping = topping.filter((item) => item !== name);
    topping = newtopping;
    localStorage.setItem("toppingcake", JSON.stringify(topping));

    var Img = localStorage.getItem("image");
    Img = JSON.parse(Img);
    valueImg = "img/Pepperori-topping.png";
    var newimg = Img.filter((item) => item !== valueImg);
    Img = newimg;
    localStorage.setItem("image", JSON.stringify(Img));
  }
}
function addBacon() {
  if (Bacon.checked == true) {
    let holder = document.getElementById("topping-add9");
    holder.innerHTML = '<img src ="img/bacon-topping.png">';
    holder.style.display = "block";

    var inHTML = document.getElementById("text9").innerHTML;
    var valueTopping = inHTML
      .split('">')[0]
      .replace("$2", "")
      .replace("<p>", "")
      .replace("</p><p>", "")
      .replace("</p>", "")
      .replace('<label for="check_9" class="additem', "");
    console.log(valueTopping);
    var topping = localStorage.getItem("toppingcake");
    if (topping == null || topping == undefined) {
      topping = [valueTopping];
    } else {
      topping = JSON.parse(topping);
      if (topping.indexOf(valueTopping) == -1) {
        topping.push(valueTopping);
      }
    }
    localStorage.setItem("toppingcake", JSON.stringify(topping));

    var img = "img/bacon-topping1.png";
    var Img = localStorage.getItem("image");
    if (Img == null || Img == undefined) {
      Img = [img];
    } else {
      Img = JSON.parse(Img);
      if (Img.indexOf(img) == -1) {
        Img.push(img);
      }
    }
    localStorage.setItem("image", JSON.stringify(Img));
  } else {
    let holder = document.getElementById("topping-add9");
    holder.innerHTML = '<img src ="img/bacon-pizza.png">';
    holder.style.display = "none";

    var topping = localStorage.getItem("toppingcake");
    topping = JSON.parse(topping);
    var name = "Bacon";
    var newtopping = topping.filter((item) => item !== name);
    topping = newtopping;
    localStorage.setItem("toppingcake", JSON.stringify(topping));

    var Img = localStorage.getItem("image");
    Img = JSON.parse(Img);
    valueImg = "img/bacon-topping1.png";
    var newimg = Img.filter((item) => item !== valueImg);
    Img = newimg;
    localStorage.setItem("image", JSON.stringify(Img));
  }
}
function addSausage() {
  if (Sausage.checked == true) {
    let holder = document.getElementById("topping-add10");
    holder.innerHTML = '<img src ="img/Sausage-pizza.png">';
    holder.style.display = "block";

    var inHTML = document.getElementById("text10").innerHTML;
    var valueTopping = inHTML
      .split('">')[0]
      .replace("$2", "")
      .replace("<p>", "")
      .replace("</p><p>", "")
      .replace("</p>", "")
      .replace('<label for="check_10" class="additem', "");
    console.log(valueTopping);
    var topping = localStorage.getItem("toppingcake");
    if (topping == null || topping == undefined) {
      topping = [valueTopping];
    } else {
      topping = JSON.parse(topping);
      if (topping.indexOf(valueTopping) == -1) {
        topping.push(valueTopping);
      }
    }
    localStorage.setItem("toppingcake", JSON.stringify(topping));

    var img = "img/Sausage-topping.png";
    var Img = localStorage.getItem("image");
    if (Img == null || Img == undefined) {
      Img = [img];
    } else {
      Img = JSON.parse(Img);
      if (Img.indexOf(img) == -1) {
        Img.push(img);
      }
    }
    localStorage.setItem("image", JSON.stringify(Img));
  } else {
    let holder = document.getElementById("topping-add10");
    holder.innerHTML = '<img src ="img/Sausage-pizza.png">';
    holder.style.display = "none";

    var topping = localStorage.getItem("toppingcake");
    topping = JSON.parse(topping);
    var name = "Sausage";
    var newtopping = topping.filter((item) => item !== name);
    topping = newtopping;
    localStorage.setItem("toppingcake", JSON.stringify(topping));

    var Img = localStorage.getItem("image");
    Img = JSON.parse(Img);
    valueImg = "img/Sausage-topping.png";
    var newimg = Img.filter((item) => item !== valueImg);
    Img = newimg;
    localStorage.setItem("image", JSON.stringify(Img));
  }
}
function addAnchovy() {
  if (Anchovy.checked == true) {
    let holder = document.getElementById("topping-add11");
    holder.innerHTML = '<img src ="img/Anchovy-pizza.png">';
    holder.style.display = "block";

    var inHTML = document.getElementById("text11").innerHTML;
    var valueTopping = inHTML
      .split('">')[0]
      .replace("$2", "")
      .replace("<p>", "")
      .replace("</p><p>", "")
      .replace("</p>", "")
      .replace('<label for="check_11" class="additem', "");
    console.log(valueTopping);
    var topping = localStorage.getItem("toppingcake");
    if (topping == null || topping == undefined) {
      topping = [valueTopping];
    } else {
      topping = JSON.parse(topping);
      if (topping.indexOf(valueTopping) == -1) {
        topping.push(valueTopping);
      }
    }
    localStorage.setItem("toppingcake", JSON.stringify(topping));

    var img = "img/Anchovy-topping.png";
    var Img = localStorage.getItem("image");
    if (Img == null || Img == undefined) {
      Img = [img];
    } else {
      Img = JSON.parse(Img);
      if (Img.indexOf(img) == -1) {
        Img.push(img);
      }
    }
    localStorage.setItem("image", JSON.stringify(Img));
  } else {
    let holder = document.getElementById("topping-add11");
    holder.innerHTML = '<img src ="img/Anchovy-pizza.png">';
    holder.style.display = "none";

    var topping = localStorage.getItem("toppingcake");
    topping = JSON.parse(topping);
    var name = "Anchovy";
    var newtopping = topping.filter((item) => item !== name);
    topping = newtopping;
    localStorage.setItem("toppingcake", JSON.stringify(topping));

    var Img = localStorage.getItem("image");
    Img = JSON.parse(Img);
    valueImg = "img/Anchovy-topping.png";
    var newimg = Img.filter((item) => item !== valueImg);
    Img = newimg;
    localStorage.setItem("image", JSON.stringify(Img));
  }
}

function topping() {
  var checkbox = document.getElementsByName("tin");
  var result = "";
  for (var i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked === true) {
      result += checkbox[i].value;
    }
  }
  var valuePrice = result.length;
  getValuePrice(valuePrice);
}
