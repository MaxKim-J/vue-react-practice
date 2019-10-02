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
		deleteMemo(id) {
			const targetIndex = this.memos.findIndex(v => v.id === id);
			this.memos.splice(targetIndex, 1);
			this.storeMemo();
		},
		addMemo(payload) {
			// 올려받은 데이터를 먼저 컴포넌트 내부 데이터에 추가
			this.memos.push(payload);
			// 내부 데이터를 문자열로 변환하고, 로컬 스토리지에 저장함
			this.storeMemo();
		},
		storeMemo() {
			const memosToString = JSON.stringify(this.memos);
			localStorage.setItem('memos', memosToString);
		},
	},
	// created 훅 - 삼항 연산자를 통해 로컬스토리지의 데이터 memos를 초기화함
	// 컴포넌트의 초기화에 필요한 데이터를 외부 app에서 요청해서 받아와야 하는 경우
	// 실행 타이밍 가장 빠른 created 훅에서 데이터를 받아옴
	created() {
		this.memos = localStorage.memos ? JSON.parse(localStorage.memos) : [];
	},
};
</script>

<style>
.memo-list {
	padding: 20px 0;
	margin: 0;
}
</style>
