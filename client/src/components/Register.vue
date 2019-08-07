<template>
  <div class="register">
    <input 
      type="email" 
      placeholder="email" 
      v-model="email">
    <br>
    <input 
      type="password" 
      v-model="password" 
      placeholder="password">
      <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService"
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register(){
      let response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response)

    }  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
