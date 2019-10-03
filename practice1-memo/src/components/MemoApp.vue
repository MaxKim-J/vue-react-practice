<template>
	<div class="memo-app">
		<memo-form v-on:addMemo="addMemo"></memo-form>
		<ul class="memo-list">
			<memo
				v-for="memo in memos"
				:key="memo.id"
				:memo="memo"
				@deleteMemo="deleteMemo"
				@updateMemo="updateMemo"
			></memo>
		</ul>
	</div>
</template>

<script>
import MemoForm from './MemoForm';
import Memo from './Memo';
import axios from 'axios';

const memoAPICore = axios.create({
	baseURL: 'http://localhost:8000/api/memos',
});

export default {
	name: 'MemoApp',
	components: {
		MemoForm,
		Memo,
	},
	data() {
		return {
			memos: [],
		};
	},
	methods: {
		updateMemo(payload) {
			const { id, content } = payload;
			const targetIndex = this.memos.findIndex(v => v.id === id);
			const targetMemo = this.memos[targetIndex];
			memoAPICore.put(`/${id}`, { content }).then(() => {
				this.memos.splice(targetIndex, 1, { targetMemo, content });
			});
		},
		deleteMemo(id) {
			const targetIndex = this.memos.findIndex(v => v.id === id);
			// 특정 메모 객체애 대한 삭제요청
			memoAPICore.delete(`/${id}`).then(() => {
				// 요청 때린 후 memo에서도 삭제
				this.memos.splice(targetIndex, 1);
			});
			this.$emit('change', this.memos.length);
		},
		addMemo(payload) {
			// 에이피아이로 올려받은 데이터 post방식 전달
			memoAPICore.post('/', payload).then(res => {
				// 결과값 memos에 푸시
				this.memo.push(res.data);
			});
			this.$emit('change', this.memos.length);
		},
		// api에서는 로컬 스토리지 사용하지 않음
		// storeMemo() {
		// 	const memosToString = JSON.stringify(this.memos);
		// 	localStorage.setItem('memos', memosToString);
		// },
	},
	// created 훅 - 삼항 연산자를 통해 로컬스토리지의 데이터 memos를 초기화함
	// 컴포넌트의 초기화에 필요한 데이터를 외부 app에서 요청해서 받아와야 하는 경우
	// 실행 타이밍 가장 빠른 created 훅에서 데이터를 받아옴
	created() {
		// api를 사용할때는 로컬스토리지를 사용할 필요가 없다
		// this.memos = localStorage.memos ? JSON.parse(localStorage.memos) : [];
		memoAPICore.get('/').then(res => {
			//받아온 데이터를 data의 memos에 저장한다
			this.memos = res.data;
		});
	},
};
</script>

<style>
.memo-list {
	padding: 20px 0;
	margin: 0;
}
</style>
