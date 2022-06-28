<template>
    <div>
        <h1 class="title">Tienda 32 Bits</h1>
        <game-list></game-list>
        <game-count></game-count>
    </div>    
</template>

<script>
import GameList from '@/components/GameList.vue'
import GameCount from '@/components/GameCount.vue'

export default {
    name: 'games-component',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {},
    // watch: {},
    components: {
        'game-list':GameList,
        'game-count':GameCount
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    .title{
        font-size:40px,
    }
</style>