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
									<input type="text" name="phone" v-model="phone" placeholder="Номер телефона" class="light-input">								
									<div class="button solid-button" @click="showNextStep">Отправить</div>			
								</form>
								<div class="center">
									<router-link to="/login" class="link">Назад</router-link>
								</div>	
							</div>
							<div id="step-2"  v-show="step==2">
								<form action="" autocomplete="off">		
									<label class="text">Введите код для восстановления пароля</label>					
									<input type="text" name="number" placeholder="Код" v-model="code" class="light-input" >								
									<div class="button solid-button" @click="showNextStep">Отправить</div>						
								</form>
								<div class="center">
									<router-link to="/login" class="link">Назад</router-link>
								</div>	
							</div>	
							<div id="step-3"  v-show="step==3">
								<form action="" autocomplete="off">		
									<label class="text">Придумайте новый пароль</label>					
									<input type="password" name="password" placeholder="Новый пароль" v-model="password" class="light-input">	
									<input type="password" name="password" placeholder="Повторите пароль" v-model="password_confirm" class="light-input">								
									<div class="button solid-button" @click="showNextStep">Сохранить</div>						
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
				phone: "",
				code: "",
				password: "",
				password_confirm: "",
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
	width: 100%;
}
form{
	text-align: center;
}
.button{
	margin-top: 30px;
	margin-left: auto;
	margin-right: auto;
}
.image{
	background: url("../assets/images/forgot-password-img.png");
	position: absolute;
	width: 45%;
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
@media(max-width: 767px){
	.image{
		display: none;
	}
}
</style>