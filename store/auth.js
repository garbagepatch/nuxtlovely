import Cookies from 'js-cookie'

export const state = () => {}

export const mutations = {
  setUser(state, user){
    state.user = user
    Cookies.set('user', state)
  }
}
