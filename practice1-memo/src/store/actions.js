import axios from 'axios';

const memoAPICore = axios.create({
	baseURL: 'http://localhost:8000/api/memos',
});

export function fetchMemos({ commit }) {
	memoAPICore.get('/').then(res => {
		commit('FETCH_MEMOS', res.data);
	});
}

export default {
	fetchMemos,
};
