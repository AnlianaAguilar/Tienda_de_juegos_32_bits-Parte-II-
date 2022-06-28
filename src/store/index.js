import Vue from 'vue'
import Vuex from 'vuex'
import juegos from './juegos'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    juegos
  },
  getters: {
    countGames: state=>{
      return state.juegos.length
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
