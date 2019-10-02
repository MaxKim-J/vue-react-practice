<!--메모 데이터와 1대1로 대응하는 컴포넌트-->

<template>
	<li class="memo-item">
		<strong>{{ memo.title }}</strong>
		<p>{{ memo.content }}</p>
		<button type="button" @click="deleteMemo">삭제하기</button>
	</li>
</template>

<script>
export default {
	name: 'Memo',
	props: {
		memo: {
			type: Object,
		},
	},
	methods: {
		deleteMemo() {
			const id = this.memo.id;
			this.$emit('deleteMemo', id);
		},
	},
};
</script>

<style></style>
