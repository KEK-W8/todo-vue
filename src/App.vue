<template>
  <div id="app">
    <div class="navigation">
      <router-link to="/"><h2>List</h2></router-link>
      <router-link to="/Archive"><h2>Archive</h2></router-link>
    </div>
    <hr />
    <router-view></router-view>
  </div>
</template>

<style>
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
</style>
