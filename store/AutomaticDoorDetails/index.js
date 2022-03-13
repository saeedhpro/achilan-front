// import axios from "axios";

export const state = () => ({
  type:[],
})

export const mutations = {
  setType(state, type) {
    state.type = type
  },
}

export const actions = {

  getType(context) {
    {
      return this.$axios.get(`/categories?type=product`)
        .then((res) => {
          if (res.status === 401) {
            throw new Error('Bad credentials')
          } else {
            context.commit('setType', res.data)
            return Promise.resolve(res.data)
          }
        })
        .catch(err => {
          return Promise.reject(err)
        })
    }
  }

  }

export const getters = {

  getType(state) {
    return state.type
  },

}
