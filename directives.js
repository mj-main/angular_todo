angular.module("todo").directive("todoTitle", function () {
  return {
    template: "<h1>Todo 목록</h1>",
  };
});

angular.module("todo").directive("todoItem", function () {
  return {
    templateUrl: "todoItem.tpl.html",
  };
});

angular.module("todo").directive("todoFilters", function () {
  return {
    templateUrl: "todoFilters.tpl.html",
  };
});

angular.module("todo").directive("todoForm", function () {
  return {
    templateUrl: "todoForm.tpl.html",
  };
});
