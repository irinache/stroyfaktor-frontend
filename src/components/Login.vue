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
								Вход
							</h2>
							<form action="" autocomplete="off" @submit.prevent="submit">	
								<div class="err-field">
									<div v-if="$v.email.$error">
										<span class="error" v-if="!$v.email.required">Укажите вашу электронную почту. </span>	
										<span class="error" v-if="!$v.email.email">Неправильный формат электронной почты. </span>
									</div>
								</div>						
								<input type="text" name="email" v-model.trim="$v.email.$model" placeholder="Email" class="light-input">
								<router-link to="/forgot-password" class="link d-block">Забыли пароль?</router-link>
								<div class="err-field">
									<div v-if="$v.password.$error">
										<span class="error" v-if="!$v.password.required">Укажите ваш пароль. </span>	
										<span class="error" v-if="!$v.password.minLength">Пароль слишком короткий. </span>
									</div>
								</div>
								<input type="password" name="password" v-model.trim="$v.password.$model" placeholder="Пароль" class="light-input">		
								<input type="submit" value="Войти" class="button solid-button">				
							</form>
							<div class="center">
								Нет аккаунта? <router-link to="/registration" class="link">Регистрация</router-link>
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
	import { required, email, minLength } from 'vuelidate/lib/validators'	


	export default{
		components: {	
			Header,					
			Footer,
		},
		data(){
			return{
				email: "",	
				password: "",
				submitStatus: null,
			}
		},
		methods:{
			submit() {      
				this.$v.$touch()
				if (this.$v.$invalid) {
					this.submitStatus = 'ERROR'
				} 
				else {
				// submit logic 
				}
			},
	
		},
		validations: {
			email: {
				required,
				email,							
			},
			password: {
				required,	
				minLength: minLength(5),			
			},	
		}		
	}
</script>

<style lang="less" scoped>
@import '../assets/styles/index.less';
input{
	width: 100%;
}
.button{
	margin-top: 30px;
	margin-left: auto;
	margin-right: auto;
}
.image{
	background: url("../assets/images/login-img.jpg");
	background-size: cover;
	position: absolute;
	width: 45%;
	height:100%;
}
.center{
	margin-top: 60px;
	text-align: center;
}
section{
	position: relative;	
}
@media(max-width: 767px){
	.image{
		display: none;
	}
}
.link{
	margin-bottom: -22px;
}
</style>