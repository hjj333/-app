<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <TabBar></TabBar>
  </div>
</template>
<script>
import Header from './components/Header'
import TabBar from './components/TabBar'
export default {
  components: {
    Header,
    TabBar
  }
}
</script>
<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
