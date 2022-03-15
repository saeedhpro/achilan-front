// import axios from "axios";

export const state = () => ({
  applications: [],
  usagesProducts:[],
  typesProducts:[],
})

export const mutations = {

  setApplications(state, applications) {
    state.applications = applications
  },
  setUsagesProducts(state, usagesProducts) {
    state.usagesProducts = usagesProducts
  },
  setTypesProducts(state, typesProducts) {
    state.typesProducts = typesProducts
  },
}

export const actions = {

  getApplications(context) {
    return this.$axios.get("/usages")
      .then((res) => {
        if (res.status === 401) {
          throw new Error('Bad credentials')
        } else {
          context.commit('setApplications', res.data.data)
          return Promise.resolve(res.data)
        }
      })
      .catch(err => {
        return Promise.reject(err)
      })
  },
  getUsagesProducts(context , id) {
    return this.$axios.get(`usages/${id}/products`)
      .then((res) => {
        if (res.status === 401) {
          throw new Error('Bad credentials')
        } else {
          context.commit('setUsagesProducts', res.data)
          return Promise.resolve(res.data)
        }
      })
      .catch(err => {
        return Promise.reject(err)
      })
  },
  getTypesProducts(context , id) {
    return this.$axios.get(`/categories/${id}/products`)
      .then((res) => {
        if (res.status === 401) {
          throw new Error('Bad credentials')
        } else {
          context.commit('setTypesProducts', res.data)
          console.log(res.data , 'setTypesProducts')
          return Promise.resolve(res.data)
        }
      })
      .catch(err => {
        return Promise.reject(err)
      })
  },
  createusage(context , data) {
    return this.$axios.post('/usages' , data)
      .then((res) => {
        if (res.status === 401) {
          throw new Error('Bad credentials')
        } else {
          return Promise.resolve(res.data)
        }
      })
      .catch(err => {
        return Promise.reject(err)
      })
  },

}

export const getters = {

  getApplications(state) {
    return state.applications
  },
  getUsagesProducts(state) {
    return state.usagesProducts
  },
  getTypesProducts(state) {
    return state.typesProducts
  },
}
