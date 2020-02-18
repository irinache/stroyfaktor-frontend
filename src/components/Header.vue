<template>
	<div class="dark-bg">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<header>
						<div class="logo-container">
							<router-link to="/" class="logo">				
							</router-link>
						</div>
						<nav>
								<transition name = "fade" mode="out-in">
									<div class="menu" v-if="!show" @click="show = !show" key="menu">										
									</div>
									<div class="clear" v-else @click="show = !show" key="clear">										
									</div>
								</transition>
								<transition name = "fade">
									<ul v-if="show">
										<li>
											<router-link to="/">Главная</router-link>
										</li>
										<li> 
											<transition name="bounce"><a href="/#about_us">О нас</a></transition>
										</li>
										<li>									
											<div class="dropdown">
												<router-link to="/categories" class="drop-btn">Товары и услуги</router-link>
												<div class="dropdown-content">
													<a href="#">Металлочерепица</a>
													<a href="#">Фальцевая кровля</a>
													<a href="#">Битумная черепица</a>
													<a href="#">Водосточные системы</a>
													<a href="#">Профнастил</a>
													<a href="#">Подкровельные пленки</a>
													<a href="#">Раздвижные решетки на окна и двери</a>
													<a href="#">Вентиляционные выходы</a>
													<a href="#">Кровельные уплотнители для труб</a>
													<a href="#">Композитная черепица</a>
													<a href="#">FAKRO</a>
													<a href="#">VELUX</a>								
												</div>
											</div>
										</li>
										<li>
											<router-link to="/testimonials">Отзывы</router-link>
										</li>
										<li>
											<a href="/#contacts">Контакты</a>
										</li>
										<li v-show="!is_logged_in">
											<router-link to="/login" class="login icon"><span class="login-text">Войти</span></router-link>
										</li>	
										<li v-show="is_logged_in">											
											<router-link v-show="is_logged_in" to="/profile" class="profile icon"><span class="login-text">Профиль</span></router-link>
										</li>	
										<li v-show="is_logged_in">											
											<router-link v-show="is_logged_in" to="/cart" class="cart icon"><span class="login-text">Корзина</span></router-link>
										</li>
										<li v-show="is_logged_in">											
											<router-link v-show="is_logged_in" to="/order_history" class="orders icon"><span class="login-text">История заказов</span></router-link>
										</li>									
									</ul>
								</transition>									
							</nav>	
					</header>
				</div>
			</div>	
		</div>		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				show: true,
				is_logged_in: true,
			}
		},
		created() {
			window.addEventListener("resize", this.onResize);
		},
		destroyed() {
			window.removeEventListener("resize", this.onResize);
		},
		methods:{
			onResize(){
				if(document.documentElement.clientWidth <= 992) {
					this.show = false;
				}
				else{
					this.show = true;
				}
			}
		},
		mounted(){
			this.onResize();
		}
	}
</script>

<style lang="less" scoped>
@import '../assets/styles/index.less';
.logo{
	background: url("../assets/images/logo.png") no-repeat;
	background-size: contain;
	width: 110px;
	height: 73px;
	float: left;
	display: inline-block;
	cursor: pointer;
}
.login-text{
		display: none;
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
.icon{
	display: inline-block;
	width: 36px;
	height: 36px;
	vertical-align: middle;
	transition: 0.4s;
}
.login{	
	background: url("../assets/images/login_icon.png") no-repeat;
}
.profile{	
	background: url("../assets/images/profile-icon.png") no-repeat;		
}
.cart{	
	background: url("../assets/images/cart-icon.png") no-repeat;		
}
.orders{	
	background: url("../assets/images/orders-icon.png") no-repeat;		
}
.orders:hover{
	transition: 0.4s;	
	background: url("../assets/images/orders-icon-hover.png") no-repeat;	
}
.cart:hover{
	transition: 0.4s;	
	background: url("../assets/images/cart-icon-hover.png") no-repeat;	
}
.login:hover{
	transition: 0.4s;	
	background: url("../assets/images/login_icon_hover.png") no-repeat;	
}
.profile:hover{
	transition: 0.4s;	
	background: url("../assets/images/profile-icon-hover.png") no-repeat;	
}

.drop-btn { 
  padding: 15px 0;
  transition: 0.4s;	
}
.dropdown {  
	position: relative;
  display: inline-block;
  z-index: 99;
}
.dropdown-content {
  display: none;
  position: absolute;
  margin-top: 10px;
  background-color: @light_text;
  width: 320px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 99;
  transition: 0.4s;	
}
.dropdown-content:before {
  content: "";
	display: block;
	width: 20px;
	height: 20px;
	margin-top: -20px;
	margin-left: 20px;
  border: 10px solid transparent; 
  border-bottom: 10px solid @light_text; 
}
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  transition: 0.4s;	

}
.dropdown-content a:hover {
	transition: 0.4s;	
	color: @main_color;
}
.dropdown:hover .dropdown-content {
	transition: 0.4s;	
	display: block;
}
.dropdown:hover .drop-btn {
	transition: 0.4s;	
	color: @main_color;
}
.menu, .clear{
	display: none;
	color: @light_text;
}
@media(max-width: 992px){
.dropdown:hover .dropdown-content {
	display: none;
}
.menu, .clear{
	display: block;
	float: right;
	background: url("../assets/images/menu-icon.png") no-repeat;
	background-size: contain;
	background-position: center;
	width: 36px;
	height: 50px;
	
}
.menu:hover, .clear:hover{
	background: url("../assets/images/menu-icon-hover.png") no-repeat;
	background-size: contain;
	background-position: center;
}
.icon, .icon:hover{
	background: none;
	height: auto;
	width: 100%;
}
.login-text{
	display: block;
	text-align: center;
	width: 100%;
}
header{
	display: block;
	height: auto;
}
.logo{		
	width: 90px;
	height: 50px;
	margin-bottom: 20px;	
}
.logo-container{
	width: 100%;	
}
ul{
	width: 100%;
}
li{
	display: block;
	padding: 20px;
	text-align: center;
	margin-left: 0;
}
}
</style>