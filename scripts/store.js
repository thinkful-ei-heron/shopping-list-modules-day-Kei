import item from './item.js';

const store = {
  items: [],
  hideCheckedItems: false
};

const findById = function (id) {
  return store.items.find(item => item.id === id);
};

const addItem = function (name) {
  try {
    item.validateName(name);
    this.items.push(item.create(name));
  } catch(error){
    console.log(`Cannot add item: ${error.message}`);
  }
};

const findAndToggleChecked = function (id) {
  let tempItem = findById(id);
  tempItem.checked = !tempItem.checked;
};

const findAndUpdateName = function (id, newName) {
  try {
    item.validateName(newName);
    this.findById(id).name = newName;
  } catch (error) {
    console.log(`Cannot update name: ${error.message}`);
  }
};

const findAndDelete = function (id) {
  const index = this.items.findIndex(item => item.id === id);
  this.items.splice(index,1);
};

const toggleCheckedFilter = function() {
  this.hideCheckedItems = !this.hideCheckedItems;
};

let items = store.items;
let hideCheckedItems = store.hideCheckItems;

export default {
  items,
  hideCheckedItems,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter
};
