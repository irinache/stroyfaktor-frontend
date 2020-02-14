<template>
	<div>
		<Header/>
		<div class="block medium-bg">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<h2 class="text-uppercase text-center">
							Изменить пароль
						</h2>
					</div>
				</div>	
				<div class="row">
					<div class="col-md-12">
						<div class="info-block">
							<form action="" autocomplete="off">
								<div class="row">
									<div class="col-md-12">
										<input type="password" name="old_password" placeholder="Старый пароль" >
										<input type="password" name="new_password" placeholder="Новый пароль">
										<input type="password" name="new_password_confirm" placeholder="Подтвердите пароль">						
									</div>									
								</div>	
								<router-link to="/profile" class="bordered-button brdr-btn-main-color">
									Отмена
								</router-link>
								<input type="submit" value="Сохранить" class="solid-button">
							</form> 							
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
	width: 70%;
	padding: 30px;
	margin: 0 auto;
	padding-bottom: 150px;
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
	float: left;
	margin-top: 30px;
}
.brdr-btn-main-color{
	border: 1px solid @main_color;
	color: @main_color;	
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
	margin-bottom: 15px;
	display: inline-block;
	border: none;
	float: right;

	margin-top: 30px;
}
input{
	margin-bottom: 20px;
	padding: 13px 17px;
	width: 100%;
	background-color: transparent;
	border: 1px solid @dark-bg;
	color: @dark-bg;
}
input:focus{
  outline: none;
  background-color: rgba(255,255,255, 0.1);
}
</style>