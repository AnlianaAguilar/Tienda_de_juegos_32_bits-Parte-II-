<template>
    <h1>Total: {{countGames}} Juegos</h1>
</template>

<script>

import {mapGetters} from 'vuex'

export default {
    name: 'GameCount',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapGetters(['countGames'])
    },
    //methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    *{
        font-size: 20px;
    }
</style>