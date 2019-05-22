import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: () => ({
      amigos: []
    }),
    mutations: {
      addAmigo(state, obj) {
        state.amigos.push(obj)
      }
    },
    getters: {
      getAmigos: state => {
        return state.amigos
      }
    }
  })
}

export default store
