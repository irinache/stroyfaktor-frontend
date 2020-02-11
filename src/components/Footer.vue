<template>
	<footer class="dark-bg">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="logo">			
					</div>
					<div class="text">
						Компания ООО “СТРОЙ ФАКТОР”, 2020
					</div>
				</div>
			</div>	
		</div>		
	</footer>
</template>

<script>
	export default{

	}
</script>

<style lang="less" scoped>
@import '../assets/styles/index.less';
.logo{
	background: url("../assets/images/logo.png");
	width: 110px;
	height: 73px;
	float: left;
	display: inline-block;
}
footer{
	padding: 20px;
}
.text{
	color: @light_text;
	font-size: 18px;
	margin-left: 30px;
	display: inline-block;
	line-height: 73px;
}
</style>