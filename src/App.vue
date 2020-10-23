<template>
  <div id="nav">
    <router-link to="exercise1">Exercise 1</router-link> |
    <router-link to="exercise2">Exercise 2</router-link> |
    <router-link to="exercise3">Exercise 3</router-link> |
    <router-link to="exercise4">Exercise 4</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
