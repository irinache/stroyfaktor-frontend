<template>
	<div>
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
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<header>
							<div class="logo">				
							</div>
							<ul class="menu">
								<li>Главная</li>
								<li>О нас</li>
								<li>Товары и услуги</li>
								<li>Отзывы</li>
								<li>Контакты</li>
								<li>
									<div class="login">									
									</div>
								</li>
							</ul>
						</header>
					</div>
				</div>			
			</div>		
			<div class="slider-block">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<div class="text-block">
								<h3>Вас приветствует</h3>
								<h1 class="text-uppercase">Строй фактор</h1>
								<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do et dolore eiusmod tempor incididunt ut labore et dolore magna aliqua incididunt.
								</p>						
								<router-link to="/">Перейти к  покупкам</router-link>													
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
	export default {
		data() {
			return{
				slides: [],
				currentSlide: 0,
				playing: true,
				slideInterval: {}
			}			
		},
		methods:{
			clickNext: function(){
				this.pauseSlideshow();				
				this.nextSlide();
				//setTimeout(this.playSlideshow,3000);                
			},
			clickPrev: function(){
				this.pauseSlideshow();				
				this.previousSlide();
				//setTimeout(this.playSlideshow,3000);                
			},
			nextSlide: function(){				
				this.goToSlide(this.currentSlide+1);				
			},
			previousSlide: function(){
				//this.pauseSlideshow();
				this.goToSlide(this.currentSlide-1);
				//setInterval(this.playSlideshow,3000);
			},
			goToSlide: function(n){
				this.slides[this.currentSlide].className = 'slide';
				this.currentSlide = (n+this.slides.length)%this.slides.length;
				this.slides[this.currentSlide].className = 'slide showing';
			},
			pauseSlideshow: function(){
				//pauseButton.innerHTML = '&#9658;'; // play character
				this.playing = false;
				clearInterval(this.slideInterval);
			},
			playSlideshow: function(){
				//pauseButton.innerHTML = '&#10074;&#10074;'; // pause character
				this.playing = true;
				this.slideInterval = setInterval(this.nextSlide,2000);
			}
		},
		mounted(){
			this.slides = document.querySelectorAll('.slide');					
			this.slideInterval = setInterval(this.nextSlide,3000);		}
	}
</script>

<style lang="less" scoped>
@import '../assets/styles/index.less';
.slider-block{
	position: relative;
	height: 900px;
}
header{
	margin-top: 30px;
	height: 73px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.logo{
	background: url("../assets/images/logo.png");
	width: 110px;
	height: 73px;
	float: left;
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
}
.container{
	position: relative;
	z-index: 99;
}
.login{
	display: inline-block;
	background: url("../assets/images/login_icon.png") no-repeat;
	background-size: contain;
	width: 36px;
	height: 36px;
	vertical-align: middle;
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
	background: url(../assets/images/slide1.png) no-repeat;
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
h3{
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
	font-weight: bold;
	font-size: 18px;
	background-color: @main_color;
	color: @light_text;
	display: block;
	box-sizing: border-box;
	padding: 14px 0;
	width: 270px;
	text-align: center;		
}
a:hover{
	text-decoration: none;
	color: @light_text;
	background-color: @hover_main_color;
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
}
.left{
	
}
.right{	
	transform: rotate(180deg);	
}
</style>