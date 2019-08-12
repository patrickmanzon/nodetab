<template>
    <panel title="Youtube">
        <div class="songs">
            <v-layout row>
                <v-flex xs12>
                    <div class="youtube">
                        <youtube video-id="youtubeId" player-width="100%" player-height="250" />
                    </div>
                </v-flex>
            </v-layout>
        </div>
    </panel>
</template>

<script>
    import Panel from '@/components/Panel'
    export default {
        props: ['youtubeId'],
        components:{
            Panel
        }
    }
</script>

<style scoped>
    .youtube{
        width: 50%;
        margin: 0 auto;
    }
</style>
