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
				<div class="row">
					<div class="col-md-12">
						<div class="right">
							<div class="text">
								Сортировка
							</div>
							<CustomSelect :options="['по порядку', 'по росту цены', 'по снижению цены']" :bordered="false" class="select-pos"/>
						</div>						
					</div>
				</div>	
				<div class="row">
					<div class="col-md-3">
						<div class="sidebar">
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
									<div>
										<input type="checkbox" id="kerabit" name="kerabit" checked>
										<label>Kerabit</label>
									</div>
									<div>
										<input type="checkbox" id="tegola_canadese" name="tegola_canadese">
										<label>Tegola Canadese</label>
									</div>
									<div>
										<input type="checkbox" id="metrotile" name="metrotile">
										<label>Metrotile</label>
									</div>
									<div>
										<input type="checkbox" id="rainway" name="rainway">
										<label>Rainway</label>
									</div>
								</li>								
							</ul>
						</div>					
					</div>
					<div class="col-md-9 p-0">						
						<div class="item-container" v-for="item in items" v-bind:key="item.id">
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
									<div class="solid-button">
										Купить
									</div>
									<div class="bordered-button brdr-btn-main-color">
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

export default{
	components: {	
		Header,	
		CustomSelect,	
		Footer,
	},	
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
	margin: 60px 0 0 auto;
	width: fit-content;
}
.text{
	display: inline-block;
	width: 100px;
	font-weight: bold;
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
</style>