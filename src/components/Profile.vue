<template>
	<div>
		<Header/>
		<div class="block medium-bg">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<h2 class="text-uppercase text-center">
							Профиль
						</h2>
					</div>
				</div>	
				<div class="row">
					<div class="col-md-12">
						<div class="info-block">
							<table>
								<tr>
									<th>Имя</th>
									<td>Иван</td>
								</tr>
								<tr>
									<th>Отчество</th>
									<td>Сергеевич</td>
								</tr>
								<tr>
									<th>Фамилия</th>
									<td>Петренко</td>
								</tr>
								<tr>
									<th>Телефон</th>
									<td>+380665789481</td>
								</tr>
								<tr>
									<th>Email</th>
									<td>ivan45364@gmail.com</td>
								</tr>
							</table>
							<div class="bordered-button brdr-btn-main-color">
								Изменить пароль
							</div>
							<div class="bordered-button brdr-btn-main-color">
								Изменить профиль
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
				items: [
				{
					id: 1,
					count: 1,
					price: 226,
					sum: 226
				},
				{
					id: 2,
					count: 1,
					price: 226,
					sum: 226
				},
				{
					id: 3,
					count: 1,
					price: 229,
					sum: 226
				}
				]								
			}	
		},
		methods:{
			increaseCount: function(i){
				i.count++;
				i.sum = i.count*i.price;
			},
			decreaseCount: function(i){
				if(i.count>1){					
					i.count--;
					i.sum = i.count*i.price;
				}
			},
			deleteItem:function(i){
				var removeIndex = this.items.map(function(i) { return i.id; }).indexOf(i.id);
				this.items.splice(removeIndex, 1);
			}
		},
	}
</script>

<style lang="less" scoped>
@import '../assets/styles/index.less';
.info-block{
	background-color: @light_text;
	width: 37%;
	padding: 30px;
	margin: 0 auto;
	text-align: center;
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

	margin-bottom: 30px;
}
.brdr-btn-main-color{
	border: 1px solid @main_color;
	color: @main_color;	
}
tr, th{
	padding: 10px 30px;
}
table{
	margin-bottom: 30px;
	text-align: left;
	margin-left: auto;
	margin-right: auto;
}
</style>