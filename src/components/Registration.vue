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
								<input type="text" name="name" placeholder="Имя" >
								<input type="text" name="secname" placeholder="Отчество" >
								<input type="text" name="surname" placeholder="Фамилия" >
								<input type="text" name="phone" placeholder="Телефон" >
								<input type="email" name="email" placeholder="Email" >
								<input type="password" name="password" placeholder="Пароль">
								<input type="password" name="password" placeholder="Повторите пароль">		
								<input type="submit" value="Зарегистрироваться" class="button">				
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
				
			}
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
	color: @light_text;
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
	margin-top: 40px;
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
	background: url("../assets/images/registration.png");
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
}
</style>