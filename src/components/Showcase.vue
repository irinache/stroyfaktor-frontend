<template>
	<div class="block medium-bg">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<h2 class="text-uppercase text-center">
						Витрина
					</h2>
				</div>
			</div>	
			<div class="row">
				<div class="col-md-3 item-margin" v-for="item in items" v-bind:key="item.id">
					<div class="item-card">
						<div class="card-container">
							<h3>
								{{ item.name }}					
							</h3>
							<img class="item-img" src="../assets/images/card-img.png" alt="Изображение товара">
							<div class="info">
								Оптом и в розницу
							</div>
							<div class="info">
								Под заказ, 7 дней
							</div>
							<div class="price">
								от 186 грн/кв.м.
							</div>
							<div class="solid-button">
								Купить
							</div>
							<div class="bordered-button brdr-btn-main-color">
								Перезвоните мне
							</div>
						</div>	
					</div>										
				</div>
			</div>	
			<div class="row">
				<div class="col-md-12">
					<div class="bordered-button brdr-btn-dark-color btn-pos">
						Все товары и услуги
					</div>
				</div>
			</div>		
		</div>	
	</div>	
</template>

<script>
	export default{
		data(){
			return{
				items:
				[
				{
					id: 1,
					name: "Фальцевая кровля",
					img: "",
					price: "от 186 грн/кв.м.",
				},
				{
					id: 2,
					name: "Фальцевая кровля",
					img: "",
					price: "от 186 грн/кв.м.",
				},
				{
					id: 3,
					name: "Фальцевая кровля",
					img: "",
					price: "от 186 грн/кв.м.",
				},
				{
					id: 4,
					name: "Фальцевая кровля",
					img: "",
					price: "от 186 грн/кв.м.",
				},
				{
					id: 5,
					name: "Фальцевая кровля",
					img: "",
					price: "от 186 грн/кв.м.",
				},
				{
					id: 6,
					name: "Фальцевая кровля",
					img: "",
					price: "от 186 грн/кв.м.",
				},
				{
					id: 7,
					name: "Фальцевая кровля",
					img: "",
					price: "от 186 грн/кв.м.",
				},
				{
					id: 8,
					name: "Фальцевая кровля",
					img: "",
					price: "от 186 грн/кв.м.",
				},				
				]
			}
		}
	}
</script>

<style lang="less" scoped>
@import '../assets/styles/index.less';
h2::after{
	margin: 10px  auto 0 auto;
}
h3{
	font-weight: bold;
	font-size: 18px;
	line-height: 22px;
	margin-top: 20px;
}
h3:after{
	content: " ";
  display: block;
  width: 80px;
  height: 1px;
  margin-top: 10px;
  background-color: @main_color;
}
.medium-bg{
	background-color: @medium-bg;
}
.item-card{	
	height: 510px;
	background-color: @light_text;
	padding: 1px;
}
.item-img{
	margin-top: 15px;
	margin-bottom: 15px;
}
.card-container{
	width: 223px;
	margin: 0 auto;
}
.info{
	font-size: 11px;
	line-height: 13px;
	display: inline;
}

.info:first-of-type::after{
	content: "";
	display: inline-block;
	width: 1px;
	height: 20px;
	background-color: @main_color;
	vertical-align: middle;	
	margin-left: 3px;
	margin-right: 3px;
}
.price{
	font-family: Montserrat SemiBold;
	font-size: 14px;
	line-height: 17px;
	margin-top: 15px;
}
.solid-button{
	width: 100%;
	padding-top:10px;
	padding-bottom: 10px;	
	background-color: @main_color;
	text-align: center;
	color: @light_text;
	font-weight: bold;
	font-size: 16px;
	line-height: 20px;
	margin-top: 20px;
	margin-bottom: 15px;
}
.bordered-button{
	width: 100%;
	padding-top:10px;
	padding-bottom: 10px;
	text-align: center;
	font-weight: bold;
	font-size: 16px;
	line-height: 20px;
	max-width: 250px;
}
.brdr-btn-main-color{
	border: 1px solid @main_color;
	color: @main_color;	
}
.brdr-btn-dark-color{
	border: 1px solid @dark-bg;
	color: @dark-bg;	
	transition: 0.4s;
}
.brdr-btn-dark-color:hover{
	border: 1px solid @dark-bg;
	color: @light_text;	
	background-color: @dark-bg;
	transition: 0.4s;
}
.item-margin{
	padding: 15px;
}
.btn-pos{
	margin: 60px auto 0 auto;
}
</style>