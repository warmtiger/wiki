import { make } from 'vuex-pathify'

/* global siteConfig */

const state = {
  theme: {
    dark: siteConfig.darkMode
  }
}

export default {
  namespaced: true,
  state,
  mutations: make.mutations(state)
}