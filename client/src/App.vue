<template>
  <div id="app">
    <v-app>
      <v-content>
        <Navbar />
        <v-container fluid>
          <router-view/>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components:{
    Navbar
  },
  created(){
    //console.log(this.$store)
  }
}
</script>

<style>

</style>
