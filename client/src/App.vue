<template>
  <div id="app">
    <main-header :user="user"></main-header>
    <router-view :user="user"></router-view>
    <div class="text-center custom-contar mt-5">
      {{contar}}
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import {bus} from './services/bus.js'

export default {
  name: 'app',
  components:{
    mainHeader: Header
  },
  data () {
    return {
      user: {
        firstName: 'Nahuel',
        lastName: 'Costamagna',
        role: 2
      },
      contar: 0
    }
  },
  created(){
    bus.$on('contar', parametro => {
      console.log(parametro);
      this.contar++;
    })
  }
}
</script>

<style>
.custom-contar{
  font-size: 30px;
}
</style>
