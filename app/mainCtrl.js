angular.module('myChat').controller('mainCtrl', function(mainService, $scope) {

//////////////////CHAT APP

  $scope.addChat = (chat) => {
    if (!chat) {
      return false;
    }
    $scope.chats = mainService.addChat(chat);
  }

  $scope.getChatData = () => {
    $scope.chats = mainService.chats;
  }
  $scope.getChatData();

/////////////////TODO APP

  $scope.addTodo = (todo) => {
    if (!todo) {
      return false;
    }
    $scope.todoItems = mainService.addTodo(todo);
  }

  $scope.updateList = () => {
    var response = mainService.updateList();
    $scope.todoItems = response[0];
    $scope.completedItems = response[1];
  }

  $scope.getTodoData = () => {
    $scope.todoItems = mainService.todoItems;
    $scope.completedItems = mainService.completedItems;
  }
  $scope.getTodoData();

  $scope.deleteCompleted = (item) => {
    $scope.completedItems = mainService.deleteCompleted(item);
  }


  // LOCALSTORAGE

  // $scope.todos = JSON.parse(localStorage.getItem('todos'));
  //
  // $scope.addTodo = () => {
  //   $scope.todos.push({"title":$scope.newTodo, "done":false})
  //   $scope.newTodo = ''
  // }
  //
  // $scope.clearCompleted = () => {
  //   $scope.todos = $scope.todos.filter((item) => {
  //     if(newValue!=oldValue) {
  //       localStorage.setItem("todos",JSON.stringify(newValue))
  //     }
  //   },true)
  // }


})
