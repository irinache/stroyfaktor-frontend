<template>
	<div>
		<Header/>
		<div class="block medium-bg">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<h2 class="text-uppercase text-center">
							Информация о товаре
						</h2>
					</div>
				</div>	
				<div class="row">
					<div class="info-block">
						<img src="../assets/images/card-img.png" alt="">
						<div class="main-info">
							<h3>
								Металлочерепица Арад
							</h3>
							<div class="price">
								от 186 грн/кв.м.
							</div>
							<div class="info-opt">
								Оптом и в розницу
							</div>
							<div class="info-time">
								Под заказ, 7 дней
							</div>
							<div class="d-block">
								<div class="solid-button">
								Купить
							</div>
							<div class="bordered-button brdr-btn-main-color">
								Перезвоните мне
							</div>
							</div>
							
						</div>
						<div class="description">
							<h4>
								Описание
							</h4>
							<p>
								Металлочерепица ARAD, ARAD Classic  — качественная традиционая металлочерепица, которая выглядит на кровле как натуральная черепица. Этот кровельный материал выпускается по размерам заказчиков с тремя видами полимерного покрытия: полиэстер, матовый полиэстер и Purmat®. Имеет симетричную форму по ширине листа, что дает возможность монтировать, начиная как с левой так и с правой стороны.  
								Металлочерепица ARAD - модульная черепица, выпускается одно и двух волновыми модулями (листами). Преимущество модульного ARAD - скрытый крепеж который исключает сквозные отверствия в черепице, а следовательно более длительный срок службы кровли.
							</p>
						</div>
						<div class="specification">
							<h4>
								Характеристики
							</h4>
							<table>
								<tr>
									<th colspan=2>
										Основные
									</th>
								</tr>
								<tr>
									<td>Производитель</td>
									<td>Pruszynski</td>
								</tr>
								<tr>									
									<td>Производитель</td>
									<td>Украина</td>
								</tr>									
								<tr>
									<td>Вид черепицы</td>
									<td>Металлическая</td>
								</tr>
								<tr>
									<td>Покрытие</td>
									<td>Полимерное</td>
								</tr>
								<tr>
									<td>Тип профиля</td>
									<td>Classic</td>
								</tr>
								<tr>
									<td>Назначение черепицы</td>
									<td>Рядовая</td>
								</tr>
								<tr>
									<td>Гарантийный срок</td>
									<td>20 лет</td>
								</tr>								
							</table>
							<table>
								<tr>
									<th colspan=2>
										Размеры
									</th>
								</tr>
								<tr>
									<td>Длина</td>
									<td>5315 мм</td>
								</tr>
								<tr>									
									<td>Ширина</td>
									<td>1080.0 (мм)</td>
								</tr>									
								<tr>
									<td>Толщина</td>
									<td>45.0 (мм)</td>
								</tr>				
							</table>
						</div>						
						<div class="testimonials">
							<h4>
								Отзывы о товаре
							</h4>
							<div class="post-testimonial">
								<div class="post-testimonial-text">
									Оставьте свой отзыв о товаре
								</div>
								<div class="btn-pos">
									<router-link to="/item_list/item/add_testimonial" class="solid-button">
										Добавить отзыв
									</router-link >	
								</div>															
							</div>
							<div class="testimonial" v-for="t in item.testimonials" v-bind:key="t.id">
								<div class="info">
									<div class="name">
										{{t.author}}
									</div>
									<div class="date">
										{{t.date}}
									</div>
									<div class="rating">
										<span class="star checked"></span>
										<span class="star checked"></span>
										<span class="star checked"></span>
										<span class="star"></span>
										<span class="star"></span>
									</div>
								</div>
								<div class="testimonial-text">
									{{t.text}}
								</div>						
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
				item: {
					testimonials:
					[
					{
						id: 1,
						author: "Игорь",
						date: "12.04.2019",
						text: "Моя компания занимается металлоконструкциями и я регулярно заказываю через Стройфактор кровельные материалы (металлочерепица, мягкая кровля, водоотводы и пр.) для навесов и козырьков. Ни разу проблем не было, вся продукция поставлялась либо точно в срок либо, либо раньше. Очень приятно работать с профессионалами! Рекомендую эту компанию знакомым и своим заказчикам также.",
					},
					{
						id: 2,
						author: "Игорь",
						date: "12.04.2019",
						text: "Моя компания занимается металлоконструкциями и я регулярно заказываю через Стройфактор кровельные материалы (металлочерепица, мягкая кровля, водоотводы и пр.) для навесов и козырьков. Ни разу проблем не было, вся продукция поставлялась либо точно в срок либо, либо раньше. Очень приятно работать с профессионалами! Рекомендую эту компанию знакомым и своим заказчикам также.",
					},	
					{
						id: 3,
						author: "Игорь",
						date: "12.04.2019",
						text: "Моя компания занимается металлоконструкциями и я регулярно заказываю через Стройфактор кровельные материалы (металлочерепица, мягкая кровля, водоотводы и пр.) для навесов и козырьков. Ни разу проблем не было, вся продукция поставлялась либо точно в срок либо, либо раньше. Очень приятно работать с профессионалами! Рекомендую эту компанию знакомым и своим заказчикам также.",
					},		
					]
				},				
			}	
		}
	}
</script>

<style lang="less" scoped>
@import '../assets/styles/index.less';

.info-block{
	background-color: @light_text;
	width: 100%;
	padding: 30px;
}
img{
	width: 300px;
	height: 300px;
	margin-right: 25px;	
}
.main-info{
	display: inline-block;	
	height: 300px;
	vertical-align: top;
}
h3{
	margin-top: 0;
}
h4{
	margin-top: 40px;
	margin-bottom: 20px;
}
h3:after{
  height: 2px;
}
.info-time, .info-opt{
	font-size: 11px;
	line-height: 13px;
	display: inline;
}
.info-opt::after{
	content: "";
	display: inline-block;
	width: 2px;
	height: 20px;
	background-color: @main_color;
	vertical-align: middle;	
	margin-left: 3px;
	margin-right: 3px;
}
.price{
	font-family: Montserrat SemiBold;
	color: @main_color;
	font-size: 24px;
	font-weight: bold;	
	margin: 15px 0;
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
.description{
	margin-top: 40px;
}
.specification{

}
table{
	width: 100%;
	margin-bottom: 20px;
}
th{
	
	border-bottom: 1px solid @dark-bg;
}
td, th{
	padding: 15px;
}
.post-testimonial{
	border: 1px solid @main_color;
	padding: 15px 40px;
	margin-bottom: 40px;
}
.post-testimonial-text{
	font-weight: bold;
	color: @main_color;
	display: inline-block;
	width: 50%;
	font-size: 18px;
}
.btn-pos{
	width:  50%;
	display: inline-block;
	text-align: right;
}
//------------------
.testimonial{
	padding: 20px;
	width: 100%;
	min-height: 100px;
	border: 1px solid @dark-bg;
	margin-bottom: 30px;
}
.testimonial-text{
	display: inline-block;
	color: @dark-bg;
	width: 85%;
	vertical-align: top;
}
.info{
	display: inline-block;
	color: @dark-bg;
	width: 15%;
	vertical-align: top;
}
.name{
	font-weight: bold;
	margin-bottom: 5px;
}
</style>