//import axios from "axios";

export const state = () => ({
  product: null,
  products : null
})

export const mutations = {

  setProduct(state, product) {
    state.product = product
  },
  setProducts(state, products) {
    state.products = products
  },
}


export const actions = {
  saveProduct(context , data) {
    return this.$axios
      .post(`/products`, data)
      .then( (response)=> {
        if (response.status === 401) {
          throw new Error('Bad credentials')
        } else {
          return Promise.resolve(response.data)
        }
      })
      .catch(error=> {
        return Promise.reject(error)
      });
  },
  getProduct(context , slug) {
    return this.$axios
      .get(`/products/${slug}`)
      .then( (response)=> {
        if (response.status === 401) {
          throw new Error('Bad credentials')
        } else {
          context.commit('setProduct', response.data)
          console.log(response , 'setProduct')
          return Promise.resolve(response.data)
        }
      })
      .catch(error=> {
        return Promise.reject(error)
      });
  },
  getProducts(context) {
    return this.$axios.get('/products')
      .then((res) => {
        if (res.status === 401) {
          throw new Error('Bad credentials')
        } else {
          context.commit('setProducts', res.data.data)
          console.log(res.data.data , 'setProducts')
          return Promise.resolve(res.data)
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
  getProducts(state) {
    return state.products
  },
}
