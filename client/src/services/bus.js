import Vue from 'vue'

export var bus = new Vue({
  methods:{
    contar(parametro){
        console.log("pasa por nuestro bus");
        this.$emit('contar', parametro);
    }
  }
})
