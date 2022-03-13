// import axios from "axios";

export const state = () => ({
})

export const mutations = {

}

export const actions = {
  createUsages(context , data) {
    return this.$axios.post('/usages' , data)
      .then((res) => {
        if (res.status === 401) {
          throw new Error('Bad credentials')
        } else {
          // context.commit('setTypesProducts', res.data)
          console.log(res.data , 'setTypesProducts')
          return Promise.resolve(res.data)
        }
      })
      .catch(err => {
        return Promise.reject(err)
      })
  },

}

export const getters = {

  getFaqs(state) {
    return state.faq
  },
}
