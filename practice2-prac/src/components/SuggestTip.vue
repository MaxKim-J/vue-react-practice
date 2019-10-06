<template>
	<div class="suggestWrapper">
		<div class="suggestCol1">
			<div class="suggestRect"></div>
		</div>
		<div class="suggestCol2">
			<div class="suggestTitle">나만의 리마인드 레터링 만들기</div>
			<div class="suggestContent">
				나만의 의미 담긴 글로 공간 분위기를 확 바꾸는 마법같은 순간을
				맞이하세요!
			</div>
			<div class="suggestPurchase">지금 바로 구매하기</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SuggestTip',
};
</script>

<style lang="scss">
.suggestWrapper {
	width: 100%;
	height: 240px;
	background-color: #f1f8ff;
	display: flex;
	flex-direction: row;
	align-content: flex-start;
}

.suggestCol1 {
	width: 30%;
	.suggestRect {
		width: 110px;
		height: 110px;
		background-color: #d8d8d8;
		margin: 60px 0px 70px 29px;
	}
}
.suggestCol2 {
	width: 50%;
	display: block;
	.suggestTitle {
		margin-top: 51px;
		font-weight: 500;
		font-size: 24px;
	}
	.suggestContent {
		height: 72px;
		font-weight: 300;
	}
	.suggestPurchase {
		margin-top: 1px;
		font-weight: 300;
	}
}
</style>
