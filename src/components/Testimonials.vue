<template>
	<div class="block dark-bg">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<h2 class="text-uppercase text-center light-text">
						Отзывы
					</h2>
				</div>
			</div>	
			<div class="row">
				<div class="col-md-12">
					<div class="testimonial light-t" v-for="t in testimonials" v-bind:key="t.id">
						<div class="t-info">
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
			<div class="row">
				<div class="col-md-12">
					<div class="button brdr-btn-light-color btn-pos">
						Смотреть все отзывы
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
			}
		}
	}
</script>

<style lang="less" scoped>
@import '../assets/styles/index.less';
.item-margin{
	padding: 15px;
}
.btn-pos{
	margin: 60px auto 0 auto;
}

</style>