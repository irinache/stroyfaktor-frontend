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
								Регистрация
							</h2>
							<form action="" autocomplete="off" @submit.prevent="submit">		
								<div class="err-field">
									<div v-if="$v.name.$error">
										<span class="error" v-if="!$v.name.required">Укажите имя. </span>
										<span class="error" v-if="!$v.name.minLength">Имя слишком короткое. </span>
										<span class="error" v-if="!$v.name.onlyLetters">Имя может содержать только буквы. </span>
									</div>
								</div>					
								<input type="text" name="name" v-model.trim="$v.name.$model" placeholder="Имя" class="light-input">
								<div class="err-field">
									<div v-if="$v.secname.$error">
										<span class="error" v-if="!$v.secname.required">Укажите отчество. </span>
										<span class="error" v-if="!$v.secname.onlyLetters">Отчество может содержать только буквы. </span>
									</div>
								</div>	
								<input type="text" name="secname" v-model.trim="$v.secname.$model" placeholder="Отчество" class="light-input">
								<div class="err-field">
									<div v-if="$v.surname.$error">
										<span class="error" v-if="!$v.surname.required">Укажите фамилию. </span>
										<span class="error" v-if="!$v.surname.onlyLetters">Фамилия может содержать только буквы. </span>
									</div>
								</div>	
								<input type="text" name="surname" v-model.trim="$v.surname.$model" placeholder="Фамилия" class="light-input">
								<div class="err-field">
									<div v-if="$v.phone.$error">
										<span class="error" v-if="!$v.phone.required">Укажите номер телефона. </span>
										<span class="error" v-if="!$v.phone.mustBePhoneNum">Неправильный формат номера. </span>
									</div>
								</div>	
								<input type="text" name="phone" v-model.trim="$v.phone.$model" placeholder="Телефон" class="light-input">
								<div class="err-field">
									<div v-if="$v.email.$error">
										<span class="error" v-if="!$v.email.required">Укажите электронную почту. </span>
										<span class="error" v-if="!$v.email.email">Неправильный формат электронной почты. </span>
									</div>
								</div>	
								<input type="email" name="email" v-model.trim="$v.email.$model" placeholder="Email" class="light-input">
								<div class="err-field">
									<div v-if="$v.password.$error">
										<span class="error" v-if="!$v.password.required">Укажите новый пароль. </span>
										<span class="error" v-if="!$v.password.minLength">Пароль слишком короткий. </span>
									</div>
								</div>	
								<input type="password" name="password" v-model.trim="$v.password.$model" placeholder="Пароль" class="light-input">
								<div class="err-field">
									<div v-if="$v.password_confirm.$error">
										<span class="error" v-if="!$v.password_confirm.required">Повторите пароль. </span>
										<span class="error" v-if="!$v.password_confirm.sameAsPassword">Пароль не совпадает. </span>
									</div>
								</div>	
								<input type="password" name="password_confirm" v-model.trim="$v.password_confirm.$model" placeholder="Повторите пароль" class="light-input">		
								<input type="submit" value="Зарегистрироваться" class="button solid-button">				
							</form>
							<div class="center">
								Есть аккаунт? <router-link to="/login" class="link">Войти</router-link>
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
	import { required, minLength, helpers, email, sameAs } from 'vuelidate/lib/validators'
	
	const mustBePhoneNum = helpers.regex('mustBePhoneNum', /^(\+38)?0\d{3}\d{2}\d{2}\d{2}$/)
	const onlyLetters = helpers.regex('onlyLetters', /^[a-zA-Zа-яА-ЯёЁ]*$/)

	export default{
		components: {	
			Header,					
			Footer,
		},
		data(){
			return{
				name: "",
				secname: "",
				surname: "",
				phone: "",
				email: "",	
				password: "",
				password_confirm: "",										
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
			name: {
				required,	
				onlyLetters,	
				minLength: minLength(3),		
			},
			secname: {
				required,	
				onlyLetters,			
			},
			surname: {
				required,	
				onlyLetters,			
			},
			phone: {
				required,	
				mustBePhoneNum,			
			},
			email: {
				required,	
				email,			
			},
			password: {
				required,				
				minLength: minLength(5),			
			},
			password_confirm: {
				required,				
				sameAsPassword: sameAs('password'),			
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
	background: url("../assets/images/registration.png");
	position: absolute;
	width: 45%;
	height:100%;
	background-size: cover;
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
</style>