export const state = () => ({
  product: null,


})

export const mutations = {

  setProduct(state, product) {
    // console.log(product)
    state.product = product
  },
}

export const actions = {

  getProduct(context , slug) {
    return this.$axios.get(`/products/${slug}`)
      .then((res) => {
        if (res.status === 401) {
          throw new Error('Bad credentials')
        } else {
          context.commit('setProduct', res.data.data)
          console.log(res , 'setProduct')
          return Promise.resolve(res.data)
        }
      })
      .catch(err => {
        return Promise.reject(err)
      })
  },
  getComments(context , id) {
    return this.$axios.get(`/products/${id}/comments`)
      .then((res) => {
        if (res.status === 401) {
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

  getProduct(state) {
    return state.product
  },
}
