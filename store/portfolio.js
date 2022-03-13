// import axios from "axios";

export const state = () => ({
  portfolios: [],
})

export const mutations = {

  setPortfolios(state, portfolios) {
    state.portfolios = portfolios
  },
}

export const actions = {
  getPortfolios(context) {
    return this.$axios.get('/portfolios')
      .then((res) => {
        if (res.status === 401) {
          throw new Error('Bad credentials')
        } else {
          context.commit('setPortfolios', res.data.data)
          return Promise.resolve(res.data)
        }
      })
      .catch(err => {
        return Promise.reject(err)
      })
  },
 }

export const getters = {

  getPortfolios(state) {
    return state.portfolios
  },
}
