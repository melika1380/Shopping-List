const savedItemsKey = "shoppingListItems";

export function getSavedItems() {
  return Object.values(localStorage) || [];
}

export function saveItem(key, text) {
  localStorage.setItem(key, text);
}
export function removeItem(key) {
  localStorage.removeItem(key);
}
