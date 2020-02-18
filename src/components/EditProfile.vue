<template>
	<div>
		<Header/>
		<div class="block medium-bg">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<h2 class="text-uppercase text-center">
							Редактировать профиль
						</h2>
					</div>
				</div>	
				<div class="row">
					<div class="col-md-12">
						<div class="info-block">
							<form action="" autocomplete="off" @submit.prevent="submit">
								<div class="row">
									<div class="col-md-12">
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
									</div>									
								</div>	
								<div class="clearfix">
									<input type="submit" value="Сохранить" class="button solid-button float-right">
									<router-link to="/profile" class="button brdr-btn-main-color float-left">
										Отмена
									</router-link>
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
	import { required, minLength, helpers, email } from 'vuelidate/lib/validators'
	
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
		}		
	}
</script>

<style lang="less" scoped>
@import '../assets/styles/index.less';
.info-block{
	background-color: @light_text;
	width: 70%;
	padding: 30px;
	margin: 0 auto;
	padding-bottom: 50px;
	text-align: center;
}
input{
	width: 100%;
}
.button{
	margin-top: 30px;
}
@media(max-width: 991px){
	.button{		
		width: 100%;	
		margin-top: 0;	
	}
	.solid-button{
		margin-top: 15px;
	}
}
@media(max-width: 484px){
	.info-block{		
		width: 90%;		
	}
}
</style>