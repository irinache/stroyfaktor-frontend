<template>
	<div>
		<Header/>	
		<section>
			<div class="image">				
			</div>
			<div class="block">
				<div class="container">
					<div class="row">
						<div class="col-md-6"></div>
						<div class="col-md-6">
							<h2 class="text-uppercase text-center">
								Восстановление пароля
							</h2>
							<div id="step-1" v-show="step==1">
								<form action="" autocomplete="off">		
									<label class="text">Введите номер телефона и мы вышлем код для восстановления пароля</label>					
									<input type="text" name="phone" placeholder="Номер телефона" >								
									<div class="button" @click="showNextStep">Отправить</div>			
								</form>
								<div class="center">
									<router-link to="/login" class="link">Назад</router-link>
								</div>	
							</div>
							<div id="step-2"  v-show="step==2">
								<form action="" autocomplete="off">		
									<label class="text">Введите код для восстановления пароля</label>					
									<input type="number" name="number" placeholder="Код" >								
									<div class="button" @click="showNextStep">Отправить</div>						
								</form>
								<div class="center">
									<router-link to="/login" class="link">Назад</router-link>
								</div>	
							</div>	
							<div id="step-3"  v-show="step==3">
								<form action="" autocomplete="off">		
									<label class="text">Придумайте новый пароль</label>					
									<input type="password" name="password" placeholder="Новый пароль" >	
									<input type="password" name="password" placeholder="Повторите пароль" >								
									<div class="button" @click="showNextStep">Сохранить</div>						
								</form>
								<div class="center">
									<router-link to="/login" class="link">Назад</router-link>
								</div>	
							</div>													
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
		data(){
			return{
				step: 1,
			}
		},
		methods:{
			showNextStep() {
				++this.step;			
			},
		}
	}
</script>

<style lang="less" scoped>
@import '../assets/styles/index.less';
input{
	margin-bottom: 20px;
	padding: 13px 17px;
	width: 85%;
	background-color: transparent;
	border: 1px solid @dark-bg;
	color: @dark-bg;
}
input:focus{
  outline: none;
  background-color: rgba(255,255,255, 0.1);
}
.button{
	background-color: @main_color;
	color: @light_text;
	border: none;
	font-weight: bold;
	transition: 0.4s;
	width: 60%;	
	margin: 40px auto 0 auto;
	padding: 14px 0;
}
.button:hover{
	background-color: @hover_main_color;
	transition: 0.4s;
}	
form{
	text-align: center;
}
.link{
	color: @main_color;
	width: 85%;
	margin: 0 auto;
	text-align: right;	
	font-weight: bold;	
}
.image{
	background: url("../assets/images/forgot-password-img.png");
	position: absolute;
	width: 50%;
	height:100%;
	background-size: cover;
}
.center{	
	text-align: center;
	margin-top: 20px;
}
section{
	position: relative;
	min-height: 820px;
}
.text{
	margin-bottom: 20px;
}
</style>