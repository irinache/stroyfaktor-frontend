<template>
	<div>
		<Header/>
		<div class="block medium-bg">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<h2 class="text-uppercase text-center">
							Добавить отзыв компании
						</h2>
					</div>
				</div>	
				<div class="row">
					<div class="col-md-12">
						<div class="test-block">
							<div class="text">
								Ваша оценка:
							</div>
							<div class="rating">
								<star-rating v-model="rating" :show-rating="false"></star-rating>
							</div>
							<form>
								<textarea name="testimonial" v-model="testimonial" class="light-input" placeholder="Напишите ваш отзыв">						
								</textarea>
								<div class="clearfix">
									<router-link to="/testimonials" class="button brdr-btn-main-color float-left">
										Назад
									</router-link>
									<input type="submit" value="Отправить отзыв" class="button solid-button float-right">
								</div>							
							</form>
						</div>						
					</div>
				</div>					
			</div>
		</div>
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
		data(){
			return{
				rating: 0,
				testimonial: "",								
			}	
		}
	}
</script>

<style lang="less" scoped>
@import '../assets/styles/index.less';
textarea{
	margin-bottom: 30px;	
	width: 100%;
	height: 200px;	
}
.text{
	font-size: 18px;
}
.test-block{
	background-color: @light_text;
	width: 100%;
	padding: 30px;
	padding-bottom: 40px;
}
.rating{
	margin-bottom: 40px;
	margin-top: 20px;
}
@media(max-width: 767px){
	.button{		
		margin-bottom: 20px;
	}
}
</style>