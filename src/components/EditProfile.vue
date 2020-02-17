<template>
	<div>
		<Header/>
		<div class="block medium-bg">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<h2 class="text-uppercase text-center">
							Редактировать профиль
						</h2>
					</div>
				</div>	
				<div class="row">
					<div class="col-md-12">
						<div class="info-block">
							<form action="" autocomplete="off">
								<div class="row">
									<div class="col-md-12">
										<input type="text" name="name" v-model="name"  class="light-input" placeholder="Имя" >
										<input type="text" name="secname" v-model="secname"  class="light-input" placeholder="Отчество">
										<input type="text" name="surname" v-model="surname"  class="light-input" placeholder="Фамилия">						
										<input type="text" name="phone" v-model="phone"  class="light-input" placeholder="Телефон" >
										<input type="email" name="email" v-model="email"  class="light-input" placeholder="Email">										
									</div>									
								</div>	
								<div class="clearfix">
									<input type="submit" value="Сохранить" class="button solid-button float-right">
									<router-link to="/profile" class="button brdr-btn-main-color float-left">
										Отмена
									</router-link>
								</div>	
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
				name: "",
				secname: "",
				surname: "",
				phone: "",
				email: "",											
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
	padding-bottom: 50px;
	text-align: center;
}
input{
	width: 100%;
}
.button{
	margin-top: 15px;
}
@media(max-width: 991px){
	.button{		
		width: 100%;	
		margin-top: 0;	
	}
	.solid-button{
		margin-top: 15px;
	}
}
@media(max-width: 484px){
	.info-block{		
		width: 90%;		
	}
}
</style>