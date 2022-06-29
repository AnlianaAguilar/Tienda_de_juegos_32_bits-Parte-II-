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
      return state.juegos.reduce((total, juego)=>{
        return total + parseInt(juego.stock)
      },0)
    }
  },
  mutations: {
    REMOVE_STOCK:(state, id)=>{
      state.juegos.forEach(juego => {
        if(juego.codigo==id){
          juego.stock=parseInt(juego.stock)-1
        }
      });
    },

    CHANGE_COLOR:(state, optColor)=>{
      state.juegos.forEach(juego =>{
        if (juego.codigo==optColor.codigo) {//se compra como objeto por que que las opciones estas en un objeto
          juego.color=optColor.value
        }
      })
    },

    ADD_STOCK:(state, id)=>{
      state.juegos.forEach(juego => {
        if(juego.codigo==id){
          juego.stock=parseInt(juego.stock)+1
        }
      })
    }
  },
  actions: {
    removeStock:({commit}, id)=>{
      commit('REMOVE_STOCK', id)
    },

    changeColor:({commit}, optColor)=>{
      commit('CHANGE_COLOR', optColor)
    },

    addStock:({commit}, id)=>{
      commit('ADD_STOCK', id)
    }
  },
  modules: {
  }
})
