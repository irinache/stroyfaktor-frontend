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
				
						<div class="col-lg-3 col-md-4 col-sm-6 item-container text-left" v-for="item in items" v-bind:key="item.id">
							<router-link to="/item_list/item" class="item-card">						
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
									<div class="solid-button small-button" @click.prevent="showAddedToCartModal">
										Купить
									</div>
									<div class="small-button brdr-btn-main-color" @click.prevent="showModalCallMeBack">
										Перезвоните мне
									</div>							
							</router-link>
						</div>
					
			</div>	
			<div class="row">
				<div class="col-md-12">
					<router-link to="/categories" class="button brdr-btn-dark-color btn-pos">
						Все товары и услуги
					</router-link>
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
		},
		methods:{
			showAddedToCartModal() {    			
				this.$root.$emit('modal-atc-on', true);		        	
			},
			showModalCallMeBack() {    			
				this.$root.$emit('modal-cmb-on', true);		        	
			},
		}
	}
</script>

<style lang="less" scoped>
@import '../assets/styles/index.less';
.btn-pos{
	margin: 60px auto 0 auto;
}
.small-button{
	margin-top: 15px;
}
</style>