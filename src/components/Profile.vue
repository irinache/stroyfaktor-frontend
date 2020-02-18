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
							<router-link to="/change_password" class="button brdr-btn-main-color">
								Изменить пароль
							</router-link>
							<router-link to="/edit_profile" class="button brdr-btn-main-color">
								Изменить профиль
							</router-link>
							<div class="link text-center">
								Выйти из профиля
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
											
			}	
		},		
	}
</script>

<style lang="less" scoped>
@import '../assets/styles/index.less';
.info-block{
	background-color: @light_text;
	width: 430px;
	padding: 30px;
	margin: 0 auto;
	text-align: center;
}
.button{
	margin-bottom: 20px;
	margin-left: auto;
	margin-right: auto;
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
@media(max-width: 484px){
	td, th{
		display: block;
		padding: 0;
	}
	td{
		padding-bottom: 15px;
	}
	.info-block{		
		width: 90%;		
	}
}
</style>