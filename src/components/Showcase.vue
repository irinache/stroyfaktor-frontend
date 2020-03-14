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
				<div class="col-lg-4 col-sm-12 category-margin" v-for="c in categories" v-bind:key="c.id">
					<router-link to="/item_list" class="category">
						<div class="counter">
							{{c.items_count}}
						</div>
						<img src="../assets/images/card-img.png" alt="" class="image">	
						<h3>
							{{c.name}}
						</h3>						
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
				categories: [
					{
						id: 1,
						items_count: 17,
						name: "Металлочерепица",
					},
					{
						id: 2,
						items_count: 1,
						name: "Фальцевая кровля",
					},
					{
						id: 3,
						items_count: 62,
						name: "Битумная черепица",
					},
					{
						id: 4,
						items_count: 7,
						name: "Водосточные системы",
					},
					{
						id: 5,
						items_count: 14,
						name: "Профнастил",
					},
					{
						id: 6,
						items_count: 2,
						name: "Подкровельные пленки",
					},
					{
						id: 7,
						items_count: 17,
						name: "Раздвижные решетки на окна и двери",
					},
					{
						id: 8,
						items_count: 17,
						name: "Вентиляционные выходы",
					},
					{
						id: 9,
						items_count: 17,
						name: "Кровельные уплотнители для труб ",
					},
					{
						id: 10,
						items_count: 17,
						name: "Композитная черепица ",
					},
					{
						id: 11,
						items_count: 17,
						name: "FAKRO",
					},
					{
						id: 12,
						items_count: 17,
						name: "VELUX",
					},
				]
			}
		}
	}
</script>

<style lang="less" scoped>

@import '../assets/styles/index.less';
h3{
	max-width: 312px;
	margin-right: auto;
	margin-left: auto;
}
h3:after{
	content: none; 
}
h3:before{
	content: " ";
  display: block;
  width: 80px;
  height: 1px;  
  margin: 0 auto;
  margin-bottom: 10px;
  background-color: @main_color;
}
.category-margin{
	padding: 15px;
}
.image{
	width: 100%;
	height: 318px;
	object-fit: contain;
	background-color: @medium-bg;
	margin-bottom: 15px;
}
.category{
	display: block;
	padding: 15px 15px 35px 15px;
	width: 100%;
	height: fir-content;
	background-color: @light_text;
	color: @dark-bg;
	text-align: center;
	border: 1px solid transparent;
}
.category:hover{
	color: @main_color;
	border: 1px solid @main_color;
}
.counter{
	position: absolute;
	top: 15px;
	right: 15px;
	padding: 15px 18px;	
	min-width: 55px;
	background-color: @main_color;
	font-weight: bold;
	color: @light_text;
}
</style>