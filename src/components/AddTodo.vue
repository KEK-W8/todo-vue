<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title" />
    <button type="submit">Add</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false,
        };

        this.$emit("add-todo", newTodo);
        this.title = "";
      }
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

input {
  width: 40vw;
  height: 1.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  outline: none;
  padding-left: 0.3rem;
}

input:hover {
  cursor: pointer;
  opacity: 0.8;
}

button[type="submit"] {
  height: 1.74rem;
  border-radius: 6px;
  font-weight: bold;
  margin-left: 0.3rem;
  background-color: white;
  border: 1px solid #ccc;
}

button[type="submit"]:hover {
  cursor: pointer;
  opacity: 0.8;
  background-color: whitesmoke;
}
</style>
