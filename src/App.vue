<template>
  <div id="app">
    <HelloWorld/>
    <button v-on:click="incrementFromOutside">
      increment from outside
    </button>
  </div>
</template>

<script>
import store from './Store';
import { INCREMENT } from './Actions';
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  store,
  components: {
    HelloWorld,
  },
  methods: {
    incrementFromOutside() {
      store.dispatch(INCREMENT.full);
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
