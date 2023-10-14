export default {
  fetch(STORAGE_KEY) {
    var todos = localStorage.getItem(STORAGE_KEY);
    todos = todos ? JSON.parse(todos) : [];
    // todos.array.forEach((todo, index) => {
    //   todo.id = index;
    // });
    console.log("todos:" + todos);
    return todos;
  },
  save(todos, STORAGE_KEY) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  },
};
