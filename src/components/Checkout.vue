<template>
	<div>
		<Header/>
		<div class="block medium-bg">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<h2 class="text-uppercase text-center">
							Оформление заказа
						</h2>
					</div>
				</div>	
				<div class="row">
					<div class="col-md-8 block-margin">
						<div class="bg-block">
							<form autocomplete="off">
								<h4>
									Информация о получателе:
								</h4>
								<input type="text" name="name" placeholder="Имя">
								<input type="text" name="secname" placeholder="Отчество">
								<input type="text" name="surname" placeholder="Фамилия">
								<input type="text" name="phone" placeholder="Номер телефона">
								<input type="teemailxt" name="email" placeholder="Email">
								<h4>
									Способ доставки:
								</h4>
								<CustomSelect :options="['Новая почта', 'Delivery', 'самовывоз']" :bordered="true" class="select-pos"/>
								<div v-show="nova_poshta">
									<CustomSelect :options="['В отделении', 'Адресная доставка']" :bordered="true" class="select-pos"/>
									<CustomSelect :options="['Днепр', 'Киев', 'самовывоз']" :bordered="true" class="select-pos" placeholder="Выберите город"/>
									<CustomSelect :options="['Отделение №1', 'Отделение №2', 'Отделение №3']" :bordered="true" class="select-pos" placeholder="Выберите город"/>
								</div>							
								<h4>
									Способ оплаты:
								</h4>
								<CustomSelect :options="['На карту', 'Наложенный платеж']" :bordered="true" class="select-pos"/>
								<h4>
									Комментарий:
								</h4>
								<textarea name="comment" placeholder="Напишите комментарий">								
								</textarea>
								<div class="text-right">
									<div class="bordered-button brdr-btn-main-color">Назад</div>
									<div class="solid-button">Подтвердить заказ</div>
								</div>							
							</form>
						</div>												
					</div>
					<div class="col-md-4 block-margin">
						<div class="bg-block">
							<h4>
								Заказ:
							</h4>
							<div class="item" v-for="item in items" v-bind:key="item.id">
								<img src="../assets/images/card-img.png" alt="">
								<div class="d-inline-block">
									<h4>{{item.name}}</h4>	
									<div class="info-time">
										{{item.time}}
									</div>
									<div class="price">
										Цена: {{item.cost}}  грн
									</div>
								</div>
							</div>
							<div class="text">
								К оплате
							</div> 
							<div class="sum">
								{{totalSum}} грн
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
	import CustomSelect from "../components/CustomSelect.vue";
	export default{
		components: {	
			Header,	
			CustomSelect,	
			Footer,
		},
		data(){
			return{
				nova_poshta: true,	
				items: [
				{
					id: 1,
					name: "Металлочерепица Арад",
					time: "Под заказ, 7 дней",
					cost: 226,
				},
				{
					id: 1,
					name: "Металлочерепица Арад",
					time: "Под заказ, 7 дней",
					cost: 226,
				},
				{
					id: 1,
					name: "Металлочерепица Арад",
					time: "Под заказ, 7 дней",
					cost: 226,
				},
				]						
			}	
		},
		computed:{
			totalSum: function(){
				var sum = 0;
				for (let i = 0; i < this.items.length; i++) {
					sum+=this.items[i].cost
				}
				return sum;
			}
		}
		
	}
</script>

<style lang="less" scoped>
@import '../assets/styles/index.less';
.block-margin{
	padding: 15px;
}
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
.bg-block{
	background-color: @light_text;
	width: 100%;
	padding: 30px;
	padding-bottom: 70px;
}
h4{
	margin-bottom: 25px;
}
input, textarea{
	margin-bottom: 30px;
	padding: 13px 17px;
	width: 100%;
	background-color: transparent;
	border: 1px solid @dark-bg;
	color: @dark-bg;
}
textarea:focus, input:focus{
	outline: none;
	background-color: rgba(255,255,255, 0.1);
}
textarea{
	height: 134px;
	resize: none;
}
.select-pos{
	width: 100%;
	margin-bottom: 30px;
}
.item{
	vertical-align: top;
	margin-bottom: 30px;
	.text{
		vertical-align: top;
	}
	img{
		width: 90px;
		height: 90px;
		display: inline-block;
		margin-right: 20px;
		vertical-align: top;
	}
	h4{
		margin-top: 0;
		margin-bottom: 5px;
		display: inline-block;
		width: 180px;
	}
}
.text{
	font-size: 18px;
	display: inline-block;
	float: left;
	line-height: 29px;
}
.sum{
	font-weight: bold;
	font-size: 24px;
	display: inline-block;
	float: right;
	line-height: 29px;
}

</style>