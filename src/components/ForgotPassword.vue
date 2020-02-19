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
								<form action="" autocomplete="off" @submit.prevent="submit">		
									<label class="text">Введите номер телефона и мы вышлем код для восстановления пароля</label>	
									<div class="err-field">
										<div v-if="$v.phone.$error">
											<span class="error" v-if="!$v.phone.required">Укажите ваш номер телефона. </span>	
											<span class="error" v-if="!$v.phone.mustBePhoneNum">Неправильный формат номера. </span>
										</div>
									</div>				
									<input type="text" name="phone" v-model.trim="$v.phone.$model" placeholder="Номер телефона" class="light-input">
									<input type="submit" value="Отправить" class="button solid-button">			
								</form>
								<div class="center">
									<router-link to="/login" class="link">Назад</router-link>
								</div>	
							</div>
							<div id="step-2"  v-show="step==2">
								<form action="" autocomplete="off" @submit.prevent="submit_code">		
									<label class="text">Введите код для восстановления пароля</label>	
									<div class="err-field">
										<div v-if="$v.code.$error">
											<span class="error" v-if="!$v.code.required">Укажите код. </span>
											<span class="error" v-if="!$v.code.minLength">Неправильный формат кода. </span>
										</div>
									</div>				
									<input type="text" name="number" placeholder="Код" v-model.trim="$v.code.$model" class="light-input" >
									<input type="submit" value="Отправить" class="button solid-button">						
								</form>
								<div class="center">
									<router-link to="/login" class="link">Назад</router-link>
								</div>	
							</div>	
							<div id="step-3"  v-show="step==3">
								<form action="" autocomplete="off" @submit.prevent="submit_password">		
									<label class="text">Придумайте новый пароль</label>	
									<div class="err-field">
										<div v-if="$v.password.$error">
											<span class="error" v-if="!$v.password.required">Укажите новый пароль. </span>
											<span class="error" v-if="!$v.password.minLength">Пароль слишком короткий. </span>
										</div>
									</div>				
									<input type="password" name="password" placeholder="Новый пароль" v-model.trim="$v.password.$model" class="light-input">	
									<div class="err-field">
										<div v-if="$v.password.$error">
											<span class="error" v-if="!$v.password_confirm.required">Повторите пароль. </span>	
											<span class="error" v-if="!$v.password_confirm.sameAsPassword">Пароль не совпадает. </span>
										</div>
									</div>
									<input type="password" name="password_confirm" placeholder="Повторите пароль" v-model.trim="$v.password_confirm.$model" class="light-input">								
									<input type="submit" value="Сохранить" class="button solid-button">						
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
	import { required, minLength, helpers, requiredIf, sameAs } from 'vuelidate/lib/validators'
	
	const mustBePhoneNum = helpers.regex('mustBePhoneNum', /^(\+38)?0\d{3}\d{2}\d{2}\d{2}$/)

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
				this.step++;				
			},
			submit() {   
				console.log("gf")   
				this.$v.phone.$touch()
				if (this.$v.phone.$invalid) {
					this.submitStatus = 'ERROR'
				} 
				else {
					this.showNextStep();
					console.log("fgfg") 
				// submit logic 
				}
			},
			submit_password(){
				console.log("gf")   
				this.$v.password.$touch()
				if (this.$v.password.$invalid) {
					this.submitStatus = 'ERROR'
				} 
				else {
					this.showNextStep();
					console.log("fgfg") 
				// submit logic 
				}
			},
			submit_code(){
				console.log("gf")   
				this.$v.code.$touch()
				if (this.$v.code.$invalid) {
					this.submitStatus = 'ERROR'
				} 
				else {
					this.showNextStep();
					console.log("fgfg") 
				// submit logic 
				}
			}
	
		},
		computed:{
			isSecondStep(){
				console.log(this.step) 
				console.log(this.step == 2) 
				return this.step == 2
			},
			isThirdStep(){
				console.log(this.step) 
				console.log(this.step == 3)
				return this.step == 3
			},
		},
		validations: {
			phone: {
				required,	
				mustBePhoneNum,			
			},
			code: {
				required: requiredIf('isSecondStep'),		
				minLength: minLength(4),						
			},
			password:{	
				required: requiredIf('isThirdStep'),		
				minLength: minLength(5),
			},
			password_confirm:{	
				required: requiredIf('isThirdStep'),
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
form{
	text-align: center;
}
.button{
	margin-top: 30px;
	margin-left: auto;
	margin-right: auto;
}
.image{
	background: url("../assets/images/forgot-password-img.jpg");
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