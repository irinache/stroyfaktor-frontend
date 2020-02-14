<template>
	<div>
		<Header/>
		<div class="block medium-bg">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<h2 class="text-uppercase text-center">
							История заказов
						</h2>
					</div>
				</div>	
				<div class="row">
					<div class="col-md-12">
						<div class="text-center" v-show="empty">
							<div class="text">
								Вы не совершали заказов.
							</div>
							<router-link to="/categories" class="solid-button">
								Начать покупки
							</router-link>
						</div>
						<div v-show="!empty">
							<div class="order" v-for="order in orders" v-bind:key="order.id">
								<div class="clearfix">
									<div class="text float-left">
										<b>Заказ #4578,</b> 2 сентября 2019 20:26
									</div>	
									<div class="status">
										В обработке
									</div>									
								</div>
								<div class="items">
									<div class="item" v-for="item in order.items" v-bind:key="item.id">
										<img class="item-img align-top" src="../assets/images/card-img.png" alt="">
										<div class="main-info align-top">
											<h4>{{item.name}}</h4>
											<div class="text">Цена: {{item.price}}  грн</div>
										</div>
										<div class="count align-top text">
											{{item.count}} кв.м
										</div>
										<div class="cost">
											{{item.cost}} грн
										</div>
									</div>	
								</div>
								<div class="sum">
									Итого: {{order.sum}}	грн
								</div>	
								<table>
									<tr>
										<td>
											<h4>Информация о получателе:</h4>
											<div class="table-text">Сергей Викторович Петров</div>
											<div class="table-text">+380665699480</div>
											<div class="table-text">serge@gmail.com</div>
										</td>
										<td>
											<h4>Способ доставки:</h4>
											<div class="table-text">Новая почта</div>
											<div class="table-text">Отделение №23</div>
											<div class="table-text">г. Днепр</div>
										</td>
										<td>
											<h4>Способ оплаты:</h4>
											<div class="table-text">на карту</div>
											<h4>Комментарий:</h4>
											<div class="table-text">Lorem ipsum dolor sit amet</div>
										</td>
									</tr>
								</table>																
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
				orders: [
				{
					id: 1,
					items: [
					{
						id: 1,
						name: "Металлочерепица Арад",
						price: 226,
						count: 100,	
						cost: 0				
					},
					{
						id: 2,
						name: "Металлочерепица Арад",
						price: 300,
						count: 50,	
						cost: 0				
					},
					{
						id: 2,
						name: "Металлочерепица Арад",
						price: 300,
						count: 50,	
						cost: 0				
					}
					],	
					sum: 0,		
				},	
				{
					id: 2,
					items: [
					{
						id: 1,
						name: "Металлочерепица Арад",
						price: 226,
						count: 100,	
						cost: 0				
					},
					{
						id: 2,
						name: "Металлочерепица Арад",
						price: 300,
						count: 50,	
						cost: 0				
					}
					],	
					sum: 0,		
				},				
				]								
			}	
		},
		methods:{
			countCosts: function(order){
				for(let i = 0; i < order.items.length; i++){
					order.items[i].cost = order.items[i].count*order.items[i].price;					
				}
			},
			countSum: function(order){				
				for(let i = 0; i < order.items.length; i++){
					order.sum += order.items[i].cost;
				}
			}			
		},
		mounted(){
			for(let i = 0; i < this.orders.length; i++){				
				this.countCosts(this.orders[i]);	
									
			}
			for(let i = 0; i < this.orders.length; i++){				
					
				this.countSum(this.orders[i]);						
			}			
		}
	}
</script>

<style lang="less" scoped>
@import '../assets/styles/index.less';
.order{
	padding: 20px;
	background-color: @light_text;
	margin-bottom: 30px;
}
.text{
	font-size: 18px;		
}
.status{
	font-size: 18px;	
	float: right;
}
.items{
	margin-top: 20px;
	margin-bottom: 20px;
}
.item{
	padding: 20px 0;
}
.main-info{
	display: inline-block;
	width: 35%;
}
.item-img{
	width: 100px;
	height: 100px;
	margin-right: 20px;
}
h4{
	margin-top: 0;
	margin-bottom: 20px;
}
.count{
	display: inline-block;
	width: 25%;
	text-align: center;
}
.cost{
	display: inline-block;
	float: right;	
}
.sum{
	font-size: 18px;
	font-weight: bold; 
	text-align: right;
}
table{
	margin-top: 30px;
}
td{
	vertical-align: top;
	padding-right: 40px;
}
.table-text{
	font-size: 18px;
	margin-bottom: 15px;
}
</style>