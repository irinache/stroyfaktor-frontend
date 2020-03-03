<template>
	<div>	
		<Header/>
		<section class="block medium-bg">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="message-box">
							<h2 class="text-center">Заказ не был отправлен!</h2>
							<div class="image">
						
							</div>
							<p class="text-center mb-4">Произошла ошибка. Ваш заказ не был отправлен. <br>Попробуйте еще раз.</p>
							<a @click="$router.go(-1)" class="button brdr-btn-main-color">Назад</a>												
						</div>						
					</div>
				</div>
			</div>			
		</section>
		<Footer/>
	</div>
</template>

<script>
	import Header from "../components/Header.vue"
	import Footer from "../components/Footer.vue"
	export default{
		components: {	
			Header,				
			Footer,
		},
	}
</script>

<style lang="less" scoped>
@import '../assets/styles/index.less';
.message-box{
	background-color: white;
	padding: 40px;
	width: 65%;
	margin: 0 auto;
	padding-bottom: 70px;
}
.button{	
	margin: 0 auto;
}
.image{
	background: url('../assets/images/cross_img.png') no-repeat;
	background-size: contain;
	width: 150px;
	height: 150px;
	margin-bottom: 30px;
	margin-right: auto;
	margin-left: auto;
}
@media(max-width: 768px){
	.message-box{		
		width: 100%;		
	}
	.image{
		width: 120px;
		height: 120px;
	}
}
	
</style>