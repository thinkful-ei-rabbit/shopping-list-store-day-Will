
import item from './item.js';
let items = [];
let hideCheckedItems = false;
  

export const thisList =  {
    items,
    hideCheckedItems
  };

  function findById(id){
      return store.items.find(function(element){
          return element.id == id;
      });
  }

  function addItem(name){
      try{
          item.validateName(name);
          let thisItem = item.create(name);
          console.log(thisItem)
          items.push(thisItem);
      } catch(e){
        console.log(`Cannot add item: ${e.message}`);
      }
  }

  function findAndToggleChecked(id){
        let thisItem = this.findById(id);
        thisItem.checked = !thisItem.checked;
  }

  function findAndUpdateName(id, newName){
      try{
          item.validateName(newName);
          let thisItem = findById(id);
          thisItem.name = newName;
      } catch(e){
          console.log(`Cannot update name: ${error.message}`);
      }
  }



  function findAndDelete(id){
    //alert("here");
    //console.log("activated");
    thisList.items = thisList.items.filter(function(e){
          return (e.id != id);
      })
  }

  function toggleCheckedFilter(){
      hideCheckedItems = !hideCheckedItems;
  }

  export default{addItem, findAndUpdateName, findAndToggleChecked, findAndDelete, toggleCheckedFilter};
  
