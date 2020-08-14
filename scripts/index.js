import shoppingList from './shopping-list.js';
import store from './store.js';
import item from './item.js';
import {thisList} from './store.js';
const main = function () {
  
  shoppingList.bindEventListeners();
  shoppingList.render();
};

store.addItem('bananas');
store.addItem('apples');
store.addItem('rice');
// grab the id of the first store item (bananas)
let id = thisList.items[0].id;
console.log(id);

store.findAndDelete(id);

console.log("after")
shoppingList.render();

$(main);