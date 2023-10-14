<template>
  <div>
    <h1>TODOlist</h1>
    <ul>
      <li v-for="todo in todos" :key="todo">{{ todo.text }}<input type="checkbox" v-model="todo.completed"/></li>
    </ul>
    <input type="text" v-model="todoForAdd" />
    <button @click="addTodo()">追加</button>
    <br />
    <button @click="removeTodo()">チェックしたtodoを削除する</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoForAdd: "",
      todos: [],
    };
  },
  methods: {
    addTodo() {
      
      this.todos.push({ text: this.todoForAdd, completed: false });
      this.todoForAdd = "";
    },
    removeTodo() {
      this.todos=this.todos.filter(todo=>!todo.completed);
    },
  },

  created() {
    this.todos = todoStorage.fetch();
  },
};
</script>
