<template>
    <div v-if="song">
        <v-layout wrap>
            <v-flex xs5>
                <song-data :song="song" />
            </v-flex>

            <v-flex xs6 class="ml-1">
                <you-tube :youtubeId="song.youtubeId" />
            </v-flex>
        </v-layout>

        <v-layout class="mt-5">
            <v-flex xs5 >
                <lyrics :song="song" />
            </v-flex>

            <v-flex xs6 class="ml-1">
                <tab :song="song" />
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import Panel from '@/components/Panel'
    import SongData from './SongData'
    import YouTube from './YouTube'
    import Lyrics from './Lyrics'
    import Tab from './Tab'
    import SongService from '@/services/SongService'

    export default {
        data(){
            return {
                song: null
            }
        },
        components: {
            Panel,
            SongData,
            YouTube,
            Lyrics,
            Tab
        },
        async created(){
            const songId = this.$store.state.route.params.songId
            try{
                const response = await SongService.show(songId)
                this.song = response.data
            }catch(err) {
                console.log(err)
            }
        } 
    }
</script>

<style>
    .song-details{
        text-align: center;
        vertical-align: middle;
    }
    
    .song-album-image{
        width: 50%;
        margin: auto;
        text-align:center;
    }

</style>
