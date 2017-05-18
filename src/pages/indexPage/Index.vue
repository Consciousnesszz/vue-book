<template>
	<div id="index">
		<div class="title">
			<h2>欢迎你, {{  }}</h2>
		</div>
		<div class="side-box">
			<SideNav></SideNav>
		</div>
		<div class="table-box">
			<MySelect></MySelect>
			<MyTable></MyTable>
		</div>
	</div>
</template>
<script>
	import SideNav from './components/SideNav.vue'

	import MySelect from './components/MySelect.vue'
	import MyTable from './components/MyTable.vue'
	
	export default {
		components: {
			SideNav,
			MySelect,
			MyTable
		}
	}
</script>
<style lang='sass'>
	#index {
		width: 100%;
		height: 100%;
		padding: 20px;
		box-sizing: border-box;
		.side-box {
			width: 20%;
			height:100%;
			float: left;
		}
		.table-box {
			width:75%;
			height:100%;
			float: left;
		}
	}
</style>