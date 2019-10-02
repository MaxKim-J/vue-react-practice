<template>
	<div class="memo-form">
		<form @submit.prevent="addMemo">
			<fieldset>
				<div>
					<input
						type="text"
						class="memo-from__title-form"
						placeholder="메모 제목을 입력해 주세요"
						v-model="title"
					/>
					<textarea
						class="memo-form__content--form"
						placeholder="메모 내용을 입력해 주세요"
						v-model="content"
					></textarea>
					<button type="reset">리셋</button>
				</div>
				<button type="submit">등록하기</button>
			</fieldset>
		</form>
	</div>
</template>

<script>
export default {
	name: 'MemoForm',
	data() {
		return {
			title: '',
			content: '',
		};
	},
	methods: {
		resetFields() {
			(this.title = ''), (this.content = '');
		},
		addMemo() {
			// 비구조화 할당 구문을 이용하여 변수를 선언한다
			const { title, content } = this;
			// 데이터의 고유한 식별자를 생성
			const id = new Date().getTime();
			//밸리데이션 코드
			const isEmpty = title.length <= 0 || content.length <= 0;
			if (isEmpty) {
				return false;
			}
			// addMemo 이벤트를 발생시키고 payload로 사용자가 입력한 데이터
			this.$emit('addMemo', { id, title, content });
			// 부모 컴포넌트에 데이터를 전파한 후 데이터를 다시 원상태로 초기화
			this.resetFields();
		},
	},
};
</script>

<style scope>
.memo-form input {
	display: block;
}
</style>
