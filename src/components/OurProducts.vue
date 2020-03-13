<template>
		<section id="photo-gallery" class="block">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
							<h2 class="text-uppercase text-center">
								Наша продукция
							</h2>
					</div>
					<div class="col-lg-9 col-sm-7 mb-5">
						<div class="slide-to-show" id="slide-to-show">
							<transition name="fade">
								<img :src="require('../assets/images/' + current_img.url)" :key="current_img.url" v-on:load="onLoaded" v-show="loaded" class="slide-to-show" id="slide-to-show" alt="">
							</transition>
						</div>
					</div>
					<div class="col-lg-3 col-sm-5 mb-5">
						<div id="production-slider">
							<div class="wrapper">
								<div class="slides" id="production-slides" >							
									<img v-for="img in images" v-bind:key="img.id" @click="showCurrent(img)" :src="require('../assets/images/' + img.url)" class="production-slide" :class="{current:img.isCurrent}" alt="">
								</div>							
							</div>
							<div class="control-container">
								<div id="prev" class="prev control" @click="shiftSlide(-1)"> Назад </div>
								<div id="next" class="next control" @click="shiftSlide(1)"> Вперед </div>
							</div>
						</div>						
					</div>
				</div>
			</div>			
		</section>	
</template>

<script>
	export default{
		data(){
			return{							
				items:[],
				posInitial: null,				
				slides:[],
				slidesLength: null,
				slideSize: null,
				firstSlide: null,
				lastSlide: null,
				cloneFirst: null,
				cloneLast: null,
				index: 0,
				allowShift: true,
				loaded: false,				
				images:[
					{
						id: 0,
						url: "about-pic-1.jpg",
						isCurrent: false
					},
					{
						id: 1,
						url: "about-pic-2.jpg",
						isCurrent: false
					},
					{
						id: 2,
						url: "about-pic-3.jpg",
						isCurrent: false
					},
					{
						id: 3,
						url: "slide1.jpg",
						isCurrent: false
					},
					{
						id: 4,
						url: "slide2.jpg",
						isCurrent: false
					}
				],
				current_img: null,				
			}
		},
		methods:{
			onLoaded() {
				this.loaded = true;
			},
			shiftSlide(dir) {
				this.unsetCurrent();

				this.items.classList.add('shifting');					
				if (this.allowShift) {

					this.posInitial = this.items.offsetTop; 					

					for (var i = 0; i < this.images.length; i++) {
						if(this.images[i].id == this.current_img.id){
							if (dir == 1) {
								if(i != (this.images.length - 1)){
									this.current_img = this.images[i + 1]; 
									break;  
								}
								else if (i == (this.images.length - 1)){
									this.current_img = this.images[0]; 
									break; 
								}
								
							} else if (dir == -1) {
								if(i != 0){
									this.current_img = this.images[i - 1];
									break; 
								}   
								else if (i == 0){
									this.current_img = this.images[this.images.length - 1]; 
									break; 
								} 
							}
						}
					}
					if (dir == 1) {
						this.items.style.top = (this.posInitial - this.slideSize) + "px";
						this.index++;      
					} else if (dir == -1) {
						this.items.style.top = (this.posInitial + this.slideSize) + "px";
						this.index--;      
					}
				}					
				this.allowShift = false;
			},
			checkIndex (){
				this.items.classList.remove('shifting');
				if (this.index == -1) {
					this.items.style.top = -(this.slidesLength * this.slideSize) + "px";
					this.index = this.slidesLength - 1;
				}
				if (this.index == this.slidesLength) {
					this.items.style.top = -(1 * this.slideSize) + "px";
					this.index = 0;
				}				
				this.allowShift = true;
			},
			slide(){
				this.slides = this.items.getElementsByClassName('production-slide'),				
				this.slidesLength = this.slides.length,
				this.slideSize = this.items.getElementsByClassName('production-slide')[0].offsetHeight + 30,
				this.firstSlide = this.slides[0],	
							
				this.lastSlide = this.slides[this.slidesLength - 1],
				this.secondSlide = this.slides[1],
				this.cloneFirst = this.firstSlide.cloneNode(true),
				this.cloneSecond = this.secondSlide.cloneNode(true),
				this.cloneLast = this.lastSlide.cloneNode(true)				
				
				this.items.appendChild(this.cloneFirst);
				this.items.appendChild(this.cloneSecond);
				this.items.insertBefore(this.cloneLast, this.firstSlide);				
			
				this.items.addEventListener('transitionend', this.checkIndex);
			},
			showCurrent(img){				
				this.current_img = img;
				this.unsetCurrent();
				img.isCurrent = true;
			},
			unsetCurrent(){
				for (var i = 0; i < this.images.length; i++) {
					this.images[i].isCurrent = false;
				}
			}			
		},
		beforeMount(){
			this.current_img = this.images[0];
		},
		mounted(){		
			this.items = document.getElementById('production-slides');
			this.slide();
		}
	}	
</script>

<style lang="less" scoped>
	@import '../assets/styles/index.less';

	.wrapper{
		overflow: hidden;
		position: relative;
		height: 400px;
	}
	.slides{
		display: flex;
		flex-direction: column;
		position: relative;
		left: 0;
		top: -200px;
		height:  10000px;

	}
	.production-slide{
		height: 170px;
		margin-bottom: 30px;
		width: 100%;
		background-color: @medium-bg;
		transition: all 1s;
		position: relative;
		justify-content: center;
		cursor:pointer;
		object-fit: cover;
	}
	.control-container{
		display: flex;
		justify-content: space-between;
		margin-top: 40px;
	}
	.control{
		padding: 15px;
		width: 110px;
		text-align: center;
		color: @light_text;
		font-weight: bold;
		background-color: @main_color;
		transition: 0.4s;
		cursor:pointer;
	}
	.control:hover{
		background-color: @hover_main_color;
		transition: 0.4s;
	}
	.slides.shifting {
		transition: top .2s ease-out;
	}
	.slide-to-show{
		object-fit: cover;
		width: 100%;
		height: 497px;
		overflow: hidden;
	}
	.current{
		padding: 7px;
	}
	@media(max-width: 575px){
		.wrapper{
			visibility: hidden;
			height: 0;
		}
		.control-container{			
			margin-top: 0px;
		}
	}

	//animation
	.fade-enter-active, .fade-leave-active {
		transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to {
		opacity: 0;
	}
</style>