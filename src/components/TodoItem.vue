<template>
  <li>
    <span v-bind:class="{ done: todo.completed }">
      <input
        type="checkbox"
        @change="changeStatus"
        v-bind:class="{ done: todo.completed }"
      />
      <strong>{{ index + 1 }}</strong>
      {{ todo.title | uppercase }}
    </span>
    <button class="rm" @click="$emit('remove-todo', todo.id)">
      &times;
    </button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: Number,
  },
  methods: {
    changeStatus() {
      this.todo.completed = !this.todo.completed;
    },
  },
  filters: {
    uppercase(value) {
      return value.toUpperCase();
    },
  },
};
</script>

<style scoped>
li {
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
}

.rm {
  background: red;
  color: #fff;
  border-radius: 6px;
  font-weight: bold;
  border: 1px solid whitesmoke;
}

.rm:hover {
  cursor: pointer;
  opacity: 0.8;
  background-color: darkred;
}

.done {
  text-decoration: line-through;
}

input {
  margin-right: 1rem;
}

input:hover {
  cursor: pointer;
  opacity: 0.8;
  background-color: grey;
}
</style>
