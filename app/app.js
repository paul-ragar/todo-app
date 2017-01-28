angular.module('myChat', ['ui.router']).config(function($urlRouterProvider, $stateProvider){

  $urlRouterProvider.otherwise('/chat');

  $stateProvider
  .state('chat', {
    url: '/chat',
    templateUrl: './app/views/chatView.html'
  })
  .state('todo', {
    url: '/todo',
    templateUrl: './app/views/todoView.html'
  })







  // End of app.js
})
