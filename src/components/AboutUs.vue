<template>
	<div>
		<div class="block position-relative">		
			<div class="about-pic left-pic pic-1">			
			</div>
			<div class="container">
				<div class="row">
					<div class="col-md-6">
					</div>
					<div class="col-md-6">
						<h2 class="text-uppercase">
							О нас
						</h2>
						<p>
							Компания ООО «Строй Фактор» готова предложить Вашему вниманию широкий ассортимент современных кровельных и фасадных материалов от известных производителей.
						</p>
						<p>
							Одна из самых важных детализаций дома – это кровля, которая и защищает от неприятных природных явлений, и помогает сохранять тепло в вашем доме. Каждая кровля имеет ряд своих преимуществ.
						</p>
						<p>
							Мы продаем кровельные материалы и комплектующие высокого качества, давно зарекомендовавшие себя при использовании в наших климатических условиях, в надежности которых Вы можете быть уверены.
						</p>
					</div>
				</div>
			</div>						
		</div>
		<div class="block position-relative">		
			<div class="about-pic right-pic pic-2">			
			</div>
			<div class="container">
				<div class="row">					
					<div class="col-md-6">
						<p>
							Перед приобретением любой продукции Вы можете ознакомиться с ее образцами в нашем офисе, где представлены кровельные, фасадные и другие сопутствующие материалы ведущих производителей.
						</p>
						<p>
							Наша политика – индивидуальный подход к каждому клиенту. Высококвалифицированные менеджеры компании произведут все необходимые расчеты по Вашим размерам, а также предоставят консультации по любым интересующим Вас вопросам. Кроме того, помогут Вам выбрать наиболее оптимальные кровельные материалы  по соотношению цены и качества.
						</p>
						<p>
							Мы организуем доставку товара клиенту бесплатно или на льготных условиях (в зависимости от объема заказа).
						</p>
					</div>
					<div class="col-md-6">
					</div>
				</div>
			</div>						
		</div>
		<div class="block position-relative">		
			<div class="about-pic left-pic pic-3">			
			</div>
			<div class="container">
				<div class="row">
					<div class="col-md-6">
					</div>
					<div class="col-md-6">
						<p>
							Вся предлагаемая нами продукция прошла необходимую сертификацию, что подтверждается соответствующими документами. Мы знаем возможности продаваемых товаров и можем гарантировать их надежность.
						</p>
						<p>
							Ни для кого не секрет, что кровля придаст всему дому свой неповторимый стиль и особую привлекательность, которая будет радовать Вас долгие годы. Обращаясь к нам, Вы не просто покупаете кровельные материалы – Вы приобретаете комплексное решение для защиты Вашего дома с учетом всех его особенностей, месторасположения и Ваших личных предпочтений.
						</p>
						<p>
							Мы рады предложить Вам грамотную помощь. Ведь советы, которые помогают избегать ошибок, наиболее ценны. Обращайтесь к нам, выбирайте наше качество, наш опыт и надежность для красоты и долговечности Вашей кровли!
						</p>
					</div>
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
h2{
	font-weight: bold;
	font-size: 36px;
	line-height: 44px;
	color: @dark-bg;
	margin-bottom: 40px;
}
h2::after{
	content: " ";
  display: block;
  width: 80px;
  height: 1px;
  margin-top: 10px;
  background-color: #24292D;
}
.pic-1{
	background: url(../assets/images/about-pic-1.png) no-repeat;
	background-size: cover;	
}
.pic-2{
	background: url(../assets/images/about-pic-2.png) no-repeat;
	background-size: cover;	
}
.pic-3{
	background: url(../assets/images/about-pic-3.png) no-repeat;
	background-size: cover;	
}
.about-pic{
	width: 47%;
	height: 450px;
	position: absolute;
	top: 0;
}
.left-pic{
	left:0;
}
.right-pic{
	right:0;
}
.about-pic-right{
	width: 47%;
	height: 450px;
	position: absolute;
	top: 0;
}
.block{
	margin-top: 80px; 
	height: 500px;
}
.block:first-child{
	margin-top: 120px; 
}
p{
	line-height: 27px;
	margin-bottom: 20px;	
}
.left-pic:after {
  content: " ";
  display: block;
  width: 85%;
  height: 45px;
  background-color: #24292D;
  position: absolute;
  bottom:-45px;
}
.right-pic:after {
  content: " ";
  display: block;
  width: 85%;
  height: 45px;
  background-color: #24292D;
  position: absolute;
  bottom:-45px;
  right: 0;
}
</style>