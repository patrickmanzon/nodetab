<template>
    <panel title="Lyrics">
        <div class="songs">
            <v-layout row>
                <v-flex xs12>
                    <div class="lyrics">
                        <v-textarea
                            v-model="song.lyrics"
                            rows="7"
                            row-height="50"
                        >
                        </v-textarea>
                    </div>
                </v-flex>
            </v-layout>
        </div>
    </panel>
</template>

<script>
    export default {
        props: ['song'],
    }
</script>

<style scoped>
    .lyrics{
        width: 90%;
        margin: 0 auto;
    }
</style>
