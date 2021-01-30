<template>
  <div>
    <button><router-link to="/">Back</router-link></button>
    <h2>Control your plans</h2>
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
    <h4 v-else>Add something!</h4>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";
import Loader from "@/components/Loader";
export default {
  name: "App",
  data() {
    return {
      todos: [
        // { id: 1, title: "Выучить 10 слов", completed: false },
        // { id: 2, title: "Купить биткоин", completed: false },
        // { id: 3, title: "Погулять с собакой", completed: false },
      ],
      loading: true,
      filter: "all",
    };
  },
  components: {
    TodoList,
    AddTodo,
    Loader,
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
      .then((response) => response.json())
      .then((json) => {
        // setTimeout(() => {
        this.todos = json;
        this.loading = false;
        // }, 1500);
      });
  },
  computed: {
    filteredTodos() {
      // if (this.filter === "all") {
      //   return this.todos;
      // }
      // if (this.filter === "completed") {
      //   return this.todos.filter((t) => t.completed);
      // }
      // if (this.filter === "active") {
      //   return this.todos.filter((t) => !t.completed);
      // }
      switch (this.filter) {
        case "all":
          return this.todos;
          break;
        case "completed":
          return this.todos.filter((t) => t.completed);
          break;
        case "completed":
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
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

button {
  border-radius: 6px;
  font-weight: bold;
  margin-left: 0.3rem;
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
  position: relative;
  left: 40%;
}
</style>
