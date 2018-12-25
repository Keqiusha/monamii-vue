import Vue from 'vue'
import Vuex from 'vuex'
import request from './assets/js/request'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            token: ''
        }
    },
    mutations: {
        SET_USER(user) {
            state.user = user
        },
        CLEAR_USER() {
            state.user = {}
        }
    },
    actions: {
        Login({commit}, userInfo) {
            return new Promise((resolve, reject) => {
                request({
                    url: '/login',
                    method: 'post',
                    params: {
                        account: userInfo.account,
                        password: userInfo.password
                    }
                }).then((response) => {
                    commit('SET_USER', response)
                    resolve(response)
                })
            })
        },
        LogOut({commit}) {
            commit('CLEAR_USER')
        }
    },
    getters: {
        user: state => {
            return state.user;
        }
    }

})
