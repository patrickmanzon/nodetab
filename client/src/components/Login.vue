<template>
  <v-layout wrap>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            v-model="email"
            label="email"
          ></v-text-field>
          
          <v-text-field
            v-model="password" 
            label="password"
            type = "password"
          ></v-text-field>
           
          <v-alert type="error" v-text = "error" v-if = "error" dark></v-alert>

          <v-btn class="cyan" @click="login" dark>Login</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService"
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login(){
      try{
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        //console.log(response)
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)

      }catch(error){
        console.log(error)
        this.error = error.response.data.error
      }
    }  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
