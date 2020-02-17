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
							<form action="" autocomplete="off">							
								<input type="text" name="name" v-model="name" placeholder="Имя" class="light-input">
								<input type="text" name="secname" v-model="secname" placeholder="Отчество" class="light-input">
								<input type="text" name="surname" v-model="surname" placeholder="Фамилия" class="light-input">
								<input type="text" name="phone" v-model="phone" placeholder="Телефон" class="light-input">
								<input type="email" name="email" v-model="email"  placeholder="Email" class="light-input">
								<input type="password" name="password" v-model="password" placeholder="Пароль" class="light-input">
								<input type="password" name="password_confirm" v-model="password_confirm" placeholder="Повторите пароль" class="light-input">		
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