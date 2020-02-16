<template>
	<footer class="dark-bg">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="logo-container">
						<router-link to="/" class="logo">				
						</router-link>
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
	background: url("../assets/images/logo.png") no-repeat;
	background-size: contain;
	background-position: center;
	width: 110px;
	height: 73px;
	float: left;
	display: inline-block;
	cursor: pointer;
}
footer{
	padding: 20px;
}
.text{
	color: @light_text;	
	margin-left: 30px;
	display: inline-block;
	line-height: 73px;
}
@media(max-width: 767px){
	footer{
		text-align:center;
	}
	.logo{
		text-align:center;
		float: none;		
		width: 90px;
		height: 50px;
		margin-bottom: 30px;
	}
	.text{
		margin-left: 0px;
		line-height: 35px;
	}
}
</style>