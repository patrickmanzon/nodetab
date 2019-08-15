<template>
    <panel title="Songs">
        <v-btn 
            slot="button" 
            class="cyan accent-2" 
            fab 
            large 
            absolute 
            right
            @click = "redirect({name: 'create-song'})"
        >
            <v-icon>add</v-icon>
        </v-btn>
        <div class="songs" v-for="song in songs" :key="song.id">
            <v-layout row>
                <v-flex xs6>
                    <div class="song-details pt-10 mb-5">
                        <h2>{{ song.title }}</h2>
                        <h3>{{ song.artist }}</h3>
                        <h4>{{ song.album }}</h4>
                        <v-btn class="cyan" dark large @click="redirect({
                            name:'view-song', 
                            params: {
                                songId: song.id 
                            }
                        })">View</v-btn>   
                    </div>
                </v-flex>
                <v-flex xs6>
                    <div class="song-album-image">
                        <img :src="song.albumImage" :alt="song.albumImage">
                    </div>
                </v-flex>
            </v-layout>
        </div>
    </panel>
</template>

<script>
    import SongService from '@/services/SongService'
    export default {
        props: ['songs'],
        methods: {
            redirect(route) {
                this.$router.push(route)
            }
        },
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
