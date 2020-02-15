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
							<form action="" autocomplete="off">							
								<input type="email" name="email" v-model="email" placeholder="Email" class="light-input">
								<router-link to="/forgot-password" class="link d-block">Забыли пароль?</router-link>
								<input type="password" name="password" v-model="password" placeholder="Пароль" class="light-input">		
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
	export default{
		components: {	
			Header,					
			Footer,
		},
		data(){
			return{
				email: "",	
				password: "",
			}
		}
	}
</script>

<style lang="less" scoped>
@import '../assets/styles/index.less';
form{
	text-align: center;
}
input{
	width: 85%;
}
.button{
	margin-top: 30px;
	margin-left: auto;
	margin-right: auto;
}
.image{
	background: url("../assets/images/login-img.png");
	background-size: cover;
	position: absolute;
	width: 50%;
	height:100%;
}
.center{
	margin-top: 60px;
	text-align: center;
}
section{
	position: relative;
	min-height: 820px;
}
</style>