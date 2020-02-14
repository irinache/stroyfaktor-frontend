<template>
	<div>
		<Header/>
		<div class="block medium-bg">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<h2 class="text-uppercase text-center">
							Отзывы
						</h2>
					</div>
				</div>	
				<div class="row">
					<div class="col-md-12">
						<div class="text-center" v-show="empty">
							<div class="text">
								У компании нету отзывов
							</div>							
						</div>
						<div v-show="!empty">
							<div class="post-testimonial">
								<div class="post-testimonial-text">
									Оставьте свой отзыв о товаре
								</div>
								<div class="btn-pos">
									<router-link to="/add_testimonial" class="solid-button">
										Добавить отзыв
									</router-link >	
								</div>															
							</div>
							<div class="testimonial" v-for="t in testimonials" v-bind:key="t.id">
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
				empty: false,			
				testimonials:
				[
				{
					id: 1,
					author: "Игорь",
					date: "12.04.2019",
					text: "Моя компания занимается металлоконструкциями и я регулярно заказываю через Стройфактор кровельные материалы (металлочерепица, мягкая кровля, водоотводы и пр.) для навесов и козырьков. Ни разу проблем не было, вся продукция поставлялась либо точно в срок либо, либо раньше. Очень приятно работать с профессионалами! Рекомендую эту компанию знакомым и своим заказчикам также.",
				},
				{
					id: 1,
					author: "Игорь",
					date: "12.04.2019",
					text: "Моя компания занимается металлоконструкциями и я регулярно заказываю через Стройфактор кровельные материалы (металлочерепица, мягкая кровля, водоотводы и пр.) для навесов и козырьков. Ни разу проблем не было, вся продукция поставлялась либо точно в срок либо, либо раньше. Очень приятно работать с профессионалами! Рекомендую эту компанию знакомым и своим заказчикам также.",
				},	
				{
					id: 1,
					author: "Игорь",
					date: "12.04.2019",
					text: "Моя компания занимается металлоконструкциями и я регулярно заказываю через Стройфактор кровельные материалы (металлочерепица, мягкая кровля, водоотводы и пр.) для навесов и козырьков. Ни разу проблем не было, вся продукция поставлялась либо точно в срок либо, либо раньше. Очень приятно работать с профессионалами! Рекомендую эту компанию знакомым и своим заказчикам также.",
				},		
				]							
			}	
		},
	}
</script>

<style lang="less" scoped>
@import '../assets/styles/index.less';
.testimonial{
	padding: 20px;
	width: 100%;
	min-height: 100px;
	background-color: @light_text;	
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
.item-margin{
	padding: 15px;
}
.post-testimonial{
	background-color: @light_text;	
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
</style>