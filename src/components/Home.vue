<template>
	<div>
		<SliderBlock/>
		<AboutUs/>
		<OurProducts/>
		<Showcase/>
		<Testimonials/>
		<Contacts/>
		<ContactUs/>
		<Footer/>
	</div>
</template>

<script>
	import SliderBlock from "../components/SliderBlock.vue"
	import AboutUs from "../components/AboutUs.vue"
	import OurProducts from "../components/OurProducts.vue"
	import Showcase from "../components/Showcase.vue"
	import Testimonials from "../components/Testimonials.vue"
	import Contacts from "../components/Contacts.vue"
	import ContactUs from "../components/ContactUs.vue"
	import Footer from "../components/Footer.vue"
	
	export default{
		name: 'Home',
		components: {
			SliderBlock,
			AboutUs,
			OurProducts,
			Showcase,
			Testimonials,
			Contacts,
			ContactUs,
			Footer,
		}
	}
</script>

<style lang="less" scoped>
	
</style>