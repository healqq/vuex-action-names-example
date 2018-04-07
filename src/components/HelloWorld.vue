<template>
  <div class="hello">
    <div>
      <span>{{count}}</span>
      <button v-on:click="increment">increment</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { mapActionsHelper } from 'vuex-action-names';
import { INCREMENT } from '../Actions';

export default {
  name: 'HelloWorld',
  computed: {
    ...mapState({
      count: state => state.counter.count,
    }),
  },
  methods: {
    ...mapActionsHelper(INCREMENT),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
