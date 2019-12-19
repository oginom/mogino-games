<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <img alt="mogino games icon" src="@/assets/ogigames6.png" />
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: block;
  text-align: right;
  margin-left: auto;
  margin-right: auto;
  width: 20vw;
}
#nav img {
  width: 100%;
}
</style>
