<template>
  <div>
    <h1>TODOlist</h1>
    <ul>
      <li v-for="todo in todos" :key="todo">
        {{ todo.text }}<input type="checkbox" v-model="todo.completed" />
      </li>
    </ul>
    <input type="text" v-model="todoForAdd" @keyup.enter="addTodo()" />
    <button @click="addTodo()">追加</button>
    <br />
    <button @click="removeTodo()">チェックしたtodoを削除する</button>
  </div>
</template>

<script>
import todoStorage from "./todoStorage";
export default {
  data() {
    return {
      todoForAdd: "",
      todos: [],
    };
  },
  methods: {
    addTodo() {
      if (!this.todoForAdd) return;
      this.todos.push({ text: this.todoForAdd, completed: false });
      todoStorage.save(this.todos, "todolist");
      this.todoForAdd = "";
    },
    removeTodo() {
      this.todos = this.todos.filter((todo) => !todo.completed);
      todoStorage.save(this.todos, "todolist");
    },
  },
  created() {
      console.log("created start");
      this.todos = todoStorage.fetch("todolist");
      console.log("created end");
    },
};
</script>
