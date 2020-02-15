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
									<img src="../assets/images/card-img.png" alt="">
									<div class="main-info">
										<h4 class="item-name">
											Металлочерепица Арад
										</h4>
										<div class="info-time">
											Под заказ, 7 дней
										</div>
										<div class="price">
											Цена: 226  грн
										</div>									
									</div>								
									<div class="counter align-top d-inline-block">
										<div class="text">
											Количество кв. м.
										</div>
										<div class="minus" @click="decreaseCount(item)">
											-
										</div>
										<input type="number" name="count" class="count" v-model.number="item.count" min="1">
										<div class="plus" @click="increaseCount(item)">
											+
										</div>									
									</div>
									<div class="sum align-top d-inline-block">
										<div class="text">
											Сумма
										</div>
										<h4>
											{{item.sum}} грн
										</h4>									
									</div>
								</div>
								<div class="d-inline-block align-middle text-right cross-container">	
									<div class="cross" @click="deleteItem(item)">
										
									</div>									
								</div>
							</div>
							<div class="buttons">
								<router-link to="/item_list" class="bordered-button brdr-btn-main-color">
									Продолжить покупки
								</router-link>
								<router-link to="/checkout" class="solid-button">
									Оформить заказ
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
				]								
			}	
		},
		methods:{
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
			}
		},
	}
</script>

<style lang="less" scoped>
@import '../assets/styles/index.less';
.text{
	font-size: 18px;
	margin-bottom: 10px;
}
.solid-button{
	width: 250px;
	padding: 14px 0;	
	background-color: @main_color;
	text-align: center;
	color: @light_text;
	font-weight: bold;
	font-size: 16px;
	line-height: 20px;
	margin-top: 20px;
	margin-bottom: 15px;
	display: inline-block;

	margin-left: 30px;
}
.bordered-button{
	width: 250px;
	padding: 14px 0;
	text-align: center;
	font-weight: bold;
	font-size: 16px;
	line-height: 20px;
	max-width: 250px;
	display: inline-block;
	margin-left: 30px;
}
.brdr-btn-main-color{
	border: 1px solid @main_color;
	color: @main_color;	
}
.item{
	padding: 20px;
	background-color: @light_text;
	margin-bottom: 30px;
}
img{
	width: 100px;
	height: 100px;
	margin-right: 25px;
	vertical-align: top;
}
.main-info{
	display: inline-block;
	vertical-align: top;
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
	margin-left: 100px;
	vertical-align: middle;
	//height: 100%;
	//margin-top: auto;
	//margin-bottom: auto;	

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

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance:textfield;
}
.sum{
	margin-left: 100px;
}
.cross{
	margin-left: auto;
	margin-right: 0;
}
.cross-container{
	width: 10%;
}
.info-container{
	width: 90%;
}
.buttons{
	text-align: right;
}
</style>