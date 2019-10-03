<template>
	<div id="app">
		<app-header :memo-count="memoCount"></app-header>
		<memo-app @change="updateMemoCount"></memo-app>
	</div>
</template>

<script>
import AppHeader from './components/AppHeader';
import MemoApp from './components/MemoApp';

export default {
	name: 'App',
	data() {
		return {
			memoCount: 0,
		};
	},
	methods: {
		updateMemoCount(count) {
			this.memoCount = count;
		},
	},
	components: {
		AppHeader,
		MemoApp,
	},
};
</script>

<style>
@import 'reset.css';
</style>
