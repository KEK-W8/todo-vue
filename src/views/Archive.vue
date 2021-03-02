<template>
  <div class="archive">
    <Loader v-if="loading" />
    <ul v-else-if="archivedTodos.length">
      <ArchivedItem
        v-for="(todo, i) of archivedTodos"
        v-bind:todo="todo"
        v-bind:index="i"
        v-bind:key="todo.id"
      />
    </ul>
    <h2 v-else>The archive is empty</h2>
  </div>
</template>

<script>
import Loader from "@/assets/effects/Loader";
export default {
  name: "Archive",
  data() {
    return {
      archivedTodos: [],
      loading: false,
    };
  },
  methods: {
    recoverTodo(id) {
      this.archivedTodo = this.archivedTodo.filter((t) => t.id !== id);
      this.todos = this.todos.push(id);
    },
  },
};
</script>

<style scoped>
.archive h2 {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}
</style>
