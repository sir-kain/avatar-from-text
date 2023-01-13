import "./style.css";
import randomColor from "randomcolor";

const names = [
  "Ahmadou Waly Ndiaye",
  "Adji Fatma Mbacke Thioune",
  "23 a33",
  "Moustapha Gueye",
  "Ndeye Binta",
  " ko",
  "Inno",
];

function $(selector) {
  return document.querySelector(selector);
}

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  parent.insertAdjacentElement("beforeend", el);
}

function nameInitals(names) {
  return names.map((fullname) => {
    return fullname.split(" ").map((name) => name.charAt(0));
  });
}

function maxInitialNumber(initials, n) {
  return initials.map((inital) => inital.slice(0, n));
}

function item(initials) {
  const $item = createNode("div");
  $item.classList.add("item");
  $item.style.background = randomColor();
  initials.forEach((initial) => {
    const $span = createNode("span");
    $span.textContent = initial;
    append($item, $span);
  });

  return $item;
}

function items(initialList) {
  const $items = $(".items");
  initialList.forEach((initials) => {
    const $item = item(initials);
    append($items, $item);
  });
}

const initialList = maxInitialNumber(nameInitals(names), 3);
items(initialList);
