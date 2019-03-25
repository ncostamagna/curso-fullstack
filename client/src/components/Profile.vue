<template>
  <div class="profile text-center mt-5" >
    <h1>Perfil del Usuario</h1>
    <h2 class="mt-5">{{user.firstName}} {{user.lastName}}</h2>
    <h4>
      Role: <span v-if="user.role === 2">Administrador</span>
      <span v-else>Básico</span>
    </h4>
    <button class="btn btn-primary" @click="contar()">Sumar</button>
  </div>
</template>

<script>
import {bus} from '../services/bus.js'

export default {
  name: 'profile',
  data () {
    return {

    }
  },
  props: ['user'],
  methods: {
    contar(){
      bus.contar('hola mundo');
    }
  }
}
</script>

<style>
</style>
