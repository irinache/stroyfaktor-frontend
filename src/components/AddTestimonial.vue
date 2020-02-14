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
					<div class="col-md-12 add-block">
						<div class="text">
							Ваша оценка:
						</div>
						<div class="rating">
							stars
						</div>
						<form>
							<textarea name="question" placeholder="Напишите ваш отзыв">						
							</textarea>
							<router-link to="/testimonials" class="bordered-button brdr-btn-main-color">
								Назад
							</router-link>
							<input type="submit" value="Отправить отзыв" class="solid-button">
						</form>
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
				
								
			}	
		}
	}
</script>

<style lang="less" scoped>
@import '../assets/styles/index.less';
textarea{
	margin-bottom: 30px;
	padding: 13px 17px;
	width: 100%;
	background-color: transparent;
	border: 1px solid @dark-bg;
	color: @dark-bg;
}
textarea:focus{
  outline: none;
  background-color: rgba(0,0,0, 0.02);
}
textarea{
	height: 200px;
	resize: none;
}
.text{
	font-size: 18px;
}
.add-block{
	background-color: @light_text;
	width: 100%;
	padding: 30px;
	padding-bottom: 70px;
}
.rating{
	margin-bottom: 40px;
	margin-top: 20px;
}
.solid-button{
	width: 250px;
	padding: 14px 0;	
	background-color: @main_color;
	text-align: center;
	color: @light_text;
	font-weight: bold;
	font-size: 16px;
	line-height: 20px;
	margin-bottom: 15px;
	display: inline-block;
	border: none;
	float: right;
}
.bordered-button{
	width: 250px;
	padding: 14px 0;
	text-align: center;
	font-weight: bold;
	font-size: 16px;
	line-height: 20px;
	max-width: 250px;
	display: inline-block;	
	float: left;
}
.brdr-btn-main-color{
	border: 1px solid @main_color;
	color: @main_color;	
}	
</style>