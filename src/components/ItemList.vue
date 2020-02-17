<template>
	<div>
		<Header/>
		<div class="block medium-bg">		
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<h2 class="text-uppercase text-left left-align">
							Металлочерепица
						</h2>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<div class="info-category">
							<b>Металлочерепица</b> - кровельный материал, представлющий собой листы, изготовленные из тонколистовой стали, методом холодного профилирования. Листы металлочерепицы по внешнему виду напоминают керамическую (натуральную) черепицу. <br>Металлочерепица применяется в качестве покрытия для скатных кровель с минимальным углом наклона 14°. 
						</div>
					</div>
				</div>	
				<div class="row sort-margin">
					<div class="col-md-12">
						<div class="icon-pos">
							<div class="filter-show" v-if="!show" @click="show = !show" key="filter-show">										
							</div>
							<div class="filter-hide" v-else @click="show = !show" key="filter-hide">										
							</div>
						</div>							
						<div class="sort-pos right">
							<div class="text">
								Сортировка
							</div>
							<CustomSelect :options="['по порядку', 'по росту цены', 'по снижению цены']" :bordered="false" class="select-pos"/>
						</div>					
					</div>		
				</div>	
				<div class="row">
					<div class="col-md-3 col-sm-12">
						<nav>							
							<transition name = "fade">
								<div v-if="show" class="sidebar">
									<h3>
										Тип товара
									</h3>
									<ul>
										<li>
											<router-link to="/item_list" class="selected">Металлочерепица</router-link>
										</li>
										<li>
											<router-link to="/item_list">Фальцевая кровля</router-link>
										</li>
										<li>
											<router-link to="/item_list">Битумная черепица</router-link>
										</li>
										<li>
											<router-link to="/item_list">Водосточные системы</router-link>
										</li>
										<li>
											<router-link to="/item_list">Профнастил</router-link>
										</li>
										<li>
											<router-link to="/item_list">Подкровельные пленки</router-link>
										</li>
										<li>
											<router-link to="/item_list">Раздвижные решетки на окна и двери</router-link>
										</li>
										<li>
											<router-link to="/item_list">Вентиляционные выходы</router-link>
										</li>
										<li>
											<router-link to="/item_list">Кровельные уплотнители для труб</router-link>
										</li>
										<li>
											<router-link to="/item_list">Композитная черепица</router-link>
										</li>
										<li>
											<router-link to="/item_list">FAKRO</router-link>
										</li>
										<li>
											<router-link to="/item_list">VELUX</router-link>
										</li>	
									</ul>
									<h3>
										Производитель
									</h3>
									<ul>
										<li>
											<CustomCheckbox v-for="m in manufacturers" v-bind:key="m.name">{{m.name}}</CustomCheckbox>	
										</li>								
									</ul>
								</div>
							</transition>									
						</nav>	
					</div>					
					<div class="col-md-9 p-0">						
						<div class=" col-lg-4 col-md-6 col-sm-6 item-container" v-for="item in items" v-bind:key="item.id">
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
									<div class="small-button solid-button" @click.prevent="showAddedToCartModal">
										Купить
									</div>
									<div class="small-button brdr-btn-main-color" @click.prevent="showModalCallMeBack">
										Перезвоните мне
									</div>								
							</router-link>
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
import CustomCheckbox from "../components/CustomCheckbox.vue";


export default{
	components: {	
		Header,	
		CustomSelect,	
		CustomCheckbox,
		Footer,
	},	
	data(){
			return{
				show: true,
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
				],
				manufacturers:[
				{
					name: "Kerabit"
				},
				{
					name: "Tegola Canadese"
				},
				{
					name: "Metrotile"
				},
				{
					name: "Rainway"
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
			onResize(){
				if(document.documentElement.clientWidth <= 767) {
					this.show = false;
				}
				else{
					this.show = true;
				}
			},
		},
		created() {
			window.addEventListener("resize", this.onResize);
		},
		destroyed() {
			window.removeEventListener("resize", this.onResize);
		},
		mounted(){
			this.onResize();
		}
}
</script>

<style lang="less" scoped>
@import '../assets/styles/index.less';
.info-category{	
	padding: 25px;
	font-size: 18px;
	line-height: 27px; 
	background-color: @light_text;
}
.select-pos {    
    display: inline-block;
    margin-left: 30px;
    margin-bottom: 20px;
    z-index: 100;
}
.right{
	margin: 0 0 0 auto;
	width: fit-content;
}
.sort-margin{
	margin-top: 60px;
}
.text{
	display: inline-block;
	width: 100px;
	font-weight: bold;
	line-height: 47px;
}
ul {
    list-style: none;
    padding: 35px 0;
    margin: 0;
}
li{
	margin-bottom: 20px;
}
.sidebar{
	a{
		color: @dark-bg;
	}
	a:hover, label:hover, .selected{
		color: @main_color;
		font-weight: bold;
	}
}
input[type=checkbox] {
	//display: none;
} 
input[type=checkbox]:checked + label {
  color: @main_color;
  font-weight: bold;
} 
.small-button{
	margin-top: 15px;
}
.filter-show, .filter-hide{
	display: none;	
}
.icon-pos{
	margin-bottom: auto;
	margin-top: 0;
}
@media(max-width: 767px){
	.filter-show, .filter-hide{
		display: block;		
		background-size: contain;
		background-position: center;
		float: left;
		width: 36px;
		height: 36px;	
	}
	.filter-show{
		background: url("../assets/images/filter-icon.png") no-repeat;		
	}
	.filter-hide, .filter-show:hover{
		background: url("../assets/images/filter-icon-hover.png") no-repeat;		
	}
	.select-pos{
		float: right;
	}
	.text{
		margin-top: auto;
		margin-bottom: auto;
	}
	.sidebar{
		position: relative;
		margin-top: 15px;
		background-color: @light_text;
		padding: 15px;
	}
	.icon-pos{
		float: left
	}
}
@media(max-width: 600px){
	.text, .select-pos{
		display: block;
	}
	.text{
		margin-left: auto;
		margin-right: 0;	
	}
	.icon-pos{
		height: 94px;
	}
	.filter-hide,.filter-show{
		height: 100%;	
		background-position: bottom;		
	}
}
</style>