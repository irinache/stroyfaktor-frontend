<template>
	<div class="block dark-bg">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<h2 class="text-uppercase text-center light-text">
						Задайте вопрос продавцу
					</h2>
				</div>
			</div>
			<form action="" autocomplete="off">
				<div class="row">
					<div class="col-md-6">
						<input type="text" name="name" placeholder="Ваше имя" v-model="name" class="dark-input">
						<input type="text" name="phone" placeholder="Номер телефона" v-model="phone_num" class="dark-input">						
					</div>
					<div class="col-md-6 text-right">
						<textarea name="question" placeholder="Напишите вопрос" class="dark-input" v-model="question"></textarea>
						<input type="submit" value="Отправить" class="button solid-button">
					</div>
				</div>	
			</form> 
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				name: "",
				phone_num: "",
				question: ""				
			}
		}
	}
</script>

<style lang="less" scoped>
@import '../assets/styles/index.less';
input,textarea{
	width: 100%;
}
textarea{
	height: 134px;
}
.button{
	margin-left: auto;
	margin-right: 0;
}

</style>