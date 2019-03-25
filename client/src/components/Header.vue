<template>
  <div class="header">
    <div class="navbar navbar-expand-md navbar-light bg-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link tag="a" to="/" class="nav-link title-nav" active-class="active" exact>Home</router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" to="/products" class="nav-link title-nav" active-class="active" exact>ABM Productos</router-link>
          </li>

        </ul>
        <div class="navbar-nav">
          <router-link tag="a" to="/profile" class="nav-link login" active-class="active" exact>{{user.firstName}} {{user.lastName}}</router-link>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {

    }
  },
    props: ['user']
}
</script>

<style>
.active{
  font-weight: bold;
  color: red !important;
}
</style>
