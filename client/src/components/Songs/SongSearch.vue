<template>
    <panel title = "Seach" class="mb-5">
		<v-text-field
			v-model="search"
			label="search"
		></v-text-field>
    </panel>
</template>

<script>
	import _ from 'lodash'
    export default {
    	data(){
    		return {
    			search: ''
    		}
    	},
    	watch: {
    		search: _.debounce(function(value){
    			if(value != ""){
    				this.$router.push({name: 'songs', query: { search: value }})
    			}else{
    				this.$router.push({name: 'songs'})
    			}
    		}, 700)
    	}

    }
</script>

<style>
    
</style>
