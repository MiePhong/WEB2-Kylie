//name
const localStorageName = localStorage.getItem("namespizza");

let namespizza;
if (localStorageName === null) {
  namespizza = [];
} else {
  namespizza = JSON.parse(localStorageName);
}
namespizza.push("Veggie Mania");
namespizza.push("Seafood Delight");
namespizza.push("Meet Lovers");
namespizza.push("Prime Beef");
namespizza.push("Bacon Kid");
namespizza.push("Greenie");
namespizza.push("Extravagaza");
namespizza.push("Anchovy Adict");
namespizza.push("Saigon Pizza");
namespizza.push("Fruity Pig");
namespizza.push("Pepperoni");
namespizza.push("Cheese");
localStorage.setItem("names pizza", JSON.stringify(namespizza));

//image

const localStorageImage = localStorage.getItem("images");

let images;
if (localStorageImage === null) {
  images = [];
} else {
  images = JSON.parse(localStorageImage);
}
images.push("image/1.png");
images.push("image/2.png");
images.push("image/3.png");
images.push("image/4.png");
images.push("image/5.png");
images.push("image/6.png");
images.push("image/7.png");
images.push("image/8.png");
images.push("image/9.png");
images.push("image/10.png");
images.push("image/11.png");
images.push("image/12.png");

localStorage.setItem("images pizza", JSON.stringify(images));
