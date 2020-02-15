<template>
	<footer class="dark-bg">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<header>
						<router-link to="/" class="logo">				
						</router-link>
						<ul class="menu">
							<li><router-link to="/">Главная</router-link></li>
							<li><a href="/#about_us">О нас</a></li>
							<li><router-link to="/categories">Товары и услуги</router-link></li>
							<li><router-link to="/testimonials">Отзывы</router-link></li>
							<li><a href="/#contacts">Контакты</a></li>
							<li>
								<router-link to="/login" class="login">									
								</router-link>
							</li>
						</ul>
					</header>
				</div>
			</div>	
		</div>		
	</footer>
</template>

<script>
	export default{

	}
</script>

<style lang="less" scoped>
@import '../assets/styles/index.less';
.logo{
	background: url("../assets/images/logo.png");
	width: 110px;
	height: 73px;
	float: left;
	display: inline-block;
	cursor: pointer;
}
ul{
	padding: 0;
	margin: 0;
	float: right;	
}
li {
	margin-left: 20px;
	display: inline;
  list-style-type: none;
  color: @light_text;
  font-family: Montserrat Medium;
  cursor: pointer;
}
a{
	color: @light_text;
	transition: 0.4s;
}
a:hover{
	text-decoration: none;
	color: @main_color;
	transition: 0.4s;
}
header{
	margin-top: 20px;
	margin-bottom: 20px;
	height: 73px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.login{	
	display: inline-block;
	background: url("../assets/images/login_icon.png") no-repeat;
	background-size: contain;
	width: 36px;
	height: 36px;
	vertical-align: middle;
	transition: 0.4s;	
}
.login:hover{
	transition: 0.4s;	
	background: url("../assets/images/login_icon_hover.png") no-repeat;	
}
</style>