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
						<input type="text" name="name" placeholder="Ваше имя" >
						<input type="text" name="phone" placeholder="Номер телефона">						
					</div>
					<div class="col-md-6 text-right">
						<textarea name="question" placeholder="Напишите вопрос"></textarea>
						<input type="submit" value="Отправить" class="button">
					</div>
				</div>	
			</form> 
		</div>
	</div>
</template>

<script>
	export default{

	}
</script>

<style lang="less" scoped>
@import '../assets/styles/index.less';
.col-margin{
	//padding: 15px;
}
input, textarea{
	margin-bottom: 30px;
	padding: 13px 17px;
	width: 100%;
	background-color: transparent;
	border: 1px solid @light_text;
	color: @light_text;
}
textarea:focus, input:focus{
  outline: none;
  background-color: rgba(255,255,255, 0.1);
}
textarea{
	height: 134px;
	resize: none;
}
.button{
	background-color: @main_color;
	color: @light_text;
	border: none;
	font-weight: bold;
	transition: 0.4s;
	width: 60%;
}
.button:hover{
	background-color: @hover_main_color;
	transition: 0.4s;
}	
</style>