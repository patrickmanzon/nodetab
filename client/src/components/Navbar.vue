<template>
	<div>
	    <v-toolbar fixed class="cyan" dark>
	      <v-toolbar-title class="mr-4">
	      	<span class="home" @click="redirect({name: 'home'})">NodeTab</span>
	      </v-toolbar-title>
		  <v-toolbar-items>
		  	<v-btn text>Home</v-btn>
		  	<v-btn text @click="redirect({name: 'songs'})">Browse</v-btn>
		  </v-toolbar-items>
	      <v-spacer></v-spacer>
	
	      <v-toolbar-items>
	        <v-btn text @click="redirect({name: 'login'})" v-if="!isSignedIn">Login</v-btn>
	        <v-btn text @click="redirect({name: 'register'})" v-if="!isSignedIn">Sign Up</v-btn>
	      </v-toolbar-items>
	    </v-toolbar>
  </div>
</template>

<script>
	export default{
		methods: {
			redirect(route){
				this.$router.push(route)
			}
		},
		computed:{
			isSignedIn(){
				return this.$store.state.isSignedIn
			}
		}
	}
</script>

<style scoped>
	.home{
		cursor: pointer;
	}
</style>