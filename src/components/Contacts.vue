<template>
	<div class="block" id="contacts">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<h2 class="text-uppercase text-center">
						Контакты
					</h2>
				</div>
			</div>	
			<div class="row">
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2644.317486008274!2d35.05664161581763!3d48.48880373461168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe284db84b0a7%3A0x7a48e64cef6d709a!2z0J7QntCeICLQodCi0KDQntCZINCk0JDQmtCi0J7QoCI!5e0!3m2!1sru!2sua!4v1581452023680!5m2!1sru!2sua" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="">
				</iframe>
			</div>
			<div class="row contact-info">
				<div class="col-md-9  col-sm-8">
					<h3>
						Информация о компании ООО “СТРОЙ ФАКТОР”:
					</h3>
					<table class="big-table">
					<tr>
						<td class="bold">
							Контактное лицо:
						</td>
						<td>
							Волощенко Владимир Васильевич
						</td>
					</tr>
					<tr>
						<td  class="bold">
							Адрес:
						</td>
						<td>
							Украина, Днепропетровская область, <br>
							г. Днепр, 49081 , пр. Мануйловский, 73, 
							оф. 814
						</td>
					</tr>
					<tr>
						<td  class="bold">
							Телефон:
						</td>
						<td>
							+380 (67) 562-69-95<br>
							+380 (66) 706-51-28<br>
							Владимир<br><br>
							+380 (67) 562-47-18<br>
							+380 (95) 508-93-34<br>
							Евгений
						</td>
					</tr>
					<tr>
						<td  class="bold">
							Электронная почта:
						</td>
						<td>
							stroyfaktor.dp@gmail.com
						</td>
					</tr>
					<tr>
						<td  class="bold">
							Организационно-правовая форма:
						</td>
						<td>
							Общество с ограниченой ответсвенностью
						</td>
					</tr>
				</table>
				</div>
				<div class="col-md-3 col-sm-4">
					<h3>
						График работы:
					</h3>
					<table class="small-table">
					<tr>
						<td>
							Понедельник
						</td>
						<td>
							9.00 - 18.00
						</td>
					</tr>
					<tr>
						<td>
							Вторник
						</td>
						<td>
							9.00 - 18.00
						</td>
					</tr>
					<tr>
						<td>
							Среда
						</td>
						<td>
							9.00 - 18.00
						</td>
					</tr>
					<tr>
						<td>
							Четверг
						</td>
						<td>
							9.00 - 18.00
						</td>
					</tr>
					<tr>
						<td>
							Пятница
						</td>
						<td>
							9.00 - 18.00
						</td>
					</tr>
					<tr>
						<td>
							Суббота
						</td>
						<td>
							9.00 - 18.00
						</td>
					</tr>
					<tr>
						<td>
							Воскресенье
						</td>
						<td>
							9.00 - 18.00
						</td>
					</tr>
				</table>
				<h3>
						Способы доставки:
				</h3>
				<table class="small-table">
				<tr>
					<td>
						- Самовывоз
					</td>					
					</tr>
					<tr>
					<td>
						- Новая почта
					</td>
					</tr> 
				</table>
				<h3>
						Способы оплаты:
				</h3>
				<table class="small-table">
				<tr>
					<td>
						- Безналичный расчет
					</td>					
					</tr>
					<tr>
					<td>
						- Наличными
					</td>
					</tr> 
				</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{

	}
</script>

<style lang="less" scoped>
@import '../assets/styles/index.less';
h3{
	margin-bottom: 25px;
}
.contact-info{
	margin-top: 50px;
}
table{
	margin-bottom: 30px;
}
.big-table>tr>td{
	padding: 15px 30px 15px 0;
}
.small-table>tr>td{
	padding: 2px 20px 2px 0;
}
tr{
	vertical-align: top;
}
.bold{
	font-weight: bold;
}
@media(max-width: 768px){
	td{
		display: block;
	}
	.big-table>tr>td{
		padding: 5px 5px 5px 0;
	}
	.small-table>tr>td{
		padding: 2px 20px 2px 0;
	}
}
</style>