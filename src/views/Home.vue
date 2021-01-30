<template>
  <div>
    <h2>Home page</h2>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio,
      blanditiis.
    </p>
    <button><router-link to="/todos">Go to list</router-link></button>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}
a:visited {
  color: black;
}
button {
  height: 1.75rem;
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
</style>
