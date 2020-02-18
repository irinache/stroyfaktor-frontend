<template>
	<div>
		<Header/>
		<div class="block medium-bg">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<h2 class="text-uppercase text-center">
							Оформление заказа
						</h2>
					</div>
				</div>	
				<div class="row">
					<div class="col-lg-8 col-md-6 block-margin">
						<div class="bg-block">
							<form autocomplete="off" @submit.prevent="submit">
								<h4>
									Информация о получателе:
								</h4>
								<div class="err-field">
									<div v-if="$v.name.$error">
										<span class="error" v-if="!$v.name.required">Укажите имя. </span>
										<span class="error" v-if="!$v.name.minLength">Имя слишком короткое. </span>
										<span class="error" v-if="!$v.name.onlyLetters">Имя может содержать только буквы. </span>
									</div>
								</div>
								<input type="text" class="light-input" name="name" v-model="name" placeholder="Имя">
								<div class="err-field">
									<div v-if="$v.secname.$error">
										<span class="error" v-if="!$v.secname.required">Укажите отчество. </span>
										<span class="error" v-if="!$v.secname.onlyLetters">Отчество может содержать только буквы. </span>
									</div>
								</div>
								<input type="text" class="light-input" name="secname" v-model="secname"  placeholder="Отчество">
								<div class="err-field">
									<div v-if="$v.surname.$error">
										<span class="error" v-if="!$v.surname.required">Укажите фамилию. </span>
										<span class="error" v-if="!$v.surname.onlyLetters">Фамилия может содержать только буквы. </span>
									</div>
								</div>
								<input type="text" class="light-input" name="surname" v-model="surname"  placeholder="Фамилия">
								<div class="err-field">
									<div v-if="$v.phone.$error">
										<span class="error" v-if="!$v.phone.required">Укажите номер телефона. </span>
										<span class="error" v-if="!$v.phone.mustBePhoneNum">Неправильный формат номера. </span>
									</div>
								</div>
								<input type="text" class="light-input" name="phone" v-model="phone"  placeholder="Номер телефона">
								<div class="err-field">
									<div v-if="$v.email.$error">
										<span class="error" v-if="!$v.email.required">Укажите электронную почту. </span>
										<span class="error" v-if="!$v.email.email">Неправильный формат электронной почты. </span>
									</div>
								</div>
								<input type="email" class="light-input" name="email" v-model="email"  placeholder="Email">
								<h4 class="h4margin">
									Способ доставки:
								</h4>
								<div class="err-field">
									<div v-if="$v.delivery_method.$error">
										<span class="error" v-if="!$v.delivery_method.required">Укажите способ доставки. </span>
									</div>
								</div>
								<CustomSelect :options="['Новая почта', 'Delivery', 'самовывоз']" :bordered="true" select_name="delivery_method" class="select-pos" placeholder="Выберите способ доставки"/>								
								<div v-show="nova_poshta">
									<div class="err-field">
										<div v-if="$v.delivery_type.$error">
											<span class="error" v-if="!$v.delivery_type.required">Укажите тип доставки. </span>
										</div>
									</div>
									<CustomSelect :options="['В отделении', 'Адресная доставка']" :bordered="true" select_name="delivery_type" class="select-pos" placeholder="Выберите тип доставки"/>
									<div class="err-field">
										<div v-if="$v.city.$error">
											<span class="error" v-if="!$v.city.required">Укажите город доставки. </span>
										</div>
									</div>
									<CustomSelect :options="['Днепр', 'Киев', 'Львов']" :bordered="true" select_name="city" class="select-pos" placeholder="Выберите город" />
									<div class="err-field">
										<div v-if="$v.office_num.$error">
											<span class="error" v-if="!$v.office_num.required">Укажите город доставки. </span>
										</div>
									</div>
									<CustomSelect :options="['Отделение №1', 'Отделение №2', 'Отделение №3']" :bordered="true" select_name="office_num" class="select-pos" placeholder="Выберите отделение"/>
								</div>							
								<h4  class="h4margin">
									Способ оплаты:
								</h4>
								<div class="err-field">
									<div v-if="$v.payment_method.$error">
										<span class="error" v-if="!$v.payment_method.required">Укажите город доставки. </span>
									</div>
								</div>
								<CustomSelect :options="['На карту', 'Наложенный платеж']" :bordered="true" select_name="payment_method" class="select-pos" placeholder="Выберите способ оплаты" />
								<h4  class="h4margin">
									Комментарий:
								</h4>
								<textarea class="light-input" name="comment" v-model="comment" placeholder="Напишите комментарий">								
								</textarea>								
								<div class="text-right clearfix">									
									<input type="submit" value="Подтвердить заказ" class="button solid-button float-right">
									<router-link to="/cart" class="button brdr-btn-main-color float-left">Назад</router-link>
								</div>							
							</form>
						</div>												
					</div>
					<div class="col-lg-4 col-md-6  block-margin">
						<div class="bg-block">
							<h4>
								Заказ:
							</h4>
							<div class="item" v-for="item in items" v-bind:key="item.id">
								<img src="../assets/images/card-img.png" alt="">
								<div class="d-inline-block">
									<h4>{{item.name}}</h4>	
									<div class="info-time">
										{{item.time}}
									</div>
									<div class="price">
										Цена: {{item.cost}}  грн
									</div>
								</div>
							</div>
							<div class="text">
								К оплате
							</div> 
							<div class="sum">
								{{totalSum}} грн
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
	import CustomSelect from "../components/CustomSelect.vue";
	import { required, minLength, helpers, email, sameAs } from 'vuelidate/lib/validators'
	
	const mustBePhoneNum = helpers.regex('mustBePhoneNum', /^(\+38)?0\d{3}\d{2}\d{2}\d{2}$/)
	const onlyLetters = helpers.regex('onlyLetters', /^[a-zA-Zа-яА-ЯёЁ]*$/)

	export default{
		components: {	
			Header,	
			CustomSelect,	
			Footer,
		},
		data(){
			return{
				nova_poshta: true,	
				name: "",
				secname: "",
				surname: "",
				phone: "",
				email: "",
				delivery_method: "",
				delivery_type: "",
				city: "",
				office_num: "",
				payment_method: "",
				comment: "",
				items: [
				{
					id: 1,
					name: "Металлочерепица Арад",
					time: "Под заказ, 7 дней",
					cost: 226,
				},
				{
					id: 2,
					name: "Металлочерепица Арад",
					time: "Под заказ, 7 дней",
					cost: 226,
				},
				{
					id: 3,
					name: "Металлочерепица Арад",
					time: "Под заказ, 7 дней",
					cost: 226,
				},
				]						
			}	
		},
		mounted(){
			this.$root.$on("delivery_method", (p) => {				
				this.delivery_method = p				
			});
			this.$root.$on("delivery_type", (p) => {				
				this.delivery_type = p				
			});
			this.$root.$on("city", (p) => {				
				this.city = p				
			});
			this.$root.$on("office_num", (p) => {				
				this.office_num = p				
			});
			this.$root.$on("payment_method", (p) => {				
				this.payment_method = p				
			});		

		},
		computed:{
			totalSum: function(){
				var sum = 0;
				for (let i = 0; i < this.items.length; i++) {
					sum+=this.items[i].cost
				}
				return sum;
			}
		},
		methods:{
			submit() {      
				this.$v.$touch()
				//if(this.delivery_method.length == 0){
					//this.delivery_method_err = true 
				//}
				if (this.$v.$invalid) {
					this.submitStatus = 'ERROR'
				} 
				else {
				// submit logic 
				}

			},
			setPost(p){
				this.post = p;
			},
	
		},
		validations: {
			name: {
				required,	
				onlyLetters,	
				minLength: minLength(3),		
			},
			secname: {
				required,	
				onlyLetters,			
			},
			surname: {
				required,	
				onlyLetters,			
			},
			phone: {
				required,	
				mustBePhoneNum,			
			},
			email: {
				required,	
				email,			
			},
			password: {
				required,				
				minLength: minLength(5),			
			},
			password_confirm: {
				required,				
				sameAsPassword: sameAs('password'),			
			},
			delivery_method: {
				required
			},
			delivery_type: {
				required
			},
			city: {
				required
			},
			office_num: {
				required
			},
			payment_method: {
				required
			},						
		}		
	}
</script>

<style lang="less" scoped>
@import '../assets/styles/index.less';
.block-margin{
	padding: 15px;
}
.text{
	font-size: 18px;
	margin-bottom: 10px;
}
.bg-block{
	background-color: @light_text;
	width: 100%;
	padding: 30px;
	padding-bottom: 70px;
}
.h4margin{
	margin-top: 25px;
	margin-bottom: 0;
}
input, textarea{
	width: 100%;
}
textarea{
	height: 134px;	
	margin-bottom: 30px;
	margin-top: 25px;
}
.select-pos{
	width: 100%;
	margin-bottom: 10px;
}
.item{
	vertical-align: top;
	margin-bottom: 30px;
	border-bottom: 1px solid @medium-bg;
	.text{
		vertical-align: top;
	}
	img{
		width: 90px;
		height: width;
		display: inline-block;
		margin-right: 20px;
		vertical-align: top;
	}
	h4{
		margin-top: 0;
		margin-bottom: 5px;
		display: inline-block;
		width: 180px;
	}
}
.text{
	font-size: 18px;
	display: inline-block;
	float: left;
	line-height: 29px;
}
.sum{
	font-weight: bold;
	font-size: 24px;
	display: inline-block;
	float: right;
	line-height: 29px;	
}
.price{
	margin-bottom: 20px;
}
@media(max-width: 1199px){
  .item{
	img{		
		width: 70px;		
		margin-bottom: 15px;
	}
}
}
@media(max-width: 992px){
  .item{	
	img{
		width: 70px;
		margin-bottom: 15px;
		margin-top: 0;
		margin-bottom: auto;
	}
}
.solid-button{
	margin-bottom: 20px;
}
}
@media(max-width: 359px){
  .item{
	img{		
		width: 70px;		
		margin-bottom: 15px;
	}
}
}

</style>