<template>
    <v-layout wrap>
        <v-flex xs4>
            <panel title="Create a Song">
                <div class="pl-4 pr-4 pt-2 pb-2">
                  <v-text-field
                    v-model="song.title"
                    label="title"
                    :rules="[required]"
                  ></v-text-field>
                  
                  <v-text-field
                    v-model="song.artist" 
                    label="artist"
                    :rules="[required]"
                  ></v-text-field>

                  <v-text-field
                    v-model="song.genre" 
                    label="genre"
                    :rules="[required]"
                  ></v-text-field>

                  <v-text-field
                    v-model="song.album" 
                    label="album"
                    :rules="[required]"
                  ></v-text-field>

                  <v-text-field
                    v-model="song.albumImage" 
                    label="albumImage"
                    :rules="[required]"
                  ></v-text-field>

                  <v-text-field
                    v-model="song.youtubeId" 
                    label="youtubeId"
                    :rules="[required]"
                  ></v-text-field>
                </div>
            </panel>
        </v-flex>

        <v-flex xs8>
            <panel title="Song Data" class="ml-4">
                <div class="pl-4 pr-4 pt-2 pb-2">
                    <v-textarea
                        v-model="song.lyrics"
                        label="lyrics"
                        rows="7"
                        row-height="30"
                        :rules="[required]"
                    ></v-textarea>

                    <v-textarea
                        v-model="song.tab" 
                        label="tab"
                        rows="7"
                        row-height="30"
                        :rules="[required]"
                    ></v-textarea>

                    <v-alert type="error" v-text = "error" v-if = "error" dark></v-alert>
                    <v-btn class="cyan mb-2 mt-1" @click="createSong" dark x-large>Create Song</v-btn>
                </div>
            </panel>
            
        </v-flex>
    </v-layout>
</template>

<script>
    import SongService from '@/services/SongService'
    export default {
        data(){
            return {
                song: {
                    title: null,
                    artist: null,
                    genre: null,
                    album: null,
                    albumImage: null,
                    youtubeId: null,
                    lyrics: null,
                    tab: null
                },
                error: null,
                required: value => !!value || "Required"
            }
        },

        methods: {
            async createSong() {
                let isFilled = Object.keys(this.song).every(value => !!this.song[value])
                if(!isFilled) return

                try{
                    await SongService.create(this.song)
                    this.$router.push({name: 'songs'})
                }catch(err){
                    console.log(err)
                } 
            }
        }

    }
</script>

<style scoped>
</style>
