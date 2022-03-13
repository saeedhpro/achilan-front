// import axios from "axios";

export const state = () => ({


})

export const mutations = {

}

export const actions = {

  getSearch(context, route) {
    return this.$axios.get(`${route}`)
      .then((res) => {
        if (res.status === 401) {
          throw new Error('Bad credentials')
        } else {
          return Promise.resolve(res.data.data)
        }
      })
      .catch(err => {
        return Promise.reject(err)
      })
  },
}

export const getters = {

}
