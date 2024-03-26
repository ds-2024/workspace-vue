import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
    state() {
        return {
            authUser: null,
            token: null 
        };
    },
    mutations: { //메소드 쓰는 자리
        setAuthUser(state, payload){
            state.authUser = payload;
        },
        setToken(state, payload){
            state.token = payload;
        },
        setAuthName(state, payload){
            state.authUser.name = payload;

        }
    },
    plugins: [ /* 자동매칭시스템 */
        createPersistedState({
            paths: ['authUser', 'token']
        })
    ]
});