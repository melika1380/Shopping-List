
const savedItemsKey = "shoppingListItems";

export function getSavedItems() {
  return JSON.parse(localStorage.getItem(savedItemsKey)) || [];
}

export function saveItems(items) {
  localStorage.setItem("shoppingListItems", JSON.stringify(items));
}

export function saveItem(item) {
  const savedItems = getSavedItems();
  savedItems.push(item);
  localStorage.setItem(savedItemsKey, JSON.stringify(savedItems));
}


