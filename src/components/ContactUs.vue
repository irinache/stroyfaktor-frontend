<template>
	<div class="block dark-bg">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<h2 class="text-uppercase text-center light-text">
						Задайте вопрос продавцу
					</h2>
				</div>
			</div>			
			<form action="" autocomplete="off"  @submit.prevent="submit">
				<div class="row">
					<div class="col-md-6">
						<div class="err-field">
							<div v-if="$v.name.$error">
								<span class="error" v-if="!$v.name.required">Укажите имя. </span>	
								<span class="error" v-if="!$v.name.minLength">Имя слишком короткое. </span>
								<span class="error" v-if="!$v.name.onlyLetters">Имя может содержать только буквы. </span>		
							</div>
						</div>											
						<input type="text" name="name" placeholder="Ваше имя" v-model.trim="$v.name.$model" class="dark-input" >
						<div class="err-field">
						<div v-if="$v.phone_num.$error">
							<span class="error" v-if="!$v.phone_num.required">Укажите номер телефона. </span>	
							<span class="error" v-if="!$v.phone_num.mustBePhoneNum">Неправильный формат номера. </span>	
						</div>
						</div>												
						<input type="text" name="phone" placeholder="Номер телефона" v-model.trim="$v.phone_num.$model" class="dark-input">				
					</div>
					<div class="col-md-6 text-right">
						<div class="err-field">
							<div v-if="$v.question.$error">
								<span class="error" v-if="!$v.question.required">Укажите ваш вопрос.</span>	
							</div>
						</div>
						<textarea name="question" placeholder="Напишите вопрос" class="dark-input" v-model="question"></textarea>
						<input type="submit" value="Отправить" class="button solid-button">
					</div>
				</div>	
			</form> 
		</div>
	</div>
</template>

<script>
	import { required, minLength, helpers } from 'vuelidate/lib/validators'
	
	const mustBePhoneNum = helpers.regex('mustBePhoneNum', /^(\+38)?0\d{3}\d{2}\d{2}\d{2}$/)
	const onlyLetters = helpers.regex('onlyLetters', /^[a-zA-Zа-яА-ЯёЁ]*$/)

	export default{
		data(){
			return{
				name: "",
				phone_num: "",
				question: "",	
				submitStatus: null
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
				minLength: minLength(3),
				onlyLetters,			
			},
			phone_num: {
				required,	
				mustBePhoneNum,			
			},
			question: {
				required				
			}
		}
	}
</script>

<style lang="less" scoped>
@import '../assets/styles/index.less';
input,textarea{
	width: 100%;
}
textarea{
	height: 150px;
}
.button{
	margin-left: auto;
	margin-right: 0;
	margin-top: 20px;
}
.block{
	min-height: unset;
}

</style>