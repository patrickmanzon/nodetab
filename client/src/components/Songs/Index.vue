<template>
    <v-layout wrap v-if="songs">
        <v-flex xs6 offset-xs3>
            <song-search />
            <Songs :songs = "songs" />
        </v-flex>
    </v-layout>
</template>

<script>
    import SongService from '@/services/SongService'
    import Songs from './Songs'
    import SongSearch from './SongSearch'
    export default {
        components: {
            Songs,
            SongSearch
        },
        data(){
            return {
                songs: null
            }
        },
        watch: {
            '$route.query.search' (value) {
                this.fetchSongs(value)
            } 
        },
        methods: {
            redirect(route) {
                this.$router.push(route)
            },
            async fetchSongs(search){
                try{
                    let response = await SongService.index(search)
                    this.songs = response.data
                }catch(err){
                    console.log(err)
                }
            }
        },
        async created(){
            let search = this.$route.query.search
            this.fetchSongs(search)
        }
    }
</script>

<style scoped>
    .song-details{
        text-align: center;
        vertical-align: middle;
    }
    
    .song-album-image{
        width: 50%;
        margin: auto;
    }
</style>
