<template>
    <panel :title="song.title">
        <v-btn 
            slot="button" 
            class="cyan accent-2" 
            fab 
            large 
            absolute 
            right
            @click = "redirect({name: 'edit-song', params:{ songId: song.id }})"
        >
            <v-icon>edit</v-icon>
        </v-btn>
        <div class="songs">
            <v-layout row>
                <v-flex xs6>
                    <div class="song-details pt-10 mb-5">
                        <h2>{{ song.title }}</h2>
                        <h3>{{ song.artist }}</h3>
                        <h4>{{ song.genre }}</h4>
                    </div>
                </v-flex>
                <v-flex xs6>
                    <div class="song-album-image">
                        <img :src="song.albumImage" :alt="song.albumImage">
                        <h3>{{ song.album }}</h3>
                    </div>
                </v-flex>
            </v-layout>
        </div>
    </panel>
</template>

<script>
    import Panel from '@/components/Panel'
    export default {
        props: ['song'],
        components:{
            Panel
        },
        methods: {
            redirect(route)
            {
                this.$router.push(route)
            }
        }
    }
</script>

<style>
    
</style>
