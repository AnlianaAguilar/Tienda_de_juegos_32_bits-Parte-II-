import Vue from 'vue'
import Vuex from 'vuex'
import juegos from './juegos'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    juegos
  },
  getters: {
    // countGames: state=>{
    //   return state.juegos.length
    // },
    countGames: state=>{
      return state.juegos.reduce((total, juego)=>{
        return total + parseInt(juego.stock)
      },0)
    }

  },
  mutations: {
    REMOVE_GAMES:(state, id)=>{
      let index = state.juegos.findIndex((jue)=>jue.codigo==id)
      state.juegos.splice(index,1)
    }
  },
  actions: {
    removeGame:({commit}, id)=>{
      commit('REMOVE_GAMES', id)
    }
  },
  modules: {
  }
})
