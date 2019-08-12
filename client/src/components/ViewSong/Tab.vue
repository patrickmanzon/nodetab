<template>
    <panel title="Tab">
        <div class="songs">
            <v-layout row>
                <v-flex xs12>
                    <div class="tab">
                        <v-textarea
                            v-model="song.tab"
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
    import Panel from '@/components/Panel'
    export default {
        props: ['song'],
        components:{
            Panel
        }
    }
</script>

<style scoped>
    .tab{
        width: 90%;
        margin: 0 auto;
    }
</style>
