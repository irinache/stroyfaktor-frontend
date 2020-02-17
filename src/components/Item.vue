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
					<div class="col-md-12">
						<div class="info-block">						
							<div class="main-info">
								<h3 v-if="h3OnTop">
									Металлочерепица Арад
								</h3>
								<img src="../assets/images/card-img.png" alt="">
								<div class="right">
									<h3 v-if="!h3OnTop">
										Металлочерепица Арад
									</h3>
									<div class="price">
										от 186 грн/кв.м.
									</div>
									<div>
										<div class="info-opt">
											Оптом и в розницу
										</div>
										<div class="info-time">
											Под заказ, 7 дней
										</div>
									</div>								
									<div class="d-block">
										<div class="solid-button button button-margin">
											Купить
										</div>
										<div class="button brdr-btn-main-color button-margin">
											Перезвоните мне
										</div>
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
										<th class="col-header" colspan=2>
											Основные
										</th>
									</tr>
									<tr>
										<th>Производитель:</th>
										<td>Pruszynski</td>
									</tr>
									<tr>									
										<th>Производитель:</th>
										<td>Украина</td>
									</tr>									
									<tr>
										<th>Вид черепицы:</th>
										<td>Металлическая</td>
									</tr>
									<tr>
										<th>Покрытие:</th>
										<td>Полимерное</td>
									</tr>
									<tr>
										<th>Тип профиля:</th>
										<td>Classic</td>
									</tr>
									<tr>
										<th>Назначение черепицы:</th>
										<td>Рядовая</td>
									</tr>
									<tr>
										<th>Гарантийный срок:</th>
										<td>20 лет</td>
									</tr>								
								</table>
								<table>
									<tr>
										<th class="col-header" colspan=2>
											Размеры
										</th>
									</tr>
									<tr>
										<th>Длина:</th>
										<td>5315 мм</td>
									</tr>
									<tr>									
										<th>Ширина:</th>
										<td>1080.0 (мм)</td>
									</tr>									
									<tr>
										<th>Толщина:</th>
										<td>45.0 (мм)</td>
									</tr>				
								</table>
							</div>						
							<div class="testimonials">
								<h4>
									Отзывы о товаре
								</h4>
								<div class="post-testimonial clearfix">
									<div class="post-testimonial-text float-left">
										Оставьте свой отзыв о товаре
									</div>
									<router-link to="/item_list/item/add_testimonial" class="button solid-button float-right">
										Добавить отзыв
									</router-link >												
								</div>
								<div class="testimonial dark-t" v-for="t in item.testimonials" v-bind:key="t.id">
									<div class="t-info">
										<div class="name">
											{{t.author}}
										</div>
										<div class="date">
											{{t.date}}
										</div>
										<star-rating v-model="t.rating" :star-size="20" :show-rating="false" :read-only="true"></star-rating>
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
						rating: 5,
					},
					{
						id: 2,
						author: "Игорь",
						date: "12.04.2019",
						text: "Моя компания занимается металлоконструкциями и я регулярно заказываю через Стройфактор кровельные материалы (металлочерепица, мягкая кровля, водоотводы и пр.) для навесов и козырьков. Ни разу проблем не было, вся продукция поставлялась либо точно в срок либо, либо раньше. Очень приятно работать с профессионалами! Рекомендую эту компанию знакомым и своим заказчикам также.",
						rating: 4,
					},	
					{
						id: 3,
						author: "Игорь",
						date: "12.04.2019",
						text: "Моя компания занимается металлоконструкциями и я регулярно заказываю через Стройфактор кровельные материалы (металлочерепица, мягкая кровля, водоотводы и пр.) для навесов и козырьков. Ни разу проблем не было, вся продукция поставлялась либо точно в срок либо, либо раньше. Очень приятно работать с профессионалами! Рекомендую эту компанию знакомым и своим заказчикам также.",
						rating: 5,
					},		
					],					
				},
				h3OnTop: false,
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
				if(document.documentElement.clientWidth <= 767) {
					this.h3OnTop = true;
				}
				else{
					this.h3OnTop = false;
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
.info-block{
	background-color: @light_text;
	width: 100%;
	padding: 30px;
}
img{
	width: 25%;
	height: width;
	margin-right: 25px;	
	float: left;
}
.main-info{
	display: inline-block;	
	vertical-align: top;
	width: 100%;
}
h3{	
	margin-top: 0;
	margin-bottom: 25px;	
}
h4{
	margin-top: 40px;
	margin-bottom: 20px;
}
.right{
	width: calc(75% - 25px);
	float: right;
}
.button-margin{
	display: inline-block;
	margin-right: 30px;
	margin-top: 20px;
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
.description{
	margin-top: 40px;
}
table{
	width: 100%;
	margin-bottom: 20px;
}
.col-header{	
	border-bottom: 1px solid @dark-bg;
}
td, th{
	padding: 15px;
}
th{
	font-weight: bold;
}
tr{
	border-bottom: 1px solid @medium-bg;
}
.post-testimonial{
	border: 1px solid @main_color;
}
.testimonial{
	border: 1px solid @dark-bg;
}
@media(max-width: 996px){
	img{
		width: 50%;
	}
	.right{
		width: calc(50% - 25px);
	}
}
@media(max-width: 767px){
	img{
		width: 100%;
		margin-bottom: 25px;
	}
	.right{
		width: 100%;
	}
}
@media(max-width: 430px){
	th, td{
		display: block;
		padding: 5px 0;
	}
	tr{
		padding: 5px 0;
		border-bottom: 1px solid @medium-bg;
	}	
}
</style>