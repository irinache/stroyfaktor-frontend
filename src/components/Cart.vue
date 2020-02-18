<template>
	<div>
		<Header/>
		<div class="block medium-bg">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<h2 class="text-uppercase text-center">
							Корзина
						</h2>
					</div>
				</div>	
				<div class="row">
					<div class="col-md-12">
						<div class="text-center" v-show="empty">
							<div class="text">
								В корзине нет товаров.
							</div>
							<router-link to="/categories" class="solid-button ml-0">
								Начать покупки
							</router-link>
						</div>
						<div v-show="!empty">
							<div class="item" v-for="item in items" v-bind:key="item.id">
								<div class="align-middle d-inline-block info-container">
									<div class="img">
										<h4 v-show="h4OnTop" class="item-name">
											Металлочерепица Арад
										</h4>
										<img src="../assets/images/card-img.png" alt="">
									</div>									
									<div class="main-info">
										<h4 v-show="!h4OnTop" class="item-name">
											Металлочерепица Арад
										</h4>
										<div class="info-time">
											Под заказ, 7 дней
										</div>
										<div class="price">
											Цена: 226  грн
										</div>									
									</div>								
									<div class="counter">
										<div class="text">
											Количество кв. м.
										</div>
										<div class="minus" @click="decreaseCount(item)">
											-
										</div>
										<input type="number" name="count" class="count" @blur="calc(item)" onkeyup="this.value=this.value.replace(/^[0]+/,'')" v-model="item.count">
										<div class="plus" @click="increaseCount(item)">
											+
										</div>									
									</div>
									<div class="sum">
										<div class="text">
											Сумма
										</div>
										<h4>
											{{item.sum}} грн
										</h4>									
									</div>
									<div class="cross-container">
										<div class="cross" @click="deleteItem(item)">										
										</div>
									</div>									
								</div>
							</div>
							<div class="buttons clearfix">								
								<router-link to="/checkout" class="button solid-button float-right">
									Оформить заказ
								</router-link>
								<router-link to="/item_list" class="button brdr-btn-main-color float-left">
									Продолжить покупки
								</router-link>
							</div>
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
	export default{
		components: {	
			Header,		
			Footer,
		},
		data(){
			return{
				empty: false,
				items: [
				{
					id: 1,
					count: 1,
					price: 226,
					sum: 226
				},
				{
					id: 2,
					count: 1,
					price: 226,
					sum: 226
				},
				{
					id: 3,
					count: 1,
					price: 229,
					sum: 226
				}
				],
				h4OnTop: false,							
			}	
		},
		created() {
			window.addEventListener("resize", this.onResize);
		},
		updated() {
			this.onResize();
		},
		destroyed() {
			window.removeEventListener("resize", this.onResize);
		},
		methods:{
			onResize(){
				if(document.documentElement.clientWidth <= 471) {
					this.h4OnTop = true;
				}
				else{
					this.h4OnTop = false;
				}
			},
			increaseCount: function(i){
				i.count++;
				i.sum = i.count*i.price;
			},
			decreaseCount: function(i){
				if(i.count>1){					
					i.count--;
					i.sum = i.count*i.price;
				}
			},
			deleteItem:function(i){
				var removeIndex = this.items.map(function(i) { return i.id; }).indexOf(i.id);
				this.items.splice(removeIndex, 1);
			},
			calc:function(i){
				i.sum = i.count*i.price;
			}
		},
		mounted(){
			this.onResize();
		},
	}
</script>

<style lang="less" scoped>
@import '../assets/styles/index.less';
.text{
	margin-bottom: 10px;
}
.item{
	padding: 20px;
	background-color: @light_text;
	margin-bottom: 30px;
}
.img{
	width: 12%;
	display: inline-block;
	vertical-align: top;
}
img{
	width: 100px;
	height: width;
	margin-right: 25px;
	vertical-align: top;
}
.main-info{
	display: inline-block;
	vertical-align: top;
	width: 38%;
}
h4{
	margin-top: 0;
	margin-bottom: 15px;
}
.info-time{
	margin-bottom: 5px;
}
.counter{
	display: inline-block;
	width: 25%;
	vertical-align: top;
}
.minus, .plus, .count{
	padding: 0 25px;
	line-height: 55px;
	display: inline-block;
}
.count{
	background-color: @light_text;
	width: 100px;
	border: none;
	background-color: @medium-bg;
	text-align: center;
}
.minus, .plus{
	background-color: @main_color;
	font-weight: bold;
	color: @light_text;
}
.minus:hover, .plus:hover{
  background-color: @hover_main_color;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type=number] {
  -moz-appearance:textfield;
  margin-bottom: 0;
}
.sum{
	width: 20%;
	vertical-align: top;
	display: inline-block;
}

.cross-container{
	position: absolute;	
	top: calc(50% - 27px);
	right: 20px;
}
.info-container{
	width: 100%;
	position: relative;
}
.buttons{
	text-align: right;
}
@media(max-width: 1199px){
	.img{
		width: 15%;
	}
	.main-info{
		width: 33%;
	}
	.minus, .plus, .count{
		padding: 0 20px;
		line-height: 45px;		
	}
	.sum{
		margin-left: 20px;
	}
}
@media(max-width: 991px){
	.img{
		width: 100px;
	}
	.main-info{
		margin-left: 20px;
		width: calc(100% - 120px);
	}
	.counter{
		width: 50%;
		margin-top: 30px;
		vertical-align: bottom;
	}
	h4{
		margin-bottom: 0;
	}
	.sum{
		margin-top: 30px;
		margin-left: 0;
		text-align: right;
		vertical-align: bottom;
		width: 35%;		
	}
	.price{
		margin: 0;
	}
	.info-time{
		margin-top: 10px;
	}
	.cross-container{	
		right: 0;		
	}
}
@media(max-width: 767px){
	.solid-button{
		margin-bottom: 20px;
	}
}


@media(max-width: 471px){
	.item-name{
		width: 80%;
		text-align: center;
		margin: 0 auto 
	}
	.img{
		text-align: center;		
		width: 100%;
	}
	img{
		margin-right: 0;
		margin-top: 15px;
		width: 150px;
	}
	.main-info{
		text-align: center;
		margin-left: 0;
		width: 100%;
		margin-top: 20px;
	}
	.counter,.sum{
		text-align: center;
		margin: 30px 0;
		width: 100%;
		display: block;
	}
	.cross-container{
		position: absolute;	
		top: -15px;
		right: -15px;	
	}
}
</style>