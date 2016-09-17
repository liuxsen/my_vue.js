<template>
  <div class="hello" v-bind:class="{ 'class-a': isA, 'class-b': isB }">
    <h1>{{ msg }}</h1>
  </div>
  <my-slot>
    <div slot='one'>one</div>
    <div slot='two'>two</div>
    <div>普通slot</div>
  </my-slot>
</template>

<script>
  import mySlot from  './mySlot.vue'
  export default {
  data () {
    return {
      msg: 'Hello World!',
      isA:true
    }
  },
    components:{
    'my-slot':mySlot
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
