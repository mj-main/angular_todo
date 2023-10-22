angular.module("todo").factory("todoStorage", function () {
  var TODO_DATA = "TODO_DATA";
  var storage = {
    todos: [
      //   {
      //     title: "요가수련",
      //     completed: false,
      //     createdAt: Date.now(),
      //   },
      //   {
      //     title: "Angular 학습",
      //     completed: false,
      //     createdAt: Date.now(),
      //   },
      //   {
      //     title: "운동하기",
      //     completed: true,
      //     createdAt: Date.now(),
      //   },
    ],

    _saveToLocalStorage: function (data) {
      localStorage.setItem(TODO_DATA, JSON.stringify(data));
    },

    _getFromLocalStorage: function () {
      return JSON.parse(localStorage.getItem(TODO_DATA)) || [];
    },

    get: function () {
      angular.copy(storage._getFromLocalStorage(), storage.todos);
      return storage.todos;
    },

    remove: function (todo) {
      var idx = storage.todos.findIndex(function (item) {
        return item === todo;
      });

      if (idx > -1) {
        storage.todos.splice(idx, 1);
        storage._saveToLocalStorage(storage.todos);
      }
    },

    add: function (newTodoTitle) {
      var newTodo = {
        title: newTodoTitle,
        completed: false,
        createdAt: Date.now(),
      };

      storage.todos.push(newTodo);
      storage._saveToLocalStorage(storage.todos);
    },

    update: function () {
      storage._saveToLocalStorage(storage.todos);
    },
  };
  return storage;
});
