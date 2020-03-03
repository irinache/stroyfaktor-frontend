<template>
	<div>
		<Header class="solid-header"/>	
		<div class="slider-block">
			<div class="solid-field">				
			</div>
			<div class="slider ">
				<div class="slide showing">
				</div>
				<div class="slide">
				</div>
				<div class="slide">	
				</div>
				<div class="blackout">
				</div>				
			</div>			
			<div class="container front">
				<div class="row">
					<div class="col-md-12">						
						<header class="transparent-header">
							<router-link to="/" class="logo">				
							</router-link>
							<nav>
								
									<ul>
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
										<li>											
											<router-link to="/cart" class="cart icon"><span class="login-text">Корзина</span></router-link>
										</li>									
									</ul>
																	
							</nav>							
						</header>
					</div>
				</div>			
			</div>		
			<div class="slider-block">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<div class="text-block">
								<h4>Вас приветствует</h4>
								<h1 class="text-uppercase">Строй фактор</h1>
								<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do et dolore eiusmod tempor incididunt ut labore et dolore magna aliqua incididunt.
								</p>						
								<router-link class="button solid-button" to="/categories">Перейти к  покупкам</router-link>												
							</div>
							<div class="slider-nav">	
								<div class="arr left" id="previous" v-on:click="clickPrev">						
								</div>	
								<div class="arr right" id="next" v-on:click="clickNext">						
								</div>													
							</div>
						</div>
					</div>			
				</div>
			</div>			
		</div>
		<div class="line">
		</div>	
	</div>
	
</template>

<script>
	import Header from "../components/Header.vue"
	export default {
		data() {
			return{
				slides: [],
				currentSlide: 0,
				playing: true,
				slideInterval: {},
				show: false,
				is_logged_in: true,
			}			
		},
		components:{
			Header,
		},
		methods:{
			clickNext: function(){
				this.pauseSlideshow();				
				this.nextSlide();
				this.playSlideshow();                
			},
			clickPrev: function(){
				this.pauseSlideshow();				
				this.previousSlide();
				this.playSlideshow();                
			},
			nextSlide: function(){				
				this.goToSlide(this.currentSlide+1);				
			},
			previousSlide: function(){				
				this.goToSlide(this.currentSlide-1);				
			},
			goToSlide: function(n){
				this.slides[this.currentSlide].className = 'slide';
				this.currentSlide = (n+this.slides.length)%this.slides.length;
				this.slides[this.currentSlide].className = 'slide showing';
			},
			pauseSlideshow: function(){				
				this.playing = false;
				clearInterval(this.slideInterval);
			},
			playSlideshow: function(){
				this.playing = true;
				this.slideInterval = setInterval(this.nextSlide,3000);
			}
		},
		mounted(){
			this.slides = document.querySelectorAll('.slide');					
			this.slideInterval = setInterval(this.nextSlide,3000);		}
	}
</script>

<style lang="less" scoped>
@import '../assets/styles/index.less';
.menu, .clear{
	display: none;
	color: @light_text;
}
.slider-block{
	position: relative;
	height: 900px;
}
header{
	margin-top: 20px;
	height: 73px;
	display: flex;
	justify-content: space-between;
	align-items: center;	
}
.front{
	z-index: 9999 !important;
}
.logo{
	background: url("../assets/images/logo.png");
	width: 110px;
	height: 73px;
	float: left;
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
  font-family: Montserrat;
  font-weight: 500;
  cursor: pointer;
}
.container{
	position: relative;
	z-index: 20;
}
.icon{
	display: inline-block;
	width: 36px;
	height: 36px;
	vertical-align: middle;
	transition: 0.4s;
}
.cart{	
	background: url("../assets/images/cart-icon.png") no-repeat;		
}
.cart:hover{
	transition: 0.4s;	
	background: url("../assets/images/cart-icon-hover.png") no-repeat;	
}
.login-text{
		display: none;
	}
.solid-field{
	width: 40%;
	height: 900px;
	background-color: @dark-bg;
	position: absolute;
	top: 0;
	left: 0;
}
.slider{
	width: 60%;
	height: 900px;
	position: absolute;
	top: 0;
	right: 0;
	z-index: 3;	
}
.slide{
	width: 100%;
	height: 100%;
	opacity: 0;
	transition: opacity 2s;
	position: absolute;
	top: 0;
	right: 0;
	z-index: 1;
}
.showing{
	opacity: 1;
	z-index: 2;
}
.blackout{
	background-color: rgba(0, 0, 0, 0.4);
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 3;
}
.slide:nth-of-type(1){
	background: url(../assets/images/slide1.jpg) no-repeat;
	background-size: cover;	
	background-color: rgba(0,0,0, 30%);
}
.slide:nth-of-type(2){
	background: url(../assets/images/slide2.jpg) no-repeat;
	background-size: cover;
}
.slide:nth-of-type(3){
	background: url(../assets/images/slide3.jpg) no-repeat;
	background-size: cover;
}
h4{
	margin-top: 150px;
	text-align: left;
	color: @light_text;
	font-size: 24px;
	line-height: 29px;
	margin-bottom: 10px;
}
h1{
	font-weight: bold;
	color: @light_text;
	text-align: left;
	font-size: 72px;
	line-height: 88px;
	margin-bottom: 32px;
}
p{
	width: 50%;
	margin:0;
	padding: 0;
	color: @light_text;
	font-size: 18px;
	line-height: 33px;
	text-align: left;
	margin-bottom: 80px;
}
.line{
	background-color: @dark-bg;
	height: 50px;
	width: 100%;
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
.slider-nav{
	text-align: right;	
	margin-top: 140px;
}
.arr{	
	display: inline-block;
	height: 60px;
	width: 90px;
	border: 1px solid @light_text;
	margin-left: 10px;
	background: url("../assets/images/arr.png") no-repeat;
	background-position: center;
	transition: 0.4s;
}
.arr:hover{
	transition: 0.4s;
	background-color: rgba(255,255,255, 0.1);
}
.left{
	
}
.right{	
	transform: rotate(180deg);	
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
	//font-weight: bold;
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
.solid-header{
	display: none;
}

@media(max-width: 992px){
	.solid-field{
		width: 50%;
	}
	.slider{
		width: 50%;
	}
	.slider-nav{
		margin-top: 80px;
	}
	header{
		display: none;
	}
	.solid-header{
		display: block;
		z-index: 10;
	}
	.transparent-header{
		display: none;
	}
}
@media(max-width: 767px){
	.solid-field{
		display: none;

	}
	.slider{
		width:100%;
	}
	.blackout{
		background-color: rgba(0, 0, 0, 0.6);
	}
	
	h4{
		margin-top: 100px;
		font-size: 20px;
		margin-bottom: 0;
	}
	h1{
		font-size: 52px;
	}
	p{
		font-size: 18px;
		width: 80%;
	}
	.slider-nav{
		margin-top: 220px;
	}
}
@media(max-width: 466px){
	.slider-nav{
		margin-top: 130px;
	}
	h1, h4, p{
		text-align: center;
		width: 100%;		
	}
}
@media(max-width: 347px){
	.slider-nav{
		width: 100%;
		margin-top: 100px;
	}
}

</style>