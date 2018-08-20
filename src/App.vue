<template>
  <div>
    <router-view> </router-view>
  </div>
</template>

<script>
import Home from './Home.vue'
import Header from './components/Header.vue'

export default {
  data () {
    return {

    }
  },
  components:{
    appHome:Home,
    appHeader:Header
  }
}

</script>

<style>

</style>
