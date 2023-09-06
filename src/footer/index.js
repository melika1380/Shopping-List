import html from "./index.html";
import "./index.scss";
import {
  getSavedItems,
  saveItem,
  saveItems,
} from "../utility/localStorageHandler";

function loaderPage() {
  const userInput = document.querySelector(".input");
  const inputBtn = document.querySelector(".button");
  const shoppingList = document.querySelector(".shopping-list");
  const li = document.querySelectorAll(".li");

  const renderList = () => {
    const savedItems = getSavedItems();
    const savedItemFunction = (item) => {
      const newListItem = document.createElement("li");
      newListItem.className = "shopLi";
      const newLi = `
          <span>
            <span class="Square"></span>
            <span class="text">${item}</span>
          </span>
          <span class="tik"></span>
        `;
      newListItem.innerHTML = newLi;
      shoppingList.appendChild(newListItem);
      newListItem.addEventListener("click", () => dltClick(item));
    };
    if (savedItems == "") {
      savedItemFunction("task1");
      savedItemFunction("task2");
      savedItemFunction("task3");
    } else {
      savedItems.forEach(savedItemFunction);
    }
  };
  renderList();

  const btnClick = () => {
    shoppingList.innerHTML = "";
    const inputUserValue = userInput.value;
    if (inputUserValue == "") {
      renderList();
      userInput.value = "";
      alert("please fill the box");
    } else {
      saveItem(inputUserValue);
      renderList();
      userInput.value = "";
    }
  };

  const dltClick = (item) => {
    const currentItems = getSavedItems();
    const itemIndex = currentItems.indexOf(item);
    if (itemIndex > -1) {
      shoppingList.innerHTML = "";
      currentItems.splice(itemIndex, 1);
      saveItems(currentItems);
      renderList();
    }
  };
  
  
  const keyUp = (event) => {
    if (event.key === "Enter") {
      inputBtn.click();
    }
  };

  inputBtn.addEventListener("click", btnClick);
  userInput.addEventListener("keyup", keyUp);
}

window.addEventListener("load", loaderPage);

export default html;
