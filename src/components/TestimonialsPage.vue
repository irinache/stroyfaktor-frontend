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
							<div class="post-testimonial clearfix">
								<div class="post-testimonial-text float-left">
									Оставьте свой отзыв о товаре
								</div>
								<router-link to="/add_testimonial" class="button solid-button float-right">
									Добавить отзыв
								</router-link >												
							</div>
							<div class="testimonial dark-t" v-for="t in testimonials" v-bind:key="t.id">
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
		<Footer/>
	</div>
	
</template>

<script>
	import Header from "../components/Header.vue"
	import Footer from "../components/Footer.vue"
	//import Rating from "../components/Rating.vue"
	export default{
		components: {	
			Header,	
			//Rating,	
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
					rating: 5,
				},
				{
					id: 2,
					author: "Игорь",
					date: "12.04.2019",
					text: "Моя компания занимается металлоконструкциями и я регулярно заказываю через Стройфактор кровельные материалы (металлочерепица, мягкая кровля, водоотводы и пр.) для навесов и козырьков. Ни разу проблем не было, вся продукция поставлялась либо точно в срок либо, либо раньше. Очень приятно работать с профессионалами! Рекомендую эту компанию знакомым и своим заказчикам также.",
					rating: 3,
				},	
				{
					id: 3,
					author: "Игорь",
					date: "12.04.2019",
					text: "Моя компания занимается металлоконструкциями и я регулярно заказываю через Стройфактор кровельные материалы (металлочерепица, мягкая кровля, водоотводы и пр.) для навесов и козырьков. Ни разу проблем не было, вся продукция поставлялась либо точно в срок либо, либо раньше. Очень приятно работать с профессионалами! Рекомендую эту компанию знакомым и своим заказчикам также.",
					rating: 5,
				},		
				],																	
			}	
		},		
	}
</script>

<style lang="less" scoped>
@import '../assets/styles/index.less';
.item-margin{
	padding: 15px;
}

</style>