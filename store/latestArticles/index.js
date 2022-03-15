// import axios from "axios";

export const state = () => ({
    articles: [],
    article: null,
    categories: []
})

export const mutations = {

    setArticles(state, articles) {
        state.articles = articles
    },
    setArticle(state, article) {
        state.article = article
    },
    setCategories(state, categories) {
        state.categories = categories
    },
}

export const actions = {
    getArticles(context) {
        return this.$axios.get('/articles')
            .then((res) => {
                if (res.status === 401) {
                    throw new Error('Bad credentials')
                } else {
                    context.commit('setArticles', res.data.data)
                    return Promise.resolve(res.data)
                }
            })
            .catch(err => {
                return Promise.reject(err)
            })
    },
    getArticle(context, slug) {
        return this.$axios.get(`/articles/${slug}`)
            .then((res) => {
                if (res.status === 401) {
                    throw new Error('Bad credentials')
                } else {
                    context.commit('setArticle', res.data.data)
                    return Promise.resolve(res.data)
                }
            })
            .catch(err => {
                return Promise.reject(err)
            })
    },

    deleteArticle(context, slug) {
        return this.$axios.delete(`/articles/${slug}`)
            .then((res) => {
                if (res.status === 401) {
                    throw new Error('Bad credentials')
                } else {
                    console.log(res, 'Delete Article')
                    return Promise.resolve(res.data)
                }
            })
            .catch(err => {
                return Promise.reject(err)
            })
    },

    createBlog(context, data) {
        return this.$axios.post('/articles', data)
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
    updateBlog(context, id) {
        return this.$axios.put(`/articles/${id}`, data)
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
    getCategories(context) {
        return this.$axios.get('/categories')
            .then((res) => {
                if (res.status === 401) {
                    throw new Error('Bad credentials')
                } else {
                    context.commit('setCategories', res.data.data)
                    console.log(res.data.data, 'setCategories')
                    return Promise.resolve(res.data)
                }
            })
            .catch(err => {
                return Promise.reject(err)
            })
    },
    uploadImage(context, loginData) {

        return this.$axios.post('/upload', loginData)
            .then((res) => {
                if (res.status === 401) {
                    throw new Error('Bad credentials')
                } else {
                    return Promise.resolve(res.data.data)
                }
            })
            .catch((err) => {
                return Promise.reject(err)
            })
    },
}

export const getters = {

    getArticles(state) {
        return state.articles
    },
    getArticle(state) {
        return state.article
    },
    getCategories(state) {
        return state.categories
    },
}
