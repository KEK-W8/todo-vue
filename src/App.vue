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
        // { id: 1, title: "Выучить 10 слов", completed: false },
        // { id: 2, title: "Купить биткоин", completed: false },
        // { id: 3, title: "Погулять с собакой", completed: false },
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
      switch (this.filter) {
        case "all":
          return this.todos;
        case "completed":
          return this.todos.filter((t) => t.completed);
        case "active":
          return this.todos.filter((t) => !t.completed);
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
  outline: none;
}
a:hover {
  color: #cef;
  opacity: 0.8;
}
a:visited {
  color: #2c3e50;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.navigation {
  display: flex;
  padding: 0 2rem 0 2rem;
}
.navigation a + a {
  margin-left: 2rem;
}
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
