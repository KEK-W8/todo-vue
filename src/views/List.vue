<template>
  <div>
    <h2>Manage your plans</h2>
    <AddTodo @add-todo="addTodo" />
    <select v-model="filter">
      <option value="all">All</option>
      <option value="active">Active</option>
      <option value="completed">Completed</option>
    </select>
    <Loader v-if="loading" />
    <TodoList
      v-else-if="filteredTodos.length"
      v-bind:todos="filteredTodos"
      @remove-todo="removeTodo"
    />
    <h4 v-else>No todos here!</h4>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";
import Loader from "@/assets/effects/Loader";
export default {
  name: "List",
  data() {
    return {
      todos: [
        { id: 1, title: "Выучить 10 слов", completed: false },
        { id: 2, title: "Купить биткоин", completed: false },
        { id: 3, title: "Погулять с собакой", completed: false },
      ],
      loading: false,
      filter: "all",
    };
  },
  components: {
    TodoList,
    AddTodo,
    Loader,
  },
  // mounted() {
  //   fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       // setTimeout(() => {
  //       this.todos = json;
  //       this.loading = false;
  //       // }, 1500);
  //     });
  // },
  computed: {
    filteredTodos() {
      switch (this.filter) {
        case "all":
          return this.todos;
          break;
        case "completed":
          return this.todos.filter((t) => t.completed);
          break;
        case "active":
          return this.todos.filter((t) => !t.completed);
          break;
      }
    },
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter((t) => t.id !== id);
    },
    addTodo(todo) {
      this.todos.push(todo);
    },
    addToArchive(id) {
      this.todos = this.todos.filter((t) => t.id !== id);
      this.archived.push(id);
    },
  },
};
</script>

<style scoped>
h2 {
  display: flex;
  justify-content: center;
}
button {
  height: 1rem;
  border-radius: 6px;
  font-weight: bold;
  background-color: white;
  border: 1px solid #ccc;
}
button:hover {
  cursor: pointer;
  opacity: 0.8;
  background-color: whitesmoke;
}
select {
  margin-bottom: 1rem;
}
</style>
