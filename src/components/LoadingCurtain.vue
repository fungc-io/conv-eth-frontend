<template>
	<div class="loading-state"><span>Loading data...</span></div>
</template>

<script>
export default {
	name: "LoadingCurtain",
};
</script>
<style lang="scss" scoped>
.loading-state {
	z-index: 999;
	position: fixed;
	background-color: rgba(0, 0, 0, 0.5);
	height: 100vh;
	width: 100vw;
	top: 0px;
	left: 0px;
	display: flex;
	justify-content: center;
	align-items: center;
	span {
		background-color: white;
		border-radius: 5px;
		text-align: center;
		width: 90%;
		max-width: 400px;
		max-height: 100px;
		padding: 20px 10px;
		font-size: 1.5rem;
	}
}
</style>
