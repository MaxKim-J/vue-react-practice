<!--메모 데이터와 1대1로 대응하는 컴포넌트-->

<template>
	<li class="memo-item">
		<strong>{{ memo.title }}</strong>
		<p @dblclick="handleDbClick">
			<template v-if="!isEditing">{{ memo.content }}</template>
			<input
				v-else
				type="text"
				ref="content"
				:value="memo.content"
				@keydown.enter="updateMemo"
			/>
		</p>
		<button type="button" @click="deleteMemo">삭제하기</button>
	</li>
</template>

<script>
export default {
	name: 'Memo',
	data() {
		return {
			isEditing: false,
		};
	},
	props: {
		memo: {
			type: Object,
		},
	},
	methods: {
		updateMemo(e) {
			const id = this.memo.id;
			const content = e.target.value.trim();
			if (content.length <= 0) {
				return false;
			}
			this.$emit('updateMemo', { id, content });
			this.isEditing = false;
		},
		deleteMemo() {
			const id = this.memo.id;
			this.$emit('deleteMemo', id);
		},
		handleDbClick() {
			this.isEditing = true;
			this.$nextTick(() => {
				this.$refs.content.focus();
			});
		},
	},
};
</script>

<style></style>
