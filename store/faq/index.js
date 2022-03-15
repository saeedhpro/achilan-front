// import axios from "axios";

export const state = () => ({
  faqs: [],
})

export const mutations = {

  setFaqs(state, faqs) {
    // console.log(faq)
    state.faqs = faqs
  },
}

export const actions = {

  getFaqs(context) {
    return this.$axios.get("/questions")
      .then((res) => {
        if (res.status === 401) {
          throw new Error('Bad credentials')
        } else {
          context.commit('setFaqs', res.data.data)
          console.log(res , 'setFaqs')
          return Promise.resolve(res.data)
        }
      })
      .catch(err => {
        return Promise.reject(err)
      })
  },
  createFaq(context , data) {
    return this.$axios.post('/questions' , data)
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
    return state.faqs
  },
}
