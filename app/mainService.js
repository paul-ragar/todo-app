angular.module('myChat').service('mainService', function() {

  this.chats = [];
  this.chats = JSON.parse(localStorage.getItem('Chat Data')) || [];


  this.addChat = (newChat) => {
    this.chats.push(newChat);
    localStorage.setItem('Chat Data', JSON.stringify(this.chats));
    return this.chats;
  }


  this.todoItems = [];
  this.todoItems = JSON.parse(localStorage.getItem('Todo Data')) || [];

  this.completedItems = [];
  this.completedItems = JSON.parse(localStorage.getItem('Completed Data')) || [];


  this.addTodo = (todo) => {
    console.log(todo);
    this.todoItems.push(todo);
    localStorage.setItem('Todo Data', JSON.stringify(this.todoItems));
    return this.todoItems;
  }
  this.updateList = () => {
    var newCompleted;
    for (var i = this.todoItems.length - 1; i >= 0; i--) {
      if (this.todoItems[i].checked) {
        newCompleted = this.todoItems.splice(i, 1);
        this.completedItems.push(newCompleted);
      }
    }
    localStorage.setItem('Todo Data', JSON.stringify(this.todoItems));
    localStorage.setItem('Completed Data', JSON.stringify(this.completedItems));
    return [this.todoItems, this.completedItems];
  }

  this.deleteCompleted = (item) => {
    var garbage;
    for (var i = 0; i < this.completedItems.length; i++) {
      if (item === i) {
        this.completedItems.splice(i,1);
      }
    }
    localStorage.setItem('Completed Data', JSON.stringify(this.completedItems));
    return this.completedItems;
  }
})
