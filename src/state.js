import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
	strict: false,
	state: {
		account: {
			username: 'admin',
			password: 'admin'
		},
		isLogin: false,
		books: []
	},
	mutations: {
		setUser(state, {user, pass}) {
			state.account.username = user;
			state.account.password = pass;
		},
		login(state) {
			state.isLogin = true;
			console.log(state);
			//router.push('/index');
		},
		resetUser(state) {
			state.account.username = '';
			state.account.password = '';
		},
		exit (state){
			state.isLogin = false;
		},
		updateBook(state, bookList) {
			state.books = bookList;
		}
	},
	actions: {
		testAccount ({ commit }){
			fetch('../dist/account.json').then(function(res){
				return res.json();
			}).then(function(data){
				commit('')
			})
		},
		getBooks({ commit }) {
			fetch('../dist/bookInfo.json').then(function(res) {
				return res.json();
			}).then(function(data) {
				commit('updateBook', data);
			})
		}

	}
})

export default store